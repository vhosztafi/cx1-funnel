'use client';
import { DemoToolbar } from '@/development/demo-toolbar';
import { connectLocalBackoffice, currentLocalBackoffice } from '@/integration/local-backoffice';
import { LocalDraftControls, LocalDraftBoundary } from '@/integration/local-draft-controls';
import { useEffect, useState, useCallback, type ReactNode } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BrandHeader } from '@/components/brand-header';
import { DebugPanel } from '@/components/debug';
import { CleanSurface } from './clean';
import { Home } from '@/components/home';
import { Loader } from '@/components/controls';
import { createSession } from '@/domain/session';
import {
  families,
  familyForPath,
  progress,
  routeGuard,
  executeNavigation,
  steps,
  stepKey,
} from '@/domain/navigation';
import { populate, authPresenceGuard, returnToDashboard } from '@/domain/entry';
import { hydrateOptions } from '@/domain/option-cache';
import {
  RuntimeContext,
  useRuntime,
  useFormSnapshot,
  type Runtime,
  type HostInputs,
} from './context';
import type { Options } from '@/domain/options';
import { SummarySurface } from '@/surfaces/summary';
import { ExtrasSurface } from '@/surfaces/extras';
import { VehicleTypesSurface } from '@/surfaces/vehicle-types';
import { DeclarationSurface } from '@/surfaces/declaration';
import { AdditionalInformationSurface } from '@/surfaces/additional-information';
import { TradePlatesSurface } from '@/surfaces/trade-plates';
import { VehiclesSurface, SpecifiedVehicleSurface } from '@/surfaces/vehicles';
import { DriversSurface } from '@/surfaces/drivers';
import { CoverSurface } from '@/surfaces/cover';
import { OccupationsSurface } from '@/surfaces/occupations';
import { BusinessSurface } from '@/surfaces/business';
import { PremisesSurface } from '@/surfaces/premises';
import { ProposerSurface } from '@/surfaces/proposer';

declare global {
  interface Window {
    __CX1_HOST_INPUTS__?: HostInputs;
  }
}
const pending = <T,>(): Promise<T> => new Promise(() => {});
export function ClientApplication() {
  const [form, setForm] = useState<Runtime['form']>();
  const [host, setHost] = useState<HostInputs>({});
  const [previewStorage, setPreviewStorage] = useState<Runtime['previewStorage']>();
  const [options, setOptions] = useState<Options>({});
  const [loading, setLoading] = useState(false);
  const [initializationError, setInitializationError] = useState('');
  const mergeOptions = useCallback(
    (data: Options) => setOptions((previous) => ({ ...previous, ...data })),
    [],
  );
  useEffect(() => {
    let active = true;
    async function initialize() {
      const local = await connectLocalBackoffice();
      if (local) {
        if (!active) return;
        const session = createSession(local.storage); local.bind(session);
        setHost(local.host); setForm(session); return;
      }
      let inputs = window.__CX1_HOST_INPUTS__ ?? {};
      let mockStorage: Runtime['previewStorage'];
      if (
        (process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_CX1_DEMO === 'on') &&
        process.env.NEXT_PUBLIC_CX1_MOCKS !== 'off' &&
        window.__CX1_HOST_INPUTS__ === undefined &&
        !sessionStorage.getItem('authBroker') &&
        !sessionStorage.getItem('authBO')
      ) {
        const { createMockHost } = await import('@/development/mock-host');
        const mock = createMockHost();
        inputs = mock.host;
        mockStorage = mock.previewStorage;
      }
      if (!active) return;
      setHost(inputs);
      setPreviewStorage(mockStorage);
      setForm(createSession(window.sessionStorage));
    }
    void initialize().catch(error => { if(active) setInitializationError(error instanceof Error ? error.message : 'The saved draft could not be opened.'); });
    return () => {
      active = false;
    };
  }, []);
  if (!form) return initializationError ? <div className="alert alert-danger" role="alert">{initializationError} <button type="button" onClick={() => window.location.reload()}>Retry connection</button></div> : <p role="status">Opening Motor Trade capture…</p>;
  return (
    <RuntimeContext.Provider
      value={{
        form,
        host,
        previewStorage,
        options,
        loading,
        setLoading,
        surfaces: {
          1: ProposerSurface,
          2: PremisesSurface,
          3: BusinessSurface,
          4: OccupationsSurface,
          5: CoverSurface,
          6: DriversSurface,
          7: TradePlatesSurface,
          8: VehiclesSurface,
          9: SpecifiedVehicleSurface,
          10: VehicleTypesSurface,
          11: ExtrasSurface,
          12: DeclarationSurface,
          13: AdditionalInformationSurface,
          14: SummarySurface,
        },
      }}
    >
      <BrowserRouter useTransitions={false}>
        {previewStorage && (
          <aside className="preview-notice" aria-label="Mock preview">
            <strong>Mock preview</strong> — Mock authentication, bundled options and fictional
            addresses. Use manual vehicle entry. No quotation will be sent.
          </aside>
        )}
        <LocalDraftControls />
        <DemoToolbar />
        <DebugPanel />
        <OptionContainer merge={mergeOptions}>
          <LocalDraftBoundary><ApplicationRoutes /></LocalDraftBoundary>
        </OptionContainer>
      </BrowserRouter>
    </RuntimeContext.Provider>
  );
}
function OptionContainer({
  children,
  merge,
}: {
  children: ReactNode;
  merge: (data: Options) => void;
}) {
  const { pathname } = useLocation();
  const { host, previewStorage } = useRuntime();
  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [optionError, setOptionError] = useState(false);
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    setOptionError(false);
    void hydrateOptions(pathname, fetched, {
      storage: previewStorage ?? sessionStorage,
      merge,
      setLoading,
      setFetching: () => {},
      markFetched: () => setFetched(true),
      delay: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
      consume: host.consumeOptions ?? pending,
    }).catch(() => {
      if (previewStorage) setOptionError(true);
    });
  }, [pathname, fetched, host.consumeOptions, merge, previewStorage, retry]);
  return (
    <div className="position-relative">
      {previewStorage && optionError && (
        <div role="alert" className="alert alert-danger">
          Could not load UAT options.{' '}
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => setRetry((value) => value + 1)}
          >
            Retry loading options
          </button>
        </div>
      )}
      {children}
      {loading && (
        <div className="lookup-overlay">
          <Loader animation={host.loadingAnimation} />
        </div>
      )}
    </div>
  );
}
export function ApplicationRoutes() {
  const { host } = useRuntime();
  const savedQuoteEntry=typeof window!=='undefined' ? ({'http://127.0.0.1:3177':'http://127.0.0.1:3193/quotes/new','https://cx1-dev.gyongyos.co.uk':'https://cx1-admin-dev.gyongyos.co.uk/quotes/new'} as Record<string,string>)[window.location.origin] : undefined;
  return (
    <Routes>
      <Route path="/" element={<Home logo={host.logo} savedQuoteEntry={savedQuoteEntry} />} />
      {families.flatMap((family) => [
        ...[
          '/broker/clean/buy',
          '/back-office/clean/buy',
          '/back-office/clean/new-quote/buy',
          '/back-office/clean/new-quote-client/buy',
        ].map((prefix) => (
          <Route
            key={`${prefix}-${family}`}
            path={`${prefix}/${family}`}
            element={<CleanSurface />}
          >
            <Route path="*" element={<CleanSurface />} />
          </Route>
        )),
        <Route key={`${family}-direct`} path={`/${family}`} element={<Container />}>
          <Route index element={<Controller />} />
          <Route path="steps/:step" element={<Controller />} />
        </Route>,
        <Route key={`${family}-broker`} path={`/broker/buy/${family}`} element={<Container />}>
          <Route index element={<Controller />} />
          <Route path=":guid" element={<Populate />} />
          <Route path="steps/:step" element={<Controller />} />
        </Route>,
        // CLR-002: preserve parent and declared children without supplying an Outlet.
        <Route key={`${family}-bo`} path={`/back-office/buy/${family}`} element={<Populate />}>
          <Route index element={<Controller />} />
          <Route path=":guid" element={<Populate />} />
          <Route path="steps/:step" element={<Controller />} />
        </Route>,
        <Route
          key={`${family}-new`}
          path={`/back-office/new-quote/buy/${family}`}
          element={<Container />}
        >
          <Route index element={<Controller />} />
          <Route path=":brokerId/:brokerName" element={<Populate />} />
          <Route path="steps/:step" element={<Controller />} />
        </Route>,
        <Route
          key={`${family}-client`}
          path={`/back-office/new-quote-client/buy/${family}`}
          element={<Container />}
        >
          <Route index element={<Controller />} />
          <Route path=":brokerId/:brokerName/:clientId" element={<Populate />} />
          <Route path=":brokerId/:brokerName/:clientId/:guid" element={<Populate />} />
          <Route path="steps/:step" element={<Controller />} />
        </Route>,
        <Route key={`${family}-alias`} path="/motortrade/buy" element={<Container />}>
          <Route index element={<Controller />} />
          <Route path=":step" element={<Controller />} />
        </Route>,
      ])}
      <Route path="*" element={null} />
    </Routes>
  );
}
function readBackoffice() {
  const raw = sessionStorage.getItem('isBackoffice');
  return raw ? !!JSON.parse(raw).state?.backoffice : false;
}
function Container() {
  const { host, loading } = useRuntime();
  const snapshot = useFormSnapshot();
  const derived = progress(snapshot.step, snapshot.formData);
  const backoffice = readBackoffice();
  return (
    <>
      <header className="journey-header">
        <BrandHeader logo={host.logo} />
        <div className="journey-toolbar">
          {backoffice ? host.backofficeRibbon : host.brokerRibbon}
          <a
            href={backoffice ? host.backofficeDashboard : host.brokerDashboard}
            onClick={(event) => { const connected = currentLocalBackoffice(); if(connected) { event.preventDefault(); connected.returnToRecord(); } else returnToDashboard(sessionStorage); }}
          >
            Return to Dashboard
          </a>
        </div>
        <div className="journey-progress">
          <ProgressBar now={derived.percent} />
        </div>
      </header>
      <Outlet />
      {loading && (
        <div className="lookup-overlay">
          <Loader animation={host.loadingAnimation} />
        </div>
      )}
    </>
  );
}
function Controller() {
  const { step } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { form, host, setLoading, surfaces, previewStorage } = useRuntime();
  const snapshot = useFormSnapshot();
  const family = familyForPath(location.pathname);
  useEffect(() => {
    if (
      !authPresenceGuard(
        host.contextStorage ?? previewStorage ?? sessionStorage,
        () => setLoading(true),
        () => {
          if (host.brokerDashboard) window.location.assign(host.brokerDashboard);
        },
      )
    )
      return;
    executeNavigation(routeGuard(step, snapshot.stepAsEnum, family), {
      scroll: () => {},
      setStep: form.setStep,
      navigate: (href, state) => navigate(href, { state }),
    });
  }, [
    step,
    snapshot.stepAsEnum,
    family,
    navigate,
    form,
    host.brokerDashboard,
    host.contextStorage,
    setLoading,
    previewStorage,
  ]);
  const numeric = steps.find((s) => stepKey(s) === step);
  const Surface = numeric ? surfaces[numeric] : undefined;
  return (
    <>
      <div className="container container-body-md journey-counter">
        {progress(snapshot.step, snapshot.formData).counter}
      </div>
      {Surface && <Surface />}
    </>
  );
}
function Populate() {
  const params = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { host, form } = useRuntime();
  useEffect(() => {
    const write = (key: string, state: Record<string, unknown>) =>
      sessionStorage.setItem(key, JSON.stringify({ state, version: 0 }));
    void populate({ ...params, referrer: document.referrer }, familyForPath(pathname), {
      setClient: (clientId) => write('clientId', { clientId }),
      setBroker: (brokerId, brokerName) => write('brokerDetail', { brokerId, brokerName }),
      setBackoffice: (backoffice) => write('isBackoffice', { backoffice }),
      setGuid: (guid) => write('brokerGuid', { guid }),
      setData: form.setData,
      consume: host.consumePopulation ?? pending,
      navigate: (href, state) => navigate(href, { state }),
    }).catch(() => {});
  }, [params, pathname, form, host.consumePopulation, navigate]);
  return <Loader animation={host.loadingAnimation} />;
}

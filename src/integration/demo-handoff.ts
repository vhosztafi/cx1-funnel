import type { RawForm } from '@/domain/types';
import type { Options } from '@/domain/options';
import { DEMO_ADMIN_ORIGIN, demoQuoteHandoff, type DemoQuoteHandoff } from './demo-quote';

const SOURCE_ORIGIN = 'https://cx1-dev.gyongyos.co.uk';
const STORAGE_KEY = 'cx1-demo-quote-handoff-v1';
let active: Promise<string> | undefined;

async function fingerprint(raw: RawForm, startTime: unknown) {
  const bytes = new TextEncoder().encode(JSON.stringify({ raw, startTime }));
  const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', bytes));
  return Array.from(digest, byte => byte.toString(16).padStart(2, '0')).join('');
}

async function retainedPayload(raw: RawForm, options: Options, startTime: unknown): Promise<DemoQuoteHandoff> {
  const hash = await fingerprint(raw, startTime);
  const saved = sessionStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const entry = JSON.parse(saved) as { hash: string; payload: DemoQuoteHandoff };
      if (entry.hash === hash && entry.payload.type === 'cx1:quote-handoff') return entry.payload;
    } catch { /* Replace an invalid local handoff. */ }
  }
  const payload = demoQuoteHandoff(raw, options, startTime, crypto.randomUUID());
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ hash, payload }));
  return payload;
}

export function submitDemoQuote(raw: RawForm, options: Options, startTime: unknown): Promise<string> {
  if (active) return active;
  if (window.location.origin !== SOURCE_ORIGIN) return Promise.reject(new Error('The connected quote handoff is available on the hosted demo site.'));
  // Opening the window before any awaited work preserves the submit click's
  // browser activation. The admin page requests the payload after login.
  const target = window.open(`${DEMO_ADMIN_ORIGIN}/quote-import`, 'cx1-demo-quote');
  if (!target) return Promise.reject(new Error('Allow the admin quote window to open, then submit again.'));
  const adminWindow = target;
  active = new Promise<string>((resolve, reject) => {
    let payload: DemoQuoteHandoff | undefined;
    let finished = false;
    const timeout = window.setTimeout(() => done(new Error('The admin quote window did not finish. Return here and submit again.')), 5 * 60_000);
    function done(error?: Error, url?: string) {
      if (finished) return;
      finished = true;
      window.clearTimeout(timeout);
      window.removeEventListener('message', receive);
      active = undefined;
      if (error) reject(error);
      else resolve(url!);
    }
    function receive(event: MessageEvent) {
      if (event.origin !== DEMO_ADMIN_ORIGIN || event.source !== adminWindow || !event.data || typeof event.data !== 'object') return;
      if (event.data.type === 'cx1:quote-ready' && payload) adminWindow.postMessage(payload, DEMO_ADMIN_ORIGIN);
      if (event.data.type === 'cx1:quote-created' && typeof event.data.url === 'string' &&
          /^https:\/\/cx1-admin-dev\.gyongyos\.co\.uk\/quotes\/[0-9a-f-]{36}$/i.test(event.data.url)) {
        sessionStorage.removeItem(STORAGE_KEY);
        done(undefined, event.data.url);
      }
      if (event.data.type === 'cx1:quote-error') done(new Error('The admin site could not save the demo quote. Review its message and submit again.'));
    }
    window.addEventListener('message', receive);
    void retainedPayload(raw, options, startTime).then(value => {
      payload = value;
      adminWindow.postMessage(value, DEMO_ADMIN_ORIGIN);
    }, error => done(error instanceof Error ? error : new Error('The demo handoff could not be prepared.')));
  });
  return active;
}

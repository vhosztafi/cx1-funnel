'use client';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Loader } from '@/components/controls';
import { runClean } from '@/domain/clean';
import { useRuntime } from './context';
export function CleanSurface() {
  const { form, host } = useRuntime();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    void runClean(pathname, sessionStorage, form.reset, host.clean, {
      navigate,
      exit: (path) => window.location.assign(path),
    });
  }, [pathname, form, host.clean, navigate]);
  return <Loader animation={host.loadingAnimation} />;
}

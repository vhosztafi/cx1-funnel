import { ClientApplication } from '@/runtime/client-application';
// Export one shell; Cloudflare's SPA fallback preserves browser-owned routes,
// including parameterized population paths and unmatched-route blank views.
export function generateStaticParams() {
  return [{ route: [] }];
}

export default function Page() {
  return <ClientApplication />;
}

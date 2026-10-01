import type { ReactNode } from 'react';
import './globals.scss';
import './tailwind.css';
import './quote-theme.css';
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

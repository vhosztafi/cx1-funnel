'use client';
import { Link } from 'react-router-dom';
import { BrandHeader } from './brand-header';
export function Home({ logo, savedQuoteEntry }: { logo?: string; savedQuoteEntry?: string }) {
  // ROOT-001–007 / ROOT-013–015. No form reads or writes on either link.
  return (
    <>
      <BrandHeader logo={logo} />
      <div className="container container-body-sm product-entry">
        <h3>Products</h3>
        <ul>
          <li>
            <Link to="/commercial-combined/steps/step1">Commercial combined</Link>
          </li>
          <li>
            <Link to="/motortrade-roadrisks/steps/step1">Motor Trade</Link>
          </li>
        </ul>
        {savedQuoteEntry && <p><a href={savedQuoteEntry}>Start a saved Motor Trade quote</a> — choose the client, agency and broker contact first.</p>}
      </div>
    </>
  );
}

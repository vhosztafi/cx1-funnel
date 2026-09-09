'use client';
import { Link } from 'react-router-dom';
export function Home({ logo }: { logo?: string }) {
  // ROOT-001–007 / ROOT-013–015. No form reads or writes on either link.
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex align-items-center mt-3">
          <div className="logo">
            <img src={logo} alt="CG logo" />
          </div>
        </div>
      </div>
      <div className="container container-body-sm">
        <h3>Products</h3>
        <ul>
          <li>
            <Link to="/commercial-combined/steps/step1">Commercial combined</Link>
          </li>
          <li>
            <Link to="/motortrade-roadrisks/steps/step1">Motor Trade</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

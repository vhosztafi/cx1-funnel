export function BrandHeader({ logo }: { logo?: string }) {
  return (
    <div className="brand-band">
      <div className="logo">
        {logo ? <img src={logo} alt="CG logo" /> : <span className="brand-wordmark">CX1</span>}
      </div>
    </div>
  );
}

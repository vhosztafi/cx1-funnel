// MTS-14-R06 / MTS-08-R08: minimum, not maximum, fraction digits.
export function currencyFormat(value: unknown, decimalCases = 2) {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: decimalCases,
  }).format((value || 0) as number);
}

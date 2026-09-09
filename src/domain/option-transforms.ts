import { youngBandDefinitions } from './driver-rules';
import type { ExcessRow, OptionItem, YoungBand } from './options';

/** OPT-MT-20/27/52/72. Input is a supplied nullable numeric value, not a lookup. */
export function gvwInKilograms(maxGvw: number | null): number | null {
  return maxGvw === null ? null : maxGvw * 1000;
}

export interface SuppliedExcess extends ExcessRow {
  active: boolean;
  isDefault: boolean;
  numericValue: number;
}

/** OPT-MT-09/58: preserve input rows; defaults sort first without selecting one. */
export function projectExcesses(rows: readonly SuppliedExcess[]): ExcessRow[] {
  return rows
    .filter((row) => row.active)
    .map(({ value, text, numericValue, isDefault }) => ({
      value,
      text: text + (isDefault ? ' (Default)' : ''),
      numericValue,
      isDefault,
    }))
    .sort((a, b) => Number(b.isDefault) - Number(a.isDefault) || a.numericValue - b.numericValue);
}

function singleText(rows: readonly OptionItem[], id: number): string {
  const matches = rows.filter((row) => row.value === id);
  // OPT-MT-69/70: Single requires exactly one match. This is an input-contract
  // failure, never mounted validation copy or a substitute production label.
  if (matches.length !== 1) throw new Error('Expected exactly one supplied option row');
  return matches[0].text;
}

/** OPT-MT-22/64–70, CLR-001. Never called with invented rows or a guessed culture. */
export function projectYoungBands(
  indemnities: readonly OptionItem[],
  cCs: readonly OptionItem[],
  formatCurrencyC0: (value: number) => string,
): YoungBand[] {
  return youngBandDefinitions.bands.map((band) => ({
    ageFrom: band.ageFrom,
    ageTo: band.ageTo,
    defaultAdditionalIndemnity: singleText(indemnities, band.defaultIndemnity),
    defaultCc: singleText(cCs, band.defaultCc),
    indemnities: indemnities.filter((row) =>
      (band.allowedIndemnity as readonly unknown[]).includes(row.value),
    ),
    cCs: cCs.filter((row) => (band.allowedCC as readonly unknown[]).includes(row.value)),
    additionalExcess: formatCurrencyC0(band.excess),
  }));
}

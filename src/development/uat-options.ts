import { optionCollections, type Options } from '@/domain/options';

// User-authorized bundled options snapshot. Only the same-origin access cookie is sent.
export const OPTIONS_URL = '/api/options.json';

export async function consumeUatOptions(): Promise<{ data: Options }> {
  const response = await fetch(OPTIONS_URL, {
    method: 'GET',
    credentials: 'same-origin',
    referrerPolicy: 'no-referrer',
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`UAT options returned HTTP ${response.status}`);
  const data: unknown = await response.json();
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    throw new Error('Invalid UAT options response');
  }
  const collections = data as Record<string, unknown>;
  for (const name of optionCollections) {
    const rows = collections[name];
    if (
      !Array.isArray(rows) ||
      rows.some(
        (row) =>
          !row ||
          typeof row !== 'object' ||
          typeof row.text !== 'string' ||
          !['string', 'number'].includes(typeof row.value),
      )
    )
      throw new Error(`Invalid UAT option collection: ${name}`);
  }
  // Retain the original rows, order, extra collections and nested metadata.
  return { data: data as Options };
}

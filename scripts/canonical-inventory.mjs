import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';

// IMPL-01: evidence indexing, never runtime interpretation of prose.
const files = [
  '01-scope-and-source-inventory',
  '02-journey-and-navigation',
  '03-questions-and-business-rules',
  '04-llm-implementation-handoff',
  'clarifications',
].map((n) => `docs/motor-trade-funnel/${n}.md`);
const records = new Map();
const hashes = {};
for (const file of files) {
  const bytes = readFileSync(file);
  hashes[file] = createHash('sha256').update(bytes).digest('hex');
  const lines = bytes.toString('utf8').split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const heading = lines[i].match(
      /^#{2,4} ((?:MTS-\d{2}(?:[ABCLØ]|-[QRU]\d{2})?|(?:CTL|OPT|AUD)-MT-\d{2}|SHR-MT-R\d{2}))(?=\s|$)/,
    );
    const row = lines[i].match(
      /^\|\s*`?((?:MTS-\d{2}[ABCLØ]?|EDGE-[A-Z0-9Ø-]+|(?:OPT|CTL|AUD)-MT-\d{2}|(?:ROOT|TERM)-\d{3}|RT-[A-Z0-9-]+))`?\s*\|/,
    );
    const id = (heading || row)?.[1];
    if (!id) continue;
    if (records.has(id) && !heading && !/^MTS-\d{2}[ABCLØ]?$/.test(id)) continue;
    let end = i + 1;
    if (heading) while (end < lines.length && !/^#{1,4} /.test(lines[end])) end++;
    const body = lines.slice(i, end).join('\n');
    const properties = {};
    for (const line of lines.slice(i + 1, end)) {
      const p = line.match(/^\| ([^|]+) \| (.*) \|$/);
      if (p && p[1] !== 'Property') properties[p[1]] = p[2].replaceAll('\\|', '|');
    }
    const existing = records.get(id);
    if (existing && existing.kind === 'heading') continue;
    const parentHeading = heading
      ? lines[i]
      : lines.slice(0, i).findLast((line) => /^#{1,4} /.test(line));
    const anchor = parentHeading
      ?.replace(/^#+ /, '')
      .toLowerCase()
      .replace(/[^\p{L}\p{N}_\-\s]/gu, '')
      .replace(/ /g, '-');
    records.set(id, {
      id,
      source: file,
      line: i + 1,
      anchor,
      kind: heading ? 'heading' : 'table',
      title: lines[i],
      properties,
      contract: body,
      clarifications: [...new Set(body.match(/CLR-00[1-9]/g) || [])],
    });
  }
}
const inventory = {
  version: 1,
  sources: hashes,
  records: [...records.values()].sort((a, b) => a.id.localeCompare(b.id, 'en')),
};
const dir = 'src/contracts';
mkdirSync(dir, { recursive: true });
const path = `${dir}/canonical-inventory.json`;
const output = JSON.stringify(inventory, null, 2) + '\n';
if (process.argv.includes('--check')) {
  if (!existsSync(path) || readFileSync(path, 'utf8') !== output)
    throw new Error('Canonical inventory differs; inspect source or regenerate deliberately.');
} else writeFileSync(path, output);
const claimsPath = 'docs/implementation/coverage.json';
const claims = existsSync(claimsPath) ? JSON.parse(readFileSync(claimsPath, 'utf8')) : {};
for (const r of inventory.records) {
  claims[r.id] ??= {
    implementation: [],
    tests: [],
    status: 'Pending',
    notes: r.clarifications.join(', '),
  };
}
mkdirSync('docs/implementation', { recursive: true });
const table =
  '# Implementation traceability\n\nGenerated from canonical owners and coverage.json. Pending means no verified implementation claim. Inventory tests prove indexing only; behavioral tests must be linked separately.\n\n| Stable ID | Canonical link | Implementation files | Test files | Status | Notes/CLR |\n|---|---|---|---|---|---|\n' +
  inventory.records
    .map((r) => {
      const c = claims[r.id];
      return `| ${r.id} | [source L${r.line}](../../${r.source}#${r.anchor}) | ${c.implementation.join(', ')} | ${c.tests.join(', ')} | ${c.status} | ${c.notes} |`;
    })
    .join('\n') +
  '\n';
if (!process.argv.includes('--check')) {
  writeFileSync(claimsPath, JSON.stringify(claims, null, 2) + '\n');
  writeFileSync('docs/implementation/TRACEABILITY.md', table);
}
console.log(
  `${inventory.records.length} owners indexed; ${inventory.records.filter((r) => /MTS-\d{2}-Q/.test(r.id)).length} question contracts. No behavioral coverage inferred.`,
);

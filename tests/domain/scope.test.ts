// @vitest-environment node
import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';
import ts from 'typescript';
import { it, expect } from 'vitest';

function files(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? files(join(directory, entry.name)) : [join(directory, entry.name)],
  );
}
it('TERM-008 and AUD-MT-10/11 keep production code local and the canonical inventory out of the client graph', () => {
  const violations: string[] = [];
  for (const file of files('src').filter((path) => /\.tsx?$/.test(path))) {
    const source = ts.createSourceFile(
      file,
      readFileSync(file, 'utf8'),
      ts.ScriptTarget.Latest,
      true,
      file.endsWith('tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
    );
    const inspect = (node: ts.Node) => {
      if (
        ts.isExpressionStatement(node) &&
        ts.isStringLiteral(node.expression) &&
        node.expression.text === 'use server'
      )
        violations.push(`${file}: server action`);
      if (ts.isImportDeclaration(node) && ts.isStringLiteral(node.moduleSpecifier)) {
        if (
          /canonical-inventory|next\/server|axios|supabase|stripe/.test(node.moduleSpecifier.text)
        )
          violations.push(`${file}: excluded import ${node.moduleSpecifier.text}`);
      }
      if (ts.isCallExpression(node) || ts.isNewExpression(node)) {
        const expression = node.expression;
        const name = ts.isIdentifier(expression)
          ? expression.text
          : ts.isPropertyAccessExpression(expression)
            ? expression.name.text
            : '';
        if (['fetch', 'XMLHttpRequest', 'WebSocket', 'EventSource', 'sendBeacon'].includes(name))
          violations.push(`${file}: transport ${name}`);
      }
      ts.forEachChild(node, inspect);
    };
    inspect(source);
  }
  expect(
    files('src/app')
      .map((path) => relative('src/app', path))
      .filter((path) => /(?:^|[\\/])api(?:[\\/]|$)|(?:^|[\\/])route\.tsx?$/.test(path)),
  ).toEqual([]);
  expect(violations).toEqual([]);
});

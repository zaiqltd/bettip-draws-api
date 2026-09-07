/* Refresh the CSVs from the live API. Run by the daily workflow. */
import { writeFileSync } from 'node:fs';
const base = 'https://bettip.co.za/api/v1';
for (const [name, path] of [['uk49s', 'uk49s/draws.csv'], ['gosloto', 'gosloto/draws.csv'], ['sa-lottery', 'lotto/draws.csv']]) {
  const r = await fetch(`${base}/${path}`);
  if (!r.ok) throw new Error(`${path}: HTTP ${r.status}`);
  writeFileSync(`data/${name}.csv`, await r.text());
  console.log(`${name}.csv refreshed`);
}

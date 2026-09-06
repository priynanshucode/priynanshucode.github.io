export type SampleRow = { id: string; region: string; amount: number | null };
export const sampleRows: SampleRow[] = [
  { id: 'A101', region: 'north', amount: 120 },
  { id: 'A102', region: ' West ', amount: 240 },
  { id: 'A103', region: 'south', amount: 180 },
  { id: 'A102', region: 'West', amount: 240 },
  { id: 'A104', region: 'east', amount: null },
  { id: 'A105', region: 'NORTH', amount: 310 },
  { id: 'A106', region: 'west', amount: 160 },
  { id: 'A107', region: 'east', amount: 220 },
];
export function processRows(rows: SampleRow[]) {
  const seen = new Set<string>();
  const accepted: SampleRow[] = [];
  const issues: { row: number; id: string; reason: string }[] = [];
  for (const [index, row] of rows.entries()) {
    if (seen.has(row.id)) { issues.push({ row: index + 1, id: row.id, reason: 'Duplicate ID' }); continue; }
    if (row.amount === null || !Number.isFinite(row.amount) || row.amount < 0) {
      issues.push({ row: index + 1, id: row.id, reason: 'Missing or invalid amount' }); continue;
    }
    seen.add(row.id);
    accepted.push({ ...row, region: row.region.trim().toLowerCase() });
  }
  const totals = accepted.reduce<Record<string, number>>((result, row) => {
    result[row.region] = (result[row.region] ?? 0) + (row.amount ?? 0); return result;
  }, {});
  return { accepted, issues, totals };
}

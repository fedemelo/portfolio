export type Period = `${'Summer' | 'Fall' | 'Spring'} ${number}`

export function getPeriodFromDate(date: Date): Period {
  const month = date.getMonth();
  const year = date.getFullYear();
  // 0-indexed months
  const period = month < 6 ? 'Spring' : month < 7 ? 'Summer' : 'Fall';
  return `${period} ${year}`;
}
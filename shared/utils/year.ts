import { getPeriodFromDate } from './period';

export type YearRange = `${number} – ${number}` | `${number} – Present`;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatMonthYear(date: Date): string {
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

export function formatDuration(startDate: Date, endDate?: Date, isCurrent?: boolean): string {
  const end = isCurrent ? new Date() : (endDate ?? new Date());
  const totalMonths = (end.getFullYear() - startDate.getFullYear()) * 12 +
                      (end.getMonth() - startDate.getMonth());
  if (totalMonths <= 0) return '';
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`);
  return parts.join(' ');
}

export function formatDateRange(startDate: Date, endDate?: Date, isCurrent?: boolean): string {
  const start = formatMonthYear(startDate);
  const end = isCurrent ? 'Present' : (endDate ? formatMonthYear(endDate) : '');
  const duration = formatDuration(startDate, endDate, isCurrent);
  const range = end ? `${start} – ${end}` : start;
  return duration ? `${range} · ${duration}` : range;
}

export function formatTeachingPeriod(period: string, startDate: Date, endDate?: Date, isCurrent?: boolean): string {
  const duration = formatDuration(startDate, endDate, isCurrent);
  return duration ? `${period} · ${duration}` : period;
}

export function getYearRange(
  startDate: Date | undefined,
   endDate?: Date, 
   isCurrent?: boolean
): `${number}` | YearRange {
  if (!startDate && !endDate)
    throw new Error("No dates provided");
  
  if (!startDate && endDate)
    return `${endDate.getFullYear()}`;

  if (!endDate && startDate)
    return isCurrent ? `${startDate.getFullYear()} – Present` : `${startDate.getFullYear()}`;

  if (startDate.getFullYear() === endDate.getFullYear())
    return `${startDate.getFullYear()}`;

  return `${startDate.getFullYear()} – ${endDate.getFullYear()}`;
}

export function getYearSequence(dates: Date[]): string {
  if (dates.length === 1) return getYearRange(dates[0]);

  const groupedByYear = Object.groupBy(dates, date => date.getFullYear());
  
  return Object.entries(groupedByYear)
    .sort(([a], [b]) => Number(a) - Number(b))
    .flatMap(([_, yearDates]) => {
      if (yearDates.length === 1) return [yearDates[0].getFullYear().toString()];
      
      // Multiple dates in same year - use sorted periods
      const periods = new Array(yearDates.length).fill(0).map((_, index) => getPeriodFromDate(yearDates[index]));
      const periodOrder = { Spring: 0, Summer: 1, Fall: 2 };
      return periods.sort((a, b) => {
        const [periodA] = a.split(' ');
        const [periodB] = b.split(' ');
        return periodOrder[periodA] - periodOrder[periodB];
      });
    })
    .join(", ");
}
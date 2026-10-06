import { getPeriodFromDate } from './period';

export type YearRange = `${number} – ${number}` | `${number} – Present`;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatMonthYear(date: Date): string {
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

export function formatDateRange(startDate: Date, endDate?: Date, isCurrent?: boolean): string {
  const start = formatMonthYear(startDate);
  const end = isCurrent ? 'Present' : (endDate ? formatMonthYear(endDate) : '');
  return end ? `${start} – ${end}` : start;
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

  if (startDate!.getFullYear() === endDate!.getFullYear())
    return `${startDate!.getFullYear()}`;

  return `${startDate!.getFullYear()} – ${endDate!.getFullYear()}`;
}

export function getYearSequence(dates: Date[]): string {
  if (dates.length === 1) return getYearRange(dates[0]);

  const groupedByYear = Object.groupBy(dates, date => date.getFullYear());
  const hasMultipleInSameYear = Object.values(groupedByYear).some(yearDates => (yearDates?.length ?? 0) > 1);

  if (!hasMultipleInSameYear) {
    return Object.keys(groupedByYear)
      .sort((a, b) => Number(a) - Number(b))
      .join(', ');
  }

  const periodOrder = { Spring: 0, Summer: 1, Fall: 2 };
  return [...dates]
    .sort((a, b) => {
      if (a.getFullYear() !== b.getFullYear()) return a.getFullYear() - b.getFullYear();
      return periodOrder[getPeriodFromDate(a).split(' ')[0] as keyof typeof periodOrder]
           - periodOrder[getPeriodFromDate(b).split(' ')[0] as keyof typeof periodOrder];
    })
    .map(date => getPeriodFromDate(date))
    .join(', ');
}
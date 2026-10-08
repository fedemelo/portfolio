// Dates arrive as "YYYY-MM-DD", which JavaScript parses as UTC midnight; formatting in UTC keeps the written day in every visitor time zone
const CALENDAR_DATE_TIME_ZONE = "UTC"

export function formatDate(dateInput: string | Date, locale: string): string {
  try {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput

    if (!isNaN(date.getTime()))
      return date.toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: CALENDAR_DATE_TIME_ZONE,
      })

    console.warn('Invalid date provided to formatDate:', dateInput)
    return dateInput as string

  } catch (error) {
    console.error('Error formatting date:', error, dateInput)
    return dateInput as string
  }
}

export function formatDateRange(
  startDate: string | Date,
  endDate: string | Date | undefined,
  locale: string,
  presentLabel: string
): string {
  const end = endDate ? formatDate(endDate, locale) : presentLabel
  return `${formatDate(startDate, locale)} - ${end}`
}

export function formatShortDate(dateInput: string | Date, locale: string): string {
  try {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput
    if (!isNaN(date.getTime()))
      return date.toLocaleDateString(locale, {
        year: "numeric",
        month: "short",
        timeZone: CALENDAR_DATE_TIME_ZONE,
      })

    console.warn('Invalid date provided to formatShortDate:', dateInput)
    return dateInput as string

  } catch (error) {
    console.error('Error formatting short date:', error, dateInput)
    return dateInput as string
  }
}

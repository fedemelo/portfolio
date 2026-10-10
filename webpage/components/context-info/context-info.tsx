import { Calendar, MapPin, Building2, Users, User, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Location, Organization } from "@/types"
import { getOrgName } from "@/types/organization"
import { formatDate, formatDateRange } from "@/utils/date"
import { useTranslation } from "@/hooks/useTranslation"

export function ContextInfo({
  date,
  startDate,
  endDate,
  period,
  location,
  organization,
  team,
  department,
  supervisor,
}: {
  date?: string | Date | number
  startDate?: string | Date | number
  period?: string
  endDate?: string | Date | number
  location?: Location
  organization?: Organization
  team?: string
  department?: string
  supervisor?: string
}) {

  if (startDate && endDate && date)
    throw new Error("Cannot have both startDate and endDate and date")

  if (period && (startDate || date))
    throw new Error("Cannot have both period and startDate or date")

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">      
      {(date || (endDate && !startDate)) && <SingleDateDisplay date={(date || endDate)!} />}
      {startDate && endDate && <DateRangeDisplay startDate={startDate} endDate={endDate} />}
      {period && <PeriodDisplay period={period} />}

      {location && <LocationDisplay location={location} />}

      {organization && <OrganizationDisplay organization={organization} />}

      {team && <TeamDisplay team={team} />}

      {department && <DepartmentDisplay department={department} />}

      {supervisor && <SupervisorDisplay supervisor={supervisor} />}
    </div>
  )
}


function SingleDateDisplay({ date }: { date: string | Date | number }) {
  const t = useTranslation()

  return (
    <div className="flex items-center">
      <Calendar className="mr-1 h-4 w-4" />
      {typeof date === "number" ? date : formatDate(date, t.locale)}
    </div>
  )
}

function DateRangeDisplay({ startDate, endDate }: { startDate: string | Date | number, endDate?: string | Date | number }) {
  const t = useTranslation()

  return (
    <div className="flex items-center">
      <Calendar className="mr-1 h-4 w-4" />
      {typeof startDate === "number" || typeof endDate === "number"
        ? `${startDate} - ${endDate ?? t.common.present}`
        : formatDateRange(startDate, endDate, t.locale, t.common.present)}
    </div>
  )
}

function PeriodDisplay({ period }: { period: string }) {
  return (
    <div className="flex items-center">
      <Calendar className="mr-1 h-4 w-4" />
      {period}
    </div>
  )
}

function LocationDisplay({ location }: { location: Location }) {
  const t = useTranslation()
  const countries: Readonly<Record<string, string>> = t.countries

  return (
    <div className="flex items-center">
      <MapPin className="mr-1 h-4 w-4" />
      {location.city && `${location.city}, `}
      {location.state && `${location.state}, `}
      {location.country && `${countries[location.country] ?? location.country}`}
    </div>
  )
}

function OrganizationDisplay({ organization }: { organization: Organization }) {
  return (
    <div className="flex items-center gap-1">
      <Building2 className="h-4 w-4" />
      <span>{getOrgName(organization)}</span>
      {organization.link && (
        <Link 
          href={organization.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink className="h-3 w-3" />
        </Link>
      )}
    </div>
  )
}

function TeamDisplay({ team }: { team: string }) {
  return (
    <div className="flex items-center">
      <Users className="mr-1 h-4 w-4" />
      {team}
    </div>
  )
}

function DepartmentDisplay({ department }: { department: string }) {
  return (
    <div className="flex items-center">
      <Building2 className="mr-1 h-4 w-4" />
      {department}
    </div>
  )
}

function SupervisorDisplay({ supervisor }: { supervisor: string }) {
  const t = useTranslation()

  return (
    <div className="flex items-center">
      <User className="mr-1 h-4 w-4" />
      {t.common.supervisor}: {supervisor}
    </div>
  )
}
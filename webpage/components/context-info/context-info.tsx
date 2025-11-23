import { Calendar, MapPin, Building2, Users, User, ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Location, Organization } from "@/types"
import { formatDate } from "@/utils/date"

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
  return (
    <div className="flex items-center">
      <Calendar className="mr-1 h-4 w-4" />
      {typeof date === "number" ? date : formatDate(date)}
    </div>
  )
}

function DateRangeDisplay({ startDate, endDate }: { startDate: string | Date | number, endDate?: string | Date | number }) {
  return (
    <div className="flex items-center">
      <Calendar className="mr-1 h-4 w-4" />
      {typeof startDate === "number" ? startDate : formatDate(startDate)}
      {endDate ? ` - ${typeof endDate === "number" ? endDate : formatDate(endDate)}` : " - Present"}
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
  return (
    <div className="flex items-center">
      <MapPin className="mr-1 h-4 w-4" />
      {location.city && `${location.city}, `}
      {location.state && `${location.state}, `}
      {location.country && `${location.country}`}
    </div>
  )
}

function OrganizationDisplay({ organization }: { organization: Organization }) {
  return (
    <div className="flex items-center gap-1">
      <Building2 className="h-4 w-4" />
      <span>{organization.name}</span>
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
  return (
    <div className="flex items-center">
      <User className="mr-1 h-4 w-4" />
      Supervisor: {supervisor}
    </div>
  )
}
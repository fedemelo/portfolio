import { GraduationCap, Star } from "lucide-react"
import type { Education } from "@/types"
import { ContextInfo } from "@/components/context-info"
import { DescriptionAndBullets } from "@/components/description-and-bullets"
import { HeaderSubheaderWithIcon } from "@/components/header-subheader-with-icon"
import { AccordionItem } from "@/components/accordion-item"
import { formatDate } from "@/utils/date"

interface EducationItemProps {
  education: Education
}

export function EducationItem({ education }: EducationItemProps) {
  const endDate = education.trueEndDate || education.graduationDate
  const dateRange = endDate 
    ? `${education.startDate ? formatDate(education.startDate) + ' - ' : ''}${formatDate(endDate)}`
    : education.startDate ? formatDate(education.startDate) : ''

  return (
    <AccordionItem
      header={
        <div className="space-y-1">
          <HeaderSubheaderWithIcon 
            icon={<GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />} 
            title={education.degree} 
            organization={education.organization} 
          />
          {dateRange && <p className="text-sm text-muted-foreground ml-7">{dateRange}</p>}
        </div>
      }
    >
      <div className="space-y-3">
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between">
          <ContextInfo
            location={{
              city: education.city,
              state: education.state,
              country: education.country,
            }}
            supervisor={education.supervisor}
          />

          <EducationDetails gpa={education.gpa} honors={education.honors} />
        </div>

        <DescriptionAndBullets achievements={education.details} />
      </div>
    </AccordionItem>
  )
}

function EducationDetails({ gpa, honors }: { gpa?: string; honors?: string }) {
  if (!gpa && !honors) return null

  return (
    <div className="flex flex-col items-start md:items-end gap-2 text-sm">
      {gpa && (
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">GPA:</span>
          <span className="font-medium">{gpa}</span>
        </div>
      )}
      {honors && (
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 text-primary" />
          <span className="font-medium text-primary">{honors}</span>
        </div>
      )}
    </div>
  )
} 
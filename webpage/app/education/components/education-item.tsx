import { GraduationCap } from "lucide-react"
import type { Education } from "@/types"
import { ContextInfo } from "@/components/context-info"
import { DescriptionAndBullets } from "@/components/description-and-bullets"
import { HeaderSubheaderWithIcon } from "@/components/header-subheader-with-icon"
import { AccordionItem } from "@/components/accordion-item"
import { CredentialGallery } from "@/components/credential-gallery"
import { AwardReferences } from "@/components/award-references"
import { generateSlug } from "@/utils/slug"
import { formatDate } from "@/utils/date"

interface EducationItemProps {
  education: Education
  defaultExpanded?: boolean
}

export function EducationItem({ education, defaultExpanded }: EducationItemProps) {
  const endDate = education.trueEndDate || education.graduationDate
  const dateRange = endDate 
    ? `${education.startDate ? formatDate(education.startDate) + ' - ' : ''}${formatDate(endDate)}`
    : education.startDate ? formatDate(education.startDate) : ''

  const slug = generateSlug(education.degree)

  return (
    <AccordionItem
      id={slug}
      defaultExpanded={defaultExpanded}
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

          <EducationDetails gpa={education.gpa} />
        </div>

        <DescriptionAndBullets achievements={education.details} />

        <AwardReferences awardTitles={education.relatedAwardTitles || []} />

        <CredentialGallery
          type="education"
          diplomaUrl={education.diplomaUrl}
          certificates={education.certificates}
          images={education.images}
        />
      </div>
    </AccordionItem>
  )
}

function EducationDetails({ gpa }: { gpa?: string }) {
  if (!gpa) return null

  return (
    <div className="flex flex-col items-start md:items-end gap-2 text-sm">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">GPA:</span>
        <span className="font-medium">{gpa}</span>
      </div>
    </div>
  )
} 
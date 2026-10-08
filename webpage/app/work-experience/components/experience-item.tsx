import { Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { WorkExperience } from "@/types"
import { ContextInfo } from "@/components/context-info"
import { DescriptionAndBullets } from "@/components/description-and-bullets"
import { HeaderSubheaderWithIcon } from "@/components/header-subheader-with-icon"
import { AccordionItem } from "@/components/accordion-item"
import { formatDateRange } from "@/utils/date"
import { getOrgName } from "@/types/organization"
import { useTranslation } from "@/hooks/useTranslation"

interface ExperienceItemProps {
  experience: WorkExperience
  defaultExpanded?: boolean
}

export function ExperienceItem({ experience, defaultExpanded }: ExperienceItemProps) {
  const t = useTranslation()
  const dateRange = formatDateRange(experience.startDate, experience.endDate, t.locale, t.common.present)

  return (
    <AccordionItem
      id={experience.anchor}
      defaultExpanded={defaultExpanded}
      header={
        <div className="space-y-1">
          <HeaderSubheaderWithIcon 
            icon={<Briefcase className="h-5 w-5 text-primary flex-shrink-0" />} 
            header={experience.title} 
            subheader={getOrgName(experience.organization)}
            subheaderUrl={experience.organization.link}
          />
          <p className="text-sm text-muted-foreground ml-7">{dateRange}</p>
        </div>
      }
    >
      <div className="space-y-3">
        <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:justify-between">
          <ContextInfo
            location={{
              city: experience.city,
              state: experience.state,
              country: experience.country,
            }}
            team={experience.team}
          />

          <WorkDetailsTags workMode={experience.workMode} employmentType={experience.employmentType} />
        </div>

        <DescriptionAndBullets achievements={experience.details} />

        <TechnologiesTags technologies={experience.technologies} />
      </div>
    </AccordionItem>
  )
}

function WorkDetailsTags({ workMode, employmentType }: Pick<WorkExperience, "workMode" | "employmentType">) {
  const t = useTranslation()

  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <span className="px-2 py-1 bg-muted rounded-md">{t.workModes[workMode]}</span>
      <span className="px-2 py-1 bg-muted rounded-md">{t.employmentTypes[employmentType]}</span>
    </div>
  )
}

function TechnologiesTags({ technologies }: { technologies?: string[] }) {
  if (!technologies || technologies.length === 0) return null

  return (
    <div className="space-y-1">
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <Badge key={i} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}
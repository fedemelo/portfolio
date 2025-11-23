import { Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { WorkExperience } from "@/types"
import { ContextInfo } from "@/components/context-info"
import { DescriptionAndBullets } from "@/components/description-and-bullets"
import { HeaderSubheaderWithIcon } from "@/components/header-subheader-with-icon"
import { AccordionItem } from "@/components/accordion-item"
import { generateSlug } from "@/utils/slug"
import { formatDate } from "@/utils/date"

interface ExperienceItemProps {
  experience: WorkExperience
  defaultExpanded?: boolean
}

export function ExperienceItem({ experience, defaultExpanded }: ExperienceItemProps) {
  const dateRange = experience.endDate 
    ? `${formatDate(experience.startDate)} - ${formatDate(experience.endDate)}`
    : `${formatDate(experience.startDate)} - Present`
  
  const slug = generateSlug(experience.title)

  return (
    <AccordionItem
      id={slug}
      defaultExpanded={defaultExpanded}
      header={
        <div className="space-y-1">
          <HeaderSubheaderWithIcon 
            icon={<Briefcase className="h-5 w-5 text-primary flex-shrink-0" />} 
            header={experience.title} 
            subheader={experience.organization.name}
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

        <DescriptionAndBullets description={experience.description} achievements={experience.achievements} />

        <TechnologiesTags technologies={experience.technologies} />
      </div>
    </AccordionItem>
  )
}

function WorkDetailsTags({ workMode, employmentType }: { workMode: string, employmentType: string }) {
  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <span className="px-2 py-1 bg-muted rounded-md">{workMode}</span>
      <span className="px-2 py-1 bg-muted rounded-md">{employmentType}</span>
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
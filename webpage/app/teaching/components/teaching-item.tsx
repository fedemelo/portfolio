import { BookOpen } from "lucide-react"
import type { Teaching, Course } from "@/types"
import { ContextInfo } from "@/components/context-info"
import { DescriptionAndBullets } from "@/components/description-and-bullets"
import { HeaderSubheaderWithIcon } from "@/components/header-subheader-with-icon"
import { AccordionItem } from "@/components/accordion-item"
import { generateSlug } from "@/utils/slug"
import { formatDate } from "@/utils/date"

interface TeachingItemProps {
  teaching: Teaching
  course?: Course
  defaultExpanded?: boolean
}

export function TeachingItem({ teaching, course, defaultExpanded }: TeachingItemProps) {
  const displayEndDate = teaching.isCurrent ? undefined : teaching.endDate

  const dateRange = displayEndDate
    ? `${formatDate(teaching.startDate)} - ${formatDate(displayEndDate)}`
    : `${formatDate(teaching.startDate)} - Present`

  const slug = generateSlug(teaching.title)

  return (
    <AccordionItem
      id={slug}
      defaultExpanded={defaultExpanded}
      header={
        <div className="space-y-1">
          <HeaderSubheaderWithIcon
            icon={<BookOpen className="h-5 w-5 text-primary flex-shrink-0" />}
            header={teaching.title}
            subheader={course ? `${course.code}: ${course.name}` : undefined}
            subheaderUrl={course && course.hasPage ? `/courses/${course.slug}` : undefined}
          />
          <p className="text-sm text-muted-foreground ml-7">{teaching.period} • {dateRange}</p>
        </div>
      }
    >
      <div className="space-y-3">
        {course && (
          <div className="flex flex-row justify-between">
            <ContextInfo
              location={{
                city: course.city || '',
                state: course.state,
                country: course.country || '',
              }}
              department={course.department}
              supervisor={teaching.supervisor}
            />
            <CourseDetails credits={course.credits} />
          </div>
        )}

        <DescriptionAndBullets description={teaching.description} achievements={teaching.achievements} />
      </div>
    </AccordionItem>
  )
}

function CourseDetails({ credits }: { credits?: number }) {
  if (!credits) return null

  return (
    <div className="flex items-center text-sm text-muted-foreground">
      <span>{credits} credits</span>
    </div>
  )
}

import { BookOpen, Download } from "lucide-react"
import type { Teaching, Course } from "@/types"
import { ContextInfo } from "@/components/context-info"
import { DescriptionAndBullets } from "@/components/description-and-bullets"
import { HeaderSubheaderWithIcon } from "@/components/header-subheader-with-icon"
import { AccordionItem } from "@/components/accordion-item"
import { GreenButton } from "@/components/green-button"
import { localizePeriod } from "@/utils/period"
import { useTranslation } from "@/hooks/useTranslation"

interface TeachingItemProps {
  teaching: Teaching
  course?: Course
  defaultExpanded?: boolean
}

export function TeachingItem({ teaching, course, defaultExpanded }: TeachingItemProps) {
  const t = useTranslation()

  return (
    <AccordionItem
      id={teaching.anchor}
      defaultExpanded={defaultExpanded}
      header={
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-3 sm:gap-4">
          <div className="space-y-1">
            <HeaderSubheaderWithIcon
              icon={<BookOpen className="h-5 w-5 text-primary flex-shrink-0" />}
              header={teaching.title}
              subheader={course ? `${course.code}: ${course.name}` : undefined}
              subheaderUrl={course && course.hasPage ? `/courses/${course.slug}` : undefined}
            />
            <p className="text-sm text-muted-foreground ml-7">{localizePeriod(teaching.period, t.semesters)}</p>
          </div>
          {teaching.evaluationPdfUrl && (
            <div className="ml-7 sm:ml-0">
              <GreenButton asChild tooltip={t.pages.teaching.evaluationsTooltip}>
                <a 
                  href={teaching.evaluationPdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  download
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download className="h-4 w-4" />
                  {t.pages.teaching.evaluationsButton}
                </a>
              </GreenButton>
            </div>
          )}
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
  const t = useTranslation()

  if (!credits) return null

  return (
    <div className="flex items-center text-sm text-muted-foreground">
      <span>{credits} {t.pages.teaching.credits}</span>
    </div>
  )
}

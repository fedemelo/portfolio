"use client"

import { useTeaching, useCourses } from "@/hooks/useApiData"
import { useHashNavigation } from "@/hooks/useHashNavigation"
import { ExternalLink } from "lucide-react"
import { TeachingItem } from "./components/teaching-item"
import { TeachingLoadingSkeleton } from "./components/teaching-loading-skeleton"
import { PageHeader } from "@/components/page-header"
import { TimelineLayout } from "@/components/timeline-layout"
import { OrganizationIcon } from "@/components/organization-icon"
import { GreenButton } from "@/components/green-button"
import type { Teaching } from "@/types/teaching"
import { useTranslation } from "@/hooks/useTranslation"

const LOS_ESTUDIANTES_URL = "https://losestudiantes.com/uniandes/professors/federico-melo-barrero"

export default function TeachingPage() {
  const { data: teaching, loading: teachingLoading, error: teachingError } = useTeaching()
  const { data: courses, loading: coursesLoading } = useCourses()
  const targetHash = useHashNavigation()
  const t = useTranslation()

  const loading = teachingLoading || coursesLoading
  const error = teachingError

  const courseMap = new Map(courses.map(course => [course.code, course]))

  const professionalTeaching = teaching.filter(t => t.type === "professional")
  const undergraduateTeaching = teaching.filter(t => t.type === "undergraduate")

  const renderTeachingItem = (experience: Teaching) => {
    const shouldExpand = experience.anchor === targetHash
    const course = courseMap.get(experience.courseCode)
    return (
      <TeachingItem
        teaching={experience}
        course={course}
        defaultExpanded={shouldExpand}
      />
    )
  }

  const getTeachingIcon = (experience: Teaching) => {
    const course = courseMap.get(experience.courseCode)
    return course ? <OrganizationIcon organization={course.organization} /> : null
  }

  const losEstudiantesFormattedText = <span style={{
    fontFamily: 'Unisans, sans-serif',
    color: "rgb(71, 121, 178)",
    textTransform: "uppercase",
    fontWeight: "900",
    letterSpacing: "-0.03em",
    transform: "skew(-5deg)",
  }}>Los Estudiantes</span>

  const losEstudiantesButton = (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-muted-foreground">{t.pages.teaching.losEstudiantesPrompt}</span>
      <GreenButton asChild tooltip={t.pages.teaching.losEstudiantesTooltip}>
        <a href={LOS_ESTUDIANTES_URL} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-4 w-4" />
          {losEstudiantesFormattedText}
        </a>
      </GreenButton>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader title={t.pages.teaching.title} customButtons={losEstudiantesButton} />

      <TimelineLayout
        items={professionalTeaching}
        loading={loading}
        error={error}
        renderItem={renderTeachingItem}
        getIcon={getTeachingIcon}
        LoadingSkeleton={TeachingLoadingSkeleton}
        pageName={t.itemNames.professionalTeaching}
        itemName={t.itemNames.professionalTeaching}
      />

    <div className="space-y-4 md:!mt-2">
      <h2 className="text-xl font-bold">{t.pages.teaching.undergraduateSection}</h2>

      <TimelineLayout
        items={undergraduateTeaching}
        loading={loading}
        error={error}
        renderItem={renderTeachingItem}
        getIcon={getTeachingIcon}
        LoadingSkeleton={TeachingLoadingSkeleton}
        pageName={t.itemNames.undergraduateTeaching}
        itemName={t.itemNames.undergraduateTeaching}
      />
      </div>
    </div>
  )
}
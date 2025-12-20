"use client"

import { useTeaching, useCourses } from "@/hooks/useApiData"
import { useHashNavigation } from "@/hooks/useHashNavigation"
import { TeachingItem } from "./components/teaching-item"
import { TeachingLoadingSkeleton } from "./components/teaching-loading-skeleton"
import { PageHeader } from "@/components/page-header"
import { TimelineLayout } from "@/components/timeline-layout"
import { OrganizationIcon } from "@/components/organization-icon"
import { GreenButton } from "@/components/green-button"
import { generateSlug } from "@/utils/slug"
import { ExternalLink } from "lucide-react"
import type { Teaching } from "@/types/teaching"

const LOS_ESTUDIANTES_URL = "https://losestudiantes.com/uniandes/professors/federico-melo-barrero"

export default function TeachingPage() {
  const { data: teaching, loading: teachingLoading, error: teachingError } = useTeaching()
  const { data: courses, loading: coursesLoading } = useCourses()
  const targetHash = useHashNavigation()

  const loading = teachingLoading || coursesLoading
  const error = teachingError

  const courseMap = new Map(courses.map(course => [course.code, course]))

  const professionalTeaching = teaching.filter(t => t.type === "professional")
  const undergraduateTeaching = teaching.filter(t => t.type === "undergraduate")

  const renderTeachingItem = (experience: Teaching) => {
    const slug = generateSlug(experience.title)
    const shouldExpand = slug === targetHash
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
    <GreenButton asChild >
      <a href={LOS_ESTUDIANTES_URL} target="_blank" rel="noopener noreferrer">
        <ExternalLink className="h-4 w-4" />
        <div className="flex flex-row gap-1">
          <span>View student reviews on </span>
          {losEstudiantesFormattedText}
        </div>
      </a>
    </GreenButton>
  )

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader title="Teaching" customButtons={losEstudiantesButton} />

      <TimelineLayout
        items={professionalTeaching}
        loading={loading}
        error={error}
        renderItem={renderTeachingItem}
        getIcon={getTeachingIcon}
        LoadingSkeleton={TeachingLoadingSkeleton}
        pageName="professional teaching experience"
        itemName="professional teaching experience"
      />

    <div className="space-y-4 !mt-2">
      <h2 className="text-xl font-bold">Undergraduate Experience</h2>

      <TimelineLayout
        items={undergraduateTeaching}
        loading={loading}
        error={error}
        renderItem={renderTeachingItem}
        getIcon={getTeachingIcon}
        LoadingSkeleton={TeachingLoadingSkeleton}
        pageName="undergraduate teaching experience"
        itemName="undergraduate teaching experience"
      />
      </div>
    </div>
  )
}
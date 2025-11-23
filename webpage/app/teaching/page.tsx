"use client"

import { useTeaching, useCourses } from "@/hooks/useApiData"
import { useHashNavigation } from "@/hooks/useHashNavigation"
import { TeachingItem } from "./components/teaching-item"
import { TeachingLoadingSkeleton } from "./components/teaching-loading-skeleton"
import { PageHeader } from "@/components/page-header"
import { TimelineLayout } from "@/components/timeline-layout"
import { OrganizationIcon } from "@/components/organization-icon"
import { generateSlug } from "@/utils/slug"

export default function TeachingPage() {
  const { data: teaching, loading: teachingLoading, error: teachingError } = useTeaching()
  const { data: courses, loading: coursesLoading } = useCourses()
  const targetHash = useHashNavigation()

  const loading = teachingLoading || coursesLoading
  const error = teachingError

  const courseMap = new Map(courses.map(course => [course.code, course]))

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader title="Teaching" subtitle="Educational roles and contributions to academic institutions." />
      <TimelineLayout
        items={teaching}
        loading={loading}
        error={error}
        renderItem={(experience) => {
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
        }}
        getIcon={(experience) => {
          const course = courseMap.get(experience.courseCode)
          return course ? <OrganizationIcon organization={course.organization} /> : null
        }}
        LoadingSkeleton={TeachingLoadingSkeleton}
        pageName="teaching experience"
        itemName="teaching experience"
      />
    </div>
  )
}

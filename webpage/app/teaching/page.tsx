"use client"

import { useTeaching, useCourses } from "@/hooks/useApiData"
import { useHashNavigation } from "@/hooks/useHashNavigation"
import { TeachingItem } from "./components/teaching-item"
import { TeachingLoadingSkeleton } from "./components/teaching-loading-skeleton"
import { PageHeader } from "@/components/page-header"
import { TimelineLayout } from "@/components/timeline-layout"
import { OrganizationIcon } from "@/components/organization-icon"
import { generateSlug } from "@/utils/slug"
import type { Teaching } from "@/types/teaching"
import type { Course } from "@/types/course"

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

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader title="Teaching" subtitle="Educational roles and contributions to academic institutions." />
      
      <TeachingSection
        title="Lecturer"
        items={professionalTeaching}
        loading={loading}
        error={error}
        renderItem={renderTeachingItem}
        getIcon={getTeachingIcon}
      />

      <TeachingSection
        title="Undergraduate Experience"
        items={undergraduateTeaching}
        loading={loading}
        error={error}
        renderItem={renderTeachingItem}
        getIcon={getTeachingIcon}
      />
    </div>
  )
}

interface TeachingSectionProps {
  title: string
  items: Teaching[]
  loading: boolean
  error: string | null
  renderItem: (item: Teaching) => React.ReactNode
  getIcon: (item: Teaching) => React.ReactNode
}

function TeachingSection({ title, items, loading, error, renderItem, getIcon }: TeachingSectionProps) {
  if (!loading && items.length === 0) return null

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <TimelineLayout
        items={items}
        loading={loading}
        error={error}
        renderItem={renderItem}
        getIcon={getIcon}
        LoadingSkeleton={TeachingLoadingSkeleton}
        pageName="teaching experience"
        itemName="teaching experience"
      />
    </div>
  )
}

"use client"

import { notFound } from "next/navigation"
import { PageHeader } from "@/components/page-header"
import { useCourseData } from "./hooks/useCourseData"
import { CourseLoadingSkeleton } from "./components/course-loading-skeleton"
import { CourseTeachingTimeline } from "./components/course-teaching-timeline"

interface CourseClientProps {
  slug: string
}

export function CourseClient({ slug }: CourseClientProps) {
  const { course, teachings, loading } = useCourseData(slug)

  if (loading) return <CourseLoadingSkeleton />

  if (!course || !course.hasPage) notFound()

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader 
        title={`${course.code}: ${course.name}`}
        subtitle={course.description}
      />

      <CourseTeachingTimeline course={course} teachings={teachings} />
    </div>
  )
}

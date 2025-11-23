import { apiClient } from "@/services/api"
import { CourseClient } from "./course-client"

interface CoursePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const courses = await apiClient.getCourses()
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params
  return <CourseClient slug={slug} />
}

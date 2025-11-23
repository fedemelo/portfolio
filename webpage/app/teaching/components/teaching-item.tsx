import { BookOpen, GraduationCap, User } from "lucide-react"
import type { Teaching } from "@/types"
import { ContextInfo } from "@/components/context-info"
import { DescriptionAndBullets } from "@/components/description-and-bullets"
import { HeaderSubheaderWithIcon } from "@/components/header-subheader-with-icon"

interface TeachingItemProps {
  teaching: Teaching
}

export function TeachingItem({ teaching }: TeachingItemProps) {
  const displayEndDate = teaching.isCurrent ? undefined : teaching.endDate

  return (
    <div className="border rounded-lg p-6 space-y-3">

      <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
        <HeaderSubheaderWithIcon icon={<GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />} title={teaching.title} organization={teaching.organization} />

        <CourseInformation course={teaching.course} />
      </div>

      <div className="flex flex-row justify-between">
        <ContextInfo
          startDate={teaching.startDate}
          endDate={displayEndDate}
          location={{
            city: teaching.city,
            state: teaching.state,
            country: teaching.country,
          }}
          department={teaching.department}
          supervisor={teaching.supervisor}
        />
      </div>

      <DescriptionAndBullets description={teaching.description} achievements={teaching.achievements} />
    </div>
  )
}

function CourseInformation({ course }: { course?: Teaching['course'] }) {
  if (!course) return null

  return (
    <div className="bg-muted rounded-lg p-4 space-y-2">
      <div className="flex items-center">
        <BookOpen className="mr-2 h-4 w-4 text-primary" />
        <span className="font-medium">{course.name}</span>
        <span className="ml-2 text-sm text-muted-foreground">({course.code})</span>
        {course.credits && (
          <span className="ml-2 text-sm text-muted-foreground">• {course.credits} credits</span>
        )}
      </div>
      {course.description && (
        <p className="text-sm text-muted-foreground">{course.description}</p>
      )}
    </div>
  )
}

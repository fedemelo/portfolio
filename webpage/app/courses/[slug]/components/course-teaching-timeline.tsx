import type { Course, Teaching } from "@/types"
import { TimelineLayout } from "@/components/timeline-layout"
import { OrganizationIcon } from "@/components/organization-icon"
import { TeachingItem } from "@/app/teaching/components/teaching-item"

interface CourseTeachingTimelineProps {
  course: Course
  teachings: Teaching[]
}

export function CourseTeachingTimeline({ course, teachings }: CourseTeachingTimelineProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Teaching Experiences</h2>
      <TimelineLayout
        items={teachings}
        loading={false}
        renderItem={(teaching) => (
          <TeachingItem teaching={teaching} course={course} />
        )}
        getIcon={() => (
          <OrganizationIcon organization={course.organization} />
        )}
        LoadingSkeleton={TeachingTimelineSkeleton}
        pageName={course.name}
        itemName="teaching experience"
      />
    </div>
  )
}

function TeachingTimelineSkeleton() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-32 bg-muted rounded-lg"></div>
      <div className="h-32 bg-muted rounded-lg"></div>
    </div>
  )
}


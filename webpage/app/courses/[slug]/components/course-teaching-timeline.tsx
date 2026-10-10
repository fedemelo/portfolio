import type { Course, Teaching } from "@/types"
import { TimelineLayout } from "@/components/timeline-layout"
import { OrganizationIcon } from "@/components/organization-icon"
import { TeachingItem } from "@/app/teaching/components/teaching-item"
import { useTranslation } from "@/hooks/useTranslation"

interface CourseTeachingTimelineProps {
  course: Course
  teachings: Teaching[]
}

export function CourseTeachingTimeline({ course, teachings }: CourseTeachingTimelineProps) {
  const t = useTranslation()

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{t.pages.course.teachingExperiences}</h2>
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
        itemName={t.itemNames.teaching}
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


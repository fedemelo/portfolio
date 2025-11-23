import type { Teaching } from "@/types"
import { TeachingItem } from "./teaching-item"
import { TeachingLoadingSkeleton } from "./teaching-loading-skeleton"
import { TimelineLayout } from "@/components/timeline-layout"

interface TeachingTimelineProps {
  teaching: Teaching[]
  loading?: boolean
  error?: string | null
}

export function TeachingTimeline({ teaching, loading, error }: TeachingTimelineProps) {
  return (
    <TimelineLayout
      items={teaching}
      loading={loading}
      error={error}
      renderItem={(experience) => <TeachingItem teaching={experience} />}
      LoadingSkeleton={TeachingLoadingSkeleton}
      pageName="teaching experience"
      itemName="teaching experience"
    />
  )
} 
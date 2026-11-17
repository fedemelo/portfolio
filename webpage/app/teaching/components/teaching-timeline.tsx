import type { Teaching } from "@/types"
import { TeachingItem } from "./teaching-item"
import { TeachingLoadingSkeleton } from "./teaching-loading-skeleton"
import { TimelineLayout } from "@/components/timeline-layout"
import { useTranslation } from "@/hooks/useTranslation"

interface TeachingTimelineProps {
  teaching: Teaching[]
  loading?: boolean
  error?: string | null
}

export function TeachingTimeline({ teaching, loading, error }: TeachingTimelineProps) {
  const t = useTranslation()

  return (
    <TimelineLayout
      items={teaching}
      loading={loading}
      error={error}
      renderItem={(experience) => <TeachingItem teaching={experience} />}
      LoadingSkeleton={TeachingLoadingSkeleton}
      pageName={t.itemNames.teaching}
      itemName={t.itemNames.teaching}
    />
  )
} 
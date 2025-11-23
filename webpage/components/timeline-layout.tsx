import { Error } from "@/components/error"
import { NoItemsAvailable } from "@/components/no-items-available"
import { VerticalTimeline, TimelineItem } from "@/components/vertical-timeline"
import { useBreakpoint } from "@/hooks/use-breakpoint"

interface TimelineLayoutProps<T> {
  items: T[]
  loading?: boolean
  error?: string | null
  renderItem: (item: T, index: number) => React.ReactNode
  getIcon?: (item: T, index: number) => React.ReactNode
  LoadingSkeleton: React.ComponentType
  pageName: string
  itemName: string
}

export function TimelineLayout<T>({
  items,
  loading,
  error,
  renderItem,
  getIcon,
  LoadingSkeleton,
  pageName,
  itemName,
}: TimelineLayoutProps<T>) {
  const isMobile = useBreakpoint(768) // md breakpoint

  if (loading) return <LoadingSkeleton />

  if (error) return <Error pageName={pageName} error={error} />

  if (items.length === 0) return <NoItemsAvailable itemName={itemName} />

  if (isMobile)
    return (
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index}>{renderItem(item, index)}</div>
        ))}
      </div>
    )

  return (
    <VerticalTimeline>
      {items.map((item, index) => (
        <TimelineItem key={index} icon={getIcon?.(item, index)}>
          {renderItem(item, index)}
        </TimelineItem>
      ))}
    </VerticalTimeline>
  )
}


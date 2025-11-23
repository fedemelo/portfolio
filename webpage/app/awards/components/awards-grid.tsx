import type { Award } from "@/types"
import { AwardItem } from "./award-item"
import { AwardsLoadingSkeleton } from "./awards-loading-skeleton"
import { Error } from "@/components/error"
import { NoItemsAvailable } from "@/components/no-items-available"

interface AwardsGridProps {
  awards: Award[]
  loading?: boolean
  error?: string | null
}

export function AwardsGrid({ awards, loading, error }: AwardsGridProps) {
  if (loading) return <AwardsLoadingSkeleton />
    

  if (error) return <Error pageName="awards" error={error} />

  if (awards.length === 0) return <NoItemsAvailable itemName="awards" />

  return (
    <div className="space-y-4">
      {awards.map((award, index) => (
        <AwardItem key={index} award={award} />
      ))}
    </div>
  )
}


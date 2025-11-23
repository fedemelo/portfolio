import type { Publication } from "@/types"
import { PublicationItem } from "./publication-item"
import { Error } from "@/components/error"
import { PublicationsLoadingSkeleton } from "./publications-loading-skeleton"
import { NoItemsAvailable } from "@/components/no-items-available"

interface PublicationsListProps {
  publications: Publication[]
  loading?: boolean
  error?: string | null
}

export function PublicationsList({ publications, loading, error }: PublicationsListProps) {
  if (loading) return <PublicationsLoadingSkeleton />

  if (error) return <Error pageName="publications" error={error} />

  if (publications.length === 0) return <NoItemsAvailable itemName="publications" />

  return (
    <div className="space-y-4">
      {publications.map((publication, index) => (
        <PublicationItem key={index} publication={publication} />
      ))}
    </div>
  )
} 
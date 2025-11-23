import type { Publication } from "@/types"
import { PublicationItem } from "./publication-item"
import { Error } from "@/components/error"
import { PublicationsLoadingSkeleton } from "./publications-loading-skeleton"
import { NoItemsAvailable } from "@/components/no-items-available"
import { generateSlug } from "@/utils/slug"

interface PublicationsListProps {
  publications: Publication[]
  loading?: boolean
  error?: string | null
  targetHash?: string | null
}

export function PublicationsList({ publications, loading, error, targetHash }: PublicationsListProps) {
  if (loading) return <PublicationsLoadingSkeleton />

  if (error) return <Error pageName="publications" error={error} />

  if (publications.length === 0) return <NoItemsAvailable itemName="publications" />

  return (
    <div className="space-y-4">
      {publications.map((publication, index) => {
        const slug = generateSlug(publication.title)
        const shouldExpand = slug === targetHash
        return (
          <PublicationItem 
            key={index} 
            publication={publication} 
            defaultExpanded={shouldExpand}
          />
        )
      })}
    </div>
  )
} 
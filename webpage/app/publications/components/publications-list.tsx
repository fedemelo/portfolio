import type { Publication } from "@/types"
import { PublicationItem } from "./publication-item"
import { Error } from "@/components/error"
import { PublicationsLoadingSkeleton } from "./publications-loading-skeleton"
import { NoItemsAvailable } from "@/components/no-items-available"
import { useTranslation } from "@/hooks/useTranslation"

interface PublicationsListProps {
  publications: Publication[]
  loading?: boolean
  error?: string | null
  targetHash?: string | null
}

export function PublicationsList({ publications, loading, error, targetHash }: PublicationsListProps) {
  const t = useTranslation()

  if (loading) return <PublicationsLoadingSkeleton />

  if (error) return <Error pageName={t.itemNames.publications} error={error} />

  if (publications.length === 0) return <NoItemsAvailable itemName={t.itemNames.publications} />

  return (
    <div className="space-y-4">
      {publications.map((publication, index) => {
        const shouldExpand = publication.anchor === targetHash
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
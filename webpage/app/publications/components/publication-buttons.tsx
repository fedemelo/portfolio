import { ExternalLink, FileText } from "lucide-react"
import Link from "next/link"
import type { Publication } from "@/types"
import { CiteButton } from "./cite-button"
import { GreenButton } from "@/components/green-button"
import { useTranslation } from "@/hooks/useTranslation"

interface PublicationButtonsProps {
  publication: Publication
}

export function PublicationButtons({ publication }: PublicationButtonsProps) {
  const t = useTranslation()

  return (
    <div className="flex flex-wrap gap-2 pt-2 justify-end">
      <CiteButton publication={publication} />
      
      {publication.pdfUrl && (
        <GreenButton asChild tooltip={t.pages.publications.pdfTooltip}>
          <Link href={publication.pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FileText className="h-4 w-4" />
            PDF
          </Link>
        </GreenButton>
      )}
      
      {publication.url && (
        <GreenButton asChild tooltip={t.pages.publications.viewOnlineTooltip}>
          <Link href={publication.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <ExternalLink className="h-4 w-4" />
            {publication.linkText || t.pages.publications.defaultLinkText}
          </Link>
        </GreenButton>
      )}
    </div>
  )
} 
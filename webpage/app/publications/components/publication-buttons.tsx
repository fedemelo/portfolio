import { ExternalLink, FileText } from "lucide-react"
import Link from "next/link"
import type { Publication } from "@/types"
import { CiteButton } from "./cite-button"
import { GreenButton } from "@/components/green-button"

interface PublicationButtonsProps {
  publication: Publication
}

export function PublicationButtons({ publication }: PublicationButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2 pt-2 justify-end">
      <CiteButton publication={publication} />
      
      {publication.pdfUrl && (
        <GreenButton asChild tooltip="Download PDF">
          <Link href={publication.pdfUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <FileText className="h-4 w-4" />
            PDF
          </Link>
        </GreenButton>
      )}
      
      {publication.url && (
        <GreenButton asChild tooltip="View publication online">
          <Link href={publication.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <ExternalLink className="h-4 w-4" />
            {publication.linkText || "DOI/Site"}
          </Link>
        </GreenButton>
      )}
    </div>
  )
} 
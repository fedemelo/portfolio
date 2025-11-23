import type { Publication } from "@/types"
import { formatAuthors } from "../utils"
import { PublicationButtons } from "./publication-buttons"
import { FileText } from "lucide-react"
import { AccordionItem } from "@/components/accordion-item"
import { generateSlug } from "@/utils/slug"

interface PublicationItemProps {
  publication: Publication
  defaultExpanded?: boolean
}

export function PublicationItem({ publication, defaultExpanded }: PublicationItemProps) {
  const slug = generateSlug(publication.title)

  return (
    <AccordionItem
      id={slug}
      defaultExpanded={defaultExpanded}
      header={
        <div className="flex items-start gap-3">
          <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-base font-semibold leading-tight">{publication.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{publication.year}</p>
          </div>
        </div>
      }
    >
      <div className="space-y-2">
        <p className="text-base leading-relaxed ml-8">
          <span
            dangerouslySetInnerHTML={{
              __html: formatAuthors(publication.authors).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
          {" "}
          ({publication.year}). 
          {" "}
          "{publication.title}". 
          {" "}
          <em>{publication.description}</em>. 
          {" "}
          {publication.institution}.
        </p>

        <PublicationButtons publication={publication} />
      </div>
    </AccordionItem>
  )
}



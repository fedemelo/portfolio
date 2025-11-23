"use client"

import { useState } from "react"
import type { Publication } from "@/types"
import { formatAuthors } from "../utils"
import { PublicationButtons } from "./publication-buttons"
import { FileText, ChevronDown, ChevronUp } from "lucide-react"

interface PublicationItemProps {
  publication: Publication
}

export function PublicationItem({ publication }: PublicationItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="border rounded-lg overflow-hidden">
      <div 
        className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 flex items-start gap-3">
            <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-semibold leading-tight">{publication.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{publication.year}</p>
            </div>
          </div>
          <div className="flex-shrink-0 mt-1">
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            )}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-3 border-t pt-3">
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
      )}
    </div>
  )
}



import { Trophy } from "lucide-react"
import type { Award } from "@/types"
import { ContextInfo } from "@/components/context-info"
import { AccordionItem } from "@/components/accordion-item"
import { CredentialGallery } from "@/components/credential-gallery"
import { formatDate } from "@/utils/date"

interface AwardItemProps {
  award: Award
}

export function AwardItem({ award }: AwardItemProps) {
  const dateDisplay = award.date ? formatDate(award.date) : ''

  return (
    <AccordionItem
      header={
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary flex-shrink-0" />
            <h3 className="text-lg font-semibold leading-tight">{award.title}</h3>
          </div>
          {dateDisplay && <p className="text-sm text-muted-foreground ml-7">{dateDisplay}</p>}
        </div>
      }
    >
      <div className="space-y-4">
        <ContextInfo 
          location={{
            city: award.city,
            state: award.state,
            country: award.country,
          }} 
          organization={award.organization} 
        />
        <div className="leading-relaxed text-justify space-y-3">
          {award.description.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <CredentialGallery
          type="award"
          diplomaUrl={award.certificateUrl}
          images={award.images}
        />
      </div>
    </AccordionItem>
  )
}
import { Calendar, Trophy } from "lucide-react"
import type { Award } from "@/types"
import { ContextInfo } from "@/components/context-info"
import { AccordionItem } from "@/components/accordion-item"
import { formatShortDate, formatDate } from "@/utils/date"

interface AwardItemProps {
  award: Award
}

export function AwardItem({ award }: AwardItemProps) {
  const dateDisplay = award.date ? formatDate(award.date) : ''

  return (
    <AccordionItem
      header={
        <div className="space-y-1">
          <AwardHeader award={award} />
          {dateDisplay && <p className="text-sm text-muted-foreground ml-7">{dateDisplay}</p>}
        </div>
      }
    >
      <div className="space-y-4">
        <ContextInfo location={{
          city: award.city,
          state: award.state,
          country: award.country,
        }} organization={award.organization} />
        <AwardDescription description={award.description} />
        <AwardInstancesIfMultipleInstances award={award} />
      </div>
    </AccordionItem>
  )
}

function AwardHeader({ award }: { award: Award }) {
  const timesCount = award.instances?.length ? ` \u00D7 ${award.instances.length}` : ""

  return (
    <div className="flex items-center gap-2">
      <Trophy className="h-5 w-5 text-primary flex-shrink-0" />
      <h3 className="text-lg font-semibold leading-tight">{award.title}{timesCount}</h3>
    </div>
  )
}

function AwardDescription({ description }: { description: string }) {
  return (
    <p className="leading-relaxed text-justify">
      {description}
    </p>
  )
}

function AwardInstancesIfMultipleInstances({ award }: { award: Award }) {
  return (award.instances && award.instances.length > 0 && (
    <div className="flex flex-wrap pt-1">

      <div className="space-y-3 w-full">
        <h4 className="font-medium text-sm">Instances:</h4>
        <div className="space-y-2">
          {award.instances.map((instance, i) => (
            <AwardInstance
              key={i}
              description={instance.description}
              date={instance.date}
            />
          ))}
        </div>
      </div>
    </div>
  )
  )
}

function AwardInstance({ description, date }: { description: string; date: string }) {
  return (
    <div className="flex items-center justify-between text-sm w-full">
      <span>{description}</span>
      <div className="flex items-center gap-1">
        <Calendar className="h-3 w-3 text-primary" />
        <span className="font-medium">{formatShortDate(date)}</span>
      </div>
    </div>
  )
}
"use client"

import { useState, ReactNode } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface AccordionItemProps {
  header: ReactNode
  children: ReactNode
  defaultExpanded?: boolean
  id?: string
}

export function AccordionItem({ header, children, defaultExpanded = false, id }: AccordionItemProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  const content = (
    <div className="border rounded-lg overflow-hidden">
      <div 
        className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {header}
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

      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 border-t pt-3">
          {children}
        </div>
      </div>
    </div>
  )

  // If an ID is provided, wrap in a scroll anchor div
  if (id) {
    return (
      <div id={id} className="scroll-mt-20">
        {content}
      </div>
    )
  }

  return content
}


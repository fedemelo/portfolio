"use client"

import { useState } from "react"
import { GraduationCap, Star, ChevronDown, ChevronUp } from "lucide-react"
import type { Education } from "@/types"
import { ContextInfo } from "@/components/context-info"
import { DescriptionAndBullets } from "@/components/description-and-bullets"
import { HeaderSubheaderWithIcon } from "@/components/header-subheader-with-icon"
import { formatDate } from "@/utils/date"

interface EducationItemProps {
  education: Education
}

export function EducationItem({ education }: EducationItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const endDate = education.trueEndDate || education.graduationDate
  const dateRange = endDate 
    ? `${education.startDate ? formatDate(education.startDate) + ' - ' : ''}${formatDate(endDate)}`
    : education.startDate ? formatDate(education.startDate) : ''

  return (
    <div className="border rounded-lg overflow-hidden">
      <div 
        className="p-4 cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-1">
            <HeaderSubheaderWithIcon 
              icon={<GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />} 
              title={education.degree} 
              organization={education.organization} 
            />
            {dateRange && <p className="text-sm text-muted-foreground ml-7">{dateRange}</p>}
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
          <div className="flex flex-col gap-2 md:gap-0 md:flex-row md:justify-between">
            <ContextInfo
              startDate={education.startDate}
              endDate={endDate}
              location={{
                city: education.city,
                state: education.state,
                country: education.country,
              }}
              supervisor={education.supervisor}
            />

            <EducationDetails gpa={education.gpa} honors={education.honors} />
          </div>

          <DescriptionAndBullets achievements={education.details} />
        </div>
      )}
    </div>
  )
}

function EducationDetails({ gpa, honors }: { gpa?: string; honors?: string }) {
  if (!gpa && !honors) return null

  return (
    <div className="flex flex-col items-start md:items-end gap-2 text-sm">
      {gpa && (
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">GPA:</span>
          <span className="font-medium">{gpa}</span>
        </div>
      )}
      {honors && (
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 text-primary" />
          <span className="font-medium text-primary">{honors}</span>
        </div>
      )}
    </div>
  )
} 
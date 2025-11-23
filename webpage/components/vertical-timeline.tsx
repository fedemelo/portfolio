import { ReactNode } from "react"

interface VerticalTimelineProps {
  children: ReactNode
  loading?: boolean
}

export function VerticalTimeline({ children }: VerticalTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-7 top-10 bottom-10 w-0.5 bg-border"></div>
      <div className="space-y-2">
        {children}
      </div>
    </div>
  )
}

export function TimelineItem({ children, loading, icon }: { children: ReactNode, loading?: boolean, icon?: ReactNode }) {
  return (
    <div className="relative flex items-start">
      <div className="relative z-10 flex-shrink-0 mt-4">
        <div className={`relative w-14 h-14 bg-background rounded-full flex items-center justify-center ${loading ? 'animate-pulse' : ''}`}>
          <div className="absolute inset-0 rounded-full overflow-hidden flex items-center justify-center">
            {icon ? (
              <div className="w-8 h-8 flex items-center justify-center">
                {icon}
              </div>
            ) : (
              <div className={`w-3 h-3 rounded-full ${loading ? 'bg-muted' : 'bg-primary'}`}></div>
            )}
          </div>
          <div className={`absolute inset-0 rounded-full border-4 pointer-events-none ${loading ? 'border-muted' : 'border-primary'}`}></div>
        </div>
      </div>

      <div className="ml-2 flex-1 pb-6">
        {children}
      </div>
    </div>
  )
} 
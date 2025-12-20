import { OpenCVOrResume } from "./open-cv-or-resume"

interface PageHeaderProps {
  title: string
  subtitle?: string
  downloadButtons?: boolean
  customButtons?: React.ReactNode
}

export function PageHeader({title, subtitle, downloadButtons, customButtons}: PageHeaderProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      {subtitle && <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
      {downloadButtons && <OpenCVOrResume />}
      {customButtons && customButtons}
    </div>
  )
} 
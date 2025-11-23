import Link from "next/link"
import { ExternalLink } from "lucide-react"

interface HeaderSubheaderWithIconProps {
  icon: React.ReactNode
  header: string
  subheader?: string
  subheaderUrl?: string
}

export function HeaderSubheaderWithIcon({ icon, header, subheader, subheaderUrl }: HeaderSubheaderWithIconProps) {
  const isExternalUrl = subheaderUrl && (subheaderUrl.startsWith('http://')
                                         || subheaderUrl.startsWith('https://')
                                         || subheaderUrl.startsWith('wwww'))

  return (
    <div className="space-y-0">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-xl font-semibold leading-tight">{header}</h3>
      </div>
      {subheader && (
        <div className="ml-7 flex items-center gap-2">
          <span className="text-lg text-muted-foreground">{subheader}</span>
          {subheaderUrl && (
            <Link 
              href={subheaderUrl}
              {...(isExternalUrl && {
                target: "_blank",
                rel: "noopener noreferrer"
              })}
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
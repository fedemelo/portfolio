import Link from "next/link"
import type { Organization } from "@/types/organization"

export function HeaderSubheaderWithIcon({ icon, title, organization }: { icon: React.ReactNode; title: string; organization: Organization }) {
  const OrganizationName = organization.link ? (
    <Link 
      href={organization.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-lg text-muted-foreground hover:text-foreground transition-colors"
    >
      {organization.name}
    </Link>
  ) : (
    <span className="text-lg text-muted-foreground">{organization.name}</span>
  )

  return (
    <div className="space-y-0">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-xl font-semibold leading-tight">{title}</h3>
      </div>
      <div className="ml-7">
        {OrganizationName}
      </div>
    </div>
  )
}
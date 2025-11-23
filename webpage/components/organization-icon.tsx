import Image from "next/image"
import type { Organization } from "@/types/organization"

interface OrganizationIconProps {
  organization: Organization
}

export function OrganizationIcon({ organization }: OrganizationIconProps) {
  if (!organization.icon) return null

  return (
    <Image
      src={organization.icon}
      alt={`${organization.name} logo`}
      width={32}
      height={32}
      className="rounded-sm object-contain"
    />
  )
}


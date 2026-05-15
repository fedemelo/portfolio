import Image from "next/image"
import type { Organization } from "@/types/organization"
import { getOrgName } from "@/types/organization"

interface OrganizationIconProps {
  organization: Organization
}

export function OrganizationIcon({ organization }: OrganizationIconProps) {
  if (!organization.icon) return null

  return (
    <Image
      src={organization.icon}
      alt={`${getOrgName(organization)} logo`}
      width={32}
      height={32}
      className="rounded-sm object-contain"
    />
  )
}


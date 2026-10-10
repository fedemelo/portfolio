import Image from "next/image"
import type { Organization } from "@/types/organization"
import { getOrgName } from "@/types/organization"
import { useTranslation } from "@/hooks/useTranslation"

interface OrganizationIconProps {
  organization: Organization
}

export function OrganizationIcon({ organization }: OrganizationIconProps) {
  const t = useTranslation()

  if (!organization.icon) return null

  return (
    <Image
      src={organization.icon}
      alt={t.common.organizationLogo(getOrgName(organization))}
      width={32}
      height={32}
      className="rounded-sm object-contain"
    />
  )
}


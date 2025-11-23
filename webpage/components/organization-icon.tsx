import Image from "next/image"

interface OrganizationIconProps {
  icon?: string
  organization: string
}

export function OrganizationIcon({ icon, organization }: OrganizationIconProps) {
  if (!icon) return null

  return (
    <Image
      src={icon}
      alt={`${organization} logo`}
      width={32}
      height={32}
      className="rounded-sm object-contain"
    />
  )
}


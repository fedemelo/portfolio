export interface Organization {
  name: string | { en: string; es?: string }
  icon?: string
  link?: string
}

export function getOrgName(org: Organization): string {
  if (typeof org.name === 'string') return org.name;
  return org.name.en;
}


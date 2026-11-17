import { Github, Linkedin, Globe, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import type { PersonalInfo } from "@/types"
import { LucideIcon } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"
import { useOrganicHops } from "@/hooks/useOrganicHops"

interface SocialLinksProps {
  personalInfo: PersonalInfo
}

export function SocialLinks({ personalInfo }: SocialLinksProps) {
  const t = useTranslation()
  const hopRef = useOrganicHops()
  const socialLinks = [
    {
      href: `https://www.linkedin.com/in/${personalInfo.linkedInPath}`,
      icon: Linkedin,
      label: "LinkedIn",
      iconClassName: "text-blue-500",
      isExternal: true
    },
    {
      href: `https://github.com/${personalInfo.gitHubPath}`,
      icon: Github,
      label: "GitHub", 
      isExternal: true
    },
    {
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      label: t.hero.email,
      iconClassName: "text-primary",
      isExternal: false
    }
  ]

  return (
    <div className="flex gap-4">
      <TooltipProvider delayDuration={0}>
        {socialLinks.map(({ href, icon, label, iconClassName, isExternal }, index) => (
          <span key={label} ref={hopRef(index)} className="inline-block">
            {createSocialLink(href, icon, label, iconClassName, isExternal)}
          </span>
        ))}
      </TooltipProvider>
    </div>
  )
} 

function createSocialLink(
  href: string,
  Icon: LucideIcon,
  label: string,
  iconClassName?: string,
  isExternal = false
) {
  const linkProps = isExternal 
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" className="rounded-full w-9 h-9 transition hover:scale-125" asChild>
          <Link href={href} {...linkProps}>
            <Icon className={`${iconClassName}`} />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  )
}
"use client"

import { ExternalLink } from "lucide-react"
import { GreenButton } from "./green-button"
import { PORTFOLIO_URLS } from "../lib/constants"
import { useTranslation } from "@/hooks/useTranslation"

export function OpenCVOrResume() {
  const t = useTranslation()

  return (
    <div className="flex flex-row gap-4">
      <OpenTabButton url={PORTFOLIO_URLS.CV} name={t.common.cv} tooltip={t.common.viewCvTooltip} />
      <OpenTabButton url={PORTFOLIO_URLS.RESUME} name={t.common.resume} tooltip={t.common.viewResumeTooltip} />
    </div>
  )
}

function OpenTabButton({ url, name, tooltip }: { url: string; name: string; tooltip: string }) {
  const handleClick = () => {
    window.open(url, '_blank')
  }

  return (
    <GreenButton tooltip={tooltip} onClick={handleClick}>
      <ExternalLink className="h-full w-full text-primary" />
      {name}
    </GreenButton>
  )
}

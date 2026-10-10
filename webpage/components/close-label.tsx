"use client"

import { useTranslation } from "@/hooks/useTranslation"

export function CloseLabel() {
  const t = useTranslation()
  return <span className="sr-only">{t.common.close}</span>
}

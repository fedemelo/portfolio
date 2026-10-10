"use client"

import { useLanguage } from "@/contexts/language-context"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast"
import { translations } from "@/lib/translations"

export function useSwitchToSpanishWithUndo() {
  const { language, setLanguage } = useLanguage()
  const { toast } = useToast()

  return function switchToSpanish() {
    if (language === "es") return

    const previousLanguage = language
    const { message, switchBack } = translations.es.languageSwitchToast
    setLanguage("es")
    toast({
      description: message,
      action: (
        <ToastAction altText={switchBack} onClick={() => setLanguage(previousLanguage)}>
          {switchBack}
        </ToastAction>
      ),
    })
  }
}

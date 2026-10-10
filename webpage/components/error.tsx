import { useTranslation } from "@/hooks/useTranslation"

export function Error({ pageName, error }: { pageName: string, error: string }) {
  const t = useTranslation()

  return (
    <div className="text-center py-8">
      <p className="text-destructive">{t.states.errorLoading(pageName, error)}</p>
    </div>
  )
}
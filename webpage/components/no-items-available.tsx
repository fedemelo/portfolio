import { useTranslation } from "@/hooks/useTranslation"

export function NoItemsAvailable({ itemName }: { itemName: string }) {
  const t = useTranslation()

  return (
    <div className="text-center py-8">
      <p className="text-muted-foreground">{t.states.noItems(itemName)}</p>
    </div>
  )
}
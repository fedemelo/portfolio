export function HeaderSubheaderWithIcon({ icon, title, organization }: { icon: React.ReactNode; title: string; organization: string }) {
  return (
    <div className="space-y-0">
      <div className="flex items-center gap-2">
        {icon}
        <h3 className="text-xl font-semibold leading-tight">{title}</h3>
      </div>
      <p className="text-lg text-muted-foreground ml-7">{organization}</p>
    </div>
  )
}
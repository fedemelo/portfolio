export function DescriptionAndBullets({ description, achievements }: { description?: string, achievements?: string[] }) {

  const hasAchievements = achievements && achievements.length > 0

  if (!description && !hasAchievements) return null


  return (
    <div className="space-y-1">
      {description && <p className="leading-relaxed text-justify">{description}</p>}

      {hasAchievements && (
        <div className="space-y-2">
          <ul className="list-disc list-outside space-y-1 ml-4">
            {achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

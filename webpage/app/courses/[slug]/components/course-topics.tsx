interface CourseTopicsProps {
  topics?: string[]
}

export function CourseTopics({ topics }: CourseTopicsProps) {
  if (!topics || topics.length === 0) return null

  return (
    <div className="pt-4 border-t">
      <h3 className="text-sm font-medium text-muted-foreground mb-2">Topics Covered</h3>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  )
}


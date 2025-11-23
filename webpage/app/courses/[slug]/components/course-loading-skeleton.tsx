export function CourseLoadingSkeleton() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4 animate-pulse">
        <div className="h-12 bg-muted rounded w-3/4"></div>
        <div className="h-6 bg-muted rounded w-1/2"></div>
      </div>
    </div>
  )
}


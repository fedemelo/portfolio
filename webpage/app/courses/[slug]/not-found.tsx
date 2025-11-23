import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto py-16 text-center space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Course Not Found</h1>
        <p className="text-lg text-muted-foreground">
          The course you're looking for doesn't exist or has been removed.
        </p>
      </div>
      
      <Link
        href="/teaching"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background hover:border-primary hover:bg-primary/5 transition-all duration-200"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Teaching
      </Link>
    </div>
  )
}


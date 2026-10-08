import { Copy, Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { GreenButton } from "@/components/green-button"
import { CitationGenerator } from "./citation-generator"
import type { Publication } from "@/types"
import { useTranslation } from "@/hooks/useTranslation"

interface CitationActionsProps {
  publication: Publication
}

export function CitationActions({ publication }: CitationActionsProps) {
  const { toast } = useToast()
  const t = useTranslation()
  const citationGenerator = new CitationGenerator(publication)

  const handleCopy = async () => {
    const bibTexCitation = citationGenerator.generateBibTeX()
    try {
      await navigator.clipboard.writeText(bibTexCitation)
      toast({
        title: t.citation.copiedTitle,
        description: t.citation.copiedDescription,
      })
    } catch (err) {
      toast({
        title: t.citation.copyFailedTitle,
        description: t.citation.copyFailedDescription,
        variant: "destructive",
      })
    }
  }

  const handleDownload = () => {
    const bibTexCitation = citationGenerator.generateBibTeX()
    const filename = citationGenerator.generateFilename()
    
    const blob = new Blob([bibTexCitation], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    toast({
      title: t.citation.downloadedTitle,
      description: t.citation.downloadedDescription,
    })
  }

  return (
    <div className="flex justify-center space-x-2">
      <GreenButton onClick={handleCopy} tooltip={t.citation.copyTooltip}>
        <Copy className="mr-2 h-4 w-4" />
        {t.citation.copy}
      </GreenButton>
      <GreenButton onClick={handleDownload} tooltip={t.citation.downloadTooltip}>
        <Download className="mr-2 h-4 w-4" />
        {t.citation.download}
      </GreenButton>
    </div>
  )
} 
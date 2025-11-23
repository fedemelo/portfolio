"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageLightbox } from "./image-lightbox"

interface CredentialImage {
  url: string
  label: string
  type: "diploma" | "certificate" | "image"
}

interface CredentialGalleryProps {
  diplomaUrl?: string
  certificates?: string[]
  images?: string[]
  type?: "award" | "education"
}

export function CredentialGallery({ diplomaUrl, certificates = [], images = [], type = "education" }: CredentialGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const mainCredentialLabel = type === "award" ? "Certificate" : "Diploma"

  const credentialImages: CredentialImage[] = [
    ...(diplomaUrl ? [{ url: diplomaUrl, label: mainCredentialLabel, type: "diploma" as const }] : []),
    ...certificates.map((cert, idx) => ({ 
      url: cert, 
      label: certificates.length > 1 ? `Certificate ${idx + 1}` : "Certificate", 
      type: "certificate" as const 
    })),
    ...images.map((img, idx) => ({ 
      url: img, 
      label: images.length > 1 ? `Photo ${idx + 1}` : "Photo", 
      type: "image" as const 
    })),
  ]

  if (credentialImages.length === 0) return null

  const allImageUrls = credentialImages.map(img => img.url)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <div className="mt-4 pt-4 border-t">
        <h4 className="text-sm font-medium text-muted-foreground mb-3">Credentials & Photos</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {credentialImages.map((credential, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative group cursor-pointer rounded-lg overflow-hidden border border-border hover:border-primary transition-colors aspect-[4/3]"
            >
              <Image
                src={credential.url}
                alt={credential.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-200"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                <p className="text-xs text-white font-medium">{credential.label}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={allImageUrls}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentImageIndex}
        />
      )}
    </>
  )
}


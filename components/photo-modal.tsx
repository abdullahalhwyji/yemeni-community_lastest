"use client"

import { useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CategoryBadge } from "@/components/category-badge"
import Image from "next/image"
import { createPortal } from "react-dom"

interface Photo {
  id: number
  title: { ar: string; id: string }
  description: { ar: string; id: string }
  category: string
  date: string
  image: string
}

interface PhotoModalProps {
  photo: Photo
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  language: "ar" | "id"
}

export function PhotoModal({ photo, onClose, onNext, onPrev, language }: PhotoModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "ArrowLeft") onPrev()
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [onClose, onNext, onPrev])

  const modalContent = (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="relative bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <CategoryBadge category={photo.category} />
            <span className="text-sm text-muted-foreground">
              {new Date(photo.date).toLocaleDateString(language === "ar" ? "ar-SA" : "id-ID")}
            </span>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative aspect-video max-h-[60vh]">
            <Image
              src={photo.image || "/placeholder.svg"}
              alt={photo.title[language]}
              fill
              className="object-contain"
            />
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
            onClick={onPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
            onClick={onNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-3">{photo.title[language]}</h2>
          <p className="text-muted-foreground leading-relaxed">{photo.description[language]}</p>
        </div>
      </div>
    </div>
  )

  return typeof window !== "undefined" ? createPortal(modalContent, document.body) : null
}

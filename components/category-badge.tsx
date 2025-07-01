"use client"

import { useLanguage } from "@/components/language-provider"
import { Badge } from "@/components/ui/badge"
import { getCategoryById } from "@/lib/categories"

interface CategoryBadgeProps {
  categoryId: string
  className?: string
}

export function CategoryBadge({ categoryId, className }: CategoryBadgeProps) {
  const { language } = useLanguage()
  const category = getCategoryById(categoryId)

  if (!category) return null

  return (
    <Badge variant="secondary" className={`${category.color} border font-medium ${className}`}>
      {category.name[language]}
    </Badge>
  )
}

"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { categories } from "@/lib/categories"

interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (categoryId: string) => void
  showAll?: boolean
}

export function CategoryFilter({ selectedCategory, onCategoryChange, showAll = true }: CategoryFilterProps) {
  const { language } = useLanguage()

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {showAll && (
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange("all")}
            className="flex-1 min-w-fit"
          >
            {language === "ar" ? "جميع الفئات" : "Semua Kategori"}
          </Button>
        )}

        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category.id)}
            className="flex-1 min-w-fit"
          >
            {category.name[language]}
          </Button>
        ))}
      </div>

      {selectedCategory === "all" && (
        <div className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
          {language === "ar"
            ? "عرض جميع الأخبار والمقالات من كافة الفئات"
            : "Menampilkan semua berita dan artikel dari semua kategori"}
        </div>
      )}

      {selectedCategory !== "all" && (
        <div className="text-sm text-muted-foreground bg-muted/30 p-3 rounded-lg">
          {(() => {
            const category = categories.find((c) => c.id === selectedCategory)
            return category ? category.description[language] : ""
          })()}
        </div>
      )}
    </div>
  )
}

"use client"

import { useLanguage } from "@/components/language-provider"

export function ArticlesListing() {
  const { language } = useLanguage()

  // Empty articles array - coming soon
  const articles: any[] = []

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        {articles.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">{language === "ar" ? "قريباً" : "Coming Soon"}</h3>
              <p className="text-primary/70 mb-6">
                {language === "ar"
                  ? "نحن نعمل على إعداد مقالات مميزة لكم. ترقبوا المحتوى الجديد قريباً."
                  : "Kami sedang menyiapkan artikel-artikel menarik untuk Anda. Nantikan konten baru segera."}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Articles will be displayed here when available */}
          </div>
        )}
      </div>
    </section>
  )
}

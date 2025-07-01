"use client"

import { useLanguage } from "@/components/language-provider"
import { Camera } from "lucide-react"

// Empty photos array - coming soon
const photos: any[] = []

export function PhotoGallery() {
  const { language } = useLanguage()

  return (
    <div className="container py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">{language === "ar" ? "ألبوم الصور" : "Galeri Foto"}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {language === "ar"
            ? "مجموعة من الصور التي توثق أنشطة وفعاليات الجالية اليمنية في إندونيسيا"
            : "Koleksi foto yang mendokumentasikan kegiatan dan acara komunitas Yaman di Indonesia"}
        </p>
      </div>

      {photos.length === 0 ? (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <Camera className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-4" dir={language === "ar" ? "rtl" : "ltr"}>
              {language === "ar" ? "قريباً..." : "Segera Hadir..."}
            </h2>
            <p className="text-muted-foreground mb-6" dir={language === "ar" ? "rtl" : "ltr"}>
              {language === "ar"
                ? "نحن نعمل على تجميع وتنظيم مجموعة رائعة من الصور التي توثق مسيرة الجالية"
                : "Kami sedang mengumpulkan dan mengorganisir koleksi foto yang menakjubkan dari perjalanan komunitas"}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 auto-rows-[200px] gap-1">
          {/* Photos will be displayed here when available */}
        </div>
      )}
    </div>
  )
}

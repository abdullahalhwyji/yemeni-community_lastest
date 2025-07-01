"use client"

import { useLanguage } from "@/components/language-provider"
import { Video } from "lucide-react"

// Empty videos array - coming soon
const videos: any[] = []

export function VideoGallery() {
  const { language } = useLanguage()

  return (
    <div className="container py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">{language === "ar" ? "مكتبة الفيديو" : "Galeri Video"}</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {language === "ar"
            ? "مجموعة من مقاطع الفيديو التي توثق أنشطة وفعاليات الجالية اليمنية في إندونيسيا"
            : "Koleksi video yang mendokumentasikan kegiatan dan acara komunitas Yaman di Indonesia"}
        </p>
      </div>

      {videos.length === 0 ? (
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <Video className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-semibold mb-4" dir={language === "ar" ? "rtl" : "ltr"}>
              {language === "ar" ? "قريباً..." : "Segera Hadir..."}
            </h2>
            <p className="text-muted-foreground mb-6" dir={language === "ar" ? "rtl" : "ltr"}>
              {language === "ar"
                ? "نحن نعمل على تجميع وتنظيم مجموعة رائعة من مقاطع الفيديو التي توثق مسيرة الجالية"
                : "Kami sedang mengumpulkan dan mengorganisir koleksi video yang menakjubkan dari perjalanan komunitas"}
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Videos will be displayed here when available */}
        </div>
      )}
    </div>
  )
}

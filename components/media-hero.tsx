"use client"

import { useLanguage } from "@/components/language-provider"
import { usePathname } from "next/navigation"

export function MediaHero() {
  const { language } = useLanguage()
  const pathname = usePathname()

  // Determine the current section based on the URL
  const getCurrentSection = () => {
    if (pathname.includes("/news")) {
      return language === "ar" ? "الأخبار" : "Berita"
    } else if (pathname.includes("/articles")) {
      return language === "ar" ? "المقالات" : "Artikel"
    } else if (pathname.includes("/photos")) {
      return language === "ar" ? "ألبوم الصور" : "Galeri Foto"
    } else if (pathname.includes("/videos")) {
      return language === "ar" ? "معرض الفيديو" : "Galeri Video"
    }
    return language === "ar" ? "المركز الإعلامي" : "Pusat Media"
  }

  const getCurrentDescription = () => {
    if (pathname.includes("/news")) {
      return language === "ar"
        ? "آخر الأخبار والفعاليات المتعلقة بالجالية اليمنية في إندونيسيا"
        : "Berita dan acara terbaru terkait Komunitas Yaman di Indonesia"
    } else if (pathname.includes("/articles")) {
      return language === "ar"
        ? "مقالات ودراسات حول مختلف القضايا التي تهم الجالية"
        : "Artikel dan studi tentang berbagai isu yang menjadi perhatian komunitas"
    } else if (pathname.includes("/photos")) {
      return language === "ar"
        ? "صور من فعاليات وأنشطة الجالية اليمنية في إندونيسيا"
        : "Foto dari acara dan kegiatan Komunitas Yaman di Indonesia"
    } else if (pathname.includes("/videos")) {
      return language === "ar"
        ? "مقاطع فيديو من فعاليات وأنشطة الجالية اليمنية في إندونيسيا"
        : "Video dari acara dan kegiatan Komunitas Yaman di Indonesia"
    }
    return language === "ar"
      ? "أحدث الأخبار والمقالات والصور ومقاطع الفيديو المتعلقة بالجالية اليمنية في إندونيسيا"
      : "Berita, artikel, foto, dan video terbaru terkait Komunitas Yaman di Indonesia"
  }

  return (
    <section className="relative py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{getCurrentSection()}</h1>
          <p className="text-xl text-muted-foreground">{getCurrentDescription()}</p>
        </div>
      </div>
    </section>
  )
}

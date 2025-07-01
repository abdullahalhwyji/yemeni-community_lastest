"use client"

import { useLanguage } from "@/components/language-provider"
import { usePathname } from "next/navigation"

export function OurWorkHero() {
  const { language } = useLanguage()
  const pathname = usePathname()

  // Determine the current section based on the URL
  const getCurrentSection = () => {
    if (pathname.includes("/business-cluster")) {
      return language === "ar" ? "التكتل التجاري" : "Klaster Bisnis"
    } else if (pathname.includes("/national-occasions")) {
      return language === "ar" ? "المناسبات الوطنية" : "Acara Nasional"
    } else if (pathname.includes("/events-activities")) {
      return language === "ar" ? "الفعاليات والأنشطة" : "Acara dan Kegiatan"
    }
    return language === "ar" ? "أعمالنا" : "Kegiatan Kami"
  }

  return (
    <section className="relative py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{getCurrentSection()}</h1>
          <p className="text-xl text-muted-foreground">
            {language === "ar"
              ? "استعراض الأنشطة والمبادرات التي تقودها الجالية اليمنية في إندونيسيا في مجالات متعددة"
              : "Tinjauan kegiatan dan inisiatif yang dipimpin oleh Komunitas Yaman di Indonesia di berbagai bidang"}
          </p>
        </div>
      </div>
    </section>
  )
}

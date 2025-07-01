"use client"

import { useLanguage } from "@/components/language-provider"
import { usePathname } from "next/navigation"

export function PartnersHero() {
  const { language } = useLanguage()
  const pathname = usePathname()

  // Determine the current section based on the URL
  const getCurrentSection = () => {
    if (pathname.includes("/strategic-partners")) {
      return language === "ar" ? "الشركاء الاستراتيجيون" : "Mitra Strategis"
    } else if (pathname.includes("/executive-partners")) {
      return language === "ar" ? "الشركاء التنفيذيون" : "Mitra Eksekutif"
    }
    return language === "ar" ? "شركاؤنا" : "Mitra Kami"
  }

  const getCurrentDescription = () => {
    if (pathname.includes("/strategic-partners")) {
      return language === "ar"
        ? "الجهات الرسمية والمراكز الداعمة التي تمثل ركيزة أساسية في تعزيز وجود الجالية وتطوير أدائها"
        : "Badan resmi dan pusat pendukung yang mewakili pilar dasar dalam memperkuat keberadaan komunitas dan mengembangkan kinerjanya"
    } else if (pathname.includes("/executive-partners")) {
      return language === "ar"
        ? "الجهات التي تتعاون بشكل مباشر في تنفيذ الأنشطة والمشاريع الميدانية للجالية"
        : "Entitas yang bekerja sama secara langsung dalam pelaksanaan kegiatan dan proyek lapangan komunitas"
    }
    return language === "ar"
      ? "شبكة متينة من الشراكات الفاعلة، التي تسهم في تحقيق الأهداف المشتركة وخدمة أفراد الجالية"
      : "Jaringan kemitraan yang kuat dan efektif, yang berkontribusi pada pencapaian tujuan bersama dan melayani anggota komunitas"
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

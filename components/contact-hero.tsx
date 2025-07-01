"use client"

import { useLanguage } from "@/components/language-provider"

export function ContactHero() {
  const { language } = useLanguage()

  return (
    <section className="relative py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{language === "ar" ? "تواصل معنا" : "Hubungi Kami"}</h1>
          <p className="text-xl text-muted-foreground">
            {language === "ar"
              ? "يسرنا في الجالية اليمنية في إندونيسيا أن نكون على تواصل دائم مع جميع أفراد الجالية، والزوار، والمهتمين"
              : "Kami di Komunitas Yaman di Indonesia senang untuk selalu berkomunikasi dengan semua anggota komunitas, pengunjung, dan pihak yang tertarik"}
          </p>
        </div>
      </div>
    </section>
  )
}

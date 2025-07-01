"use client"

import { useLanguage } from "@/components/language-provider"

export function AboutHero() {
  const { language } = useLanguage()

  return (
    <section className="relative py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{language === "ar" ? "من نحن" : "Tentang Kami"}</h1>
          <p className="text-xl text-muted-foreground">
            {language === "ar"
              ? "تعرف على الجالية اليمنية في إندونيسيا، رؤيتنا، رسالتنا، وفريقنا"
              : "Pelajari tentang Komunitas Yaman di Indonesia, visi kami, misi kami, dan tim kami"}
          </p>
        </div>
      </div>
    </section>
  )
}

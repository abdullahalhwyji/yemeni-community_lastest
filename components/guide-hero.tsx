"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function GuideHero() {
  const { language } = useLanguage()

  return (
    <section className="relative py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {language === "ar" ? "دليل إندونيسيا" : "Panduan Indonesia"}
          </h1>
          <p className="mb-6 text-xl text-muted-foreground">
            {language === "ar"
              ? "دليل عملي شامل يخدم كل من ينتمي للجالية اليمنية أو يرغب في الإقامة أو الاستثمار أو الدراسة في إندونيسيا"
              : "Panduan praktis komprehensif yang melayani semua yang termasuk dalam komunitas Yaman atau yang ingin tinggal, berinvestasi, atau belajar di Indonesia"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/indonesia-guide/residence">
                {language === "ar" ? "إجراءات الإقامة" : "Prosedur Izin Tinggal"}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/indonesia-guide/universities">
                {language === "ar" ? "الجامعات والتعليم" : "Universitas dan Pendidikan"}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

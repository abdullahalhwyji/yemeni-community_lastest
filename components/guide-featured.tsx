"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function GuideFeatured() {
  const { language } = useLanguage()

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">{language === "ar" ? "أدلة مميزة" : "Panduan Unggulan"}</h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold">
              {language === "ar"
                ? "دليل الجامعات والتعليم في إندونيسيا"
                : "Panduan Universitas dan Pendidikan di Indonesia"}
            </h3>
            <p>
              {language === "ar"
                ? "دليل شامل للجامعات والمعاهد في إندونيسيا، يتضمن معلومات عن آلية التسجيل، التخصصات المتوفرة، والجهات التي توفر منح دراسية أو دعم للطلاب اليمنيين. يساعد هذا الدليل الطلاب الجدد على اختيار الجامعة المناسبة والتخصص المناسب، ويوفر لهم معلومات عن تكاليف الدراسة والمعيشة."
                : "Panduan komprehensif untuk universitas dan institut di Indonesia, termasuk informasi tentang mekanisme pendaftaran, spesialisasi yang tersedia, dan entitas yang menyediakan beasiswa atau dukungan untuk mahasiswa Yaman. Panduan ini membantu mahasiswa baru memilih universitas dan spesialisasi yang tepat, dan memberi mereka informasi tentang biaya studi dan biaya hidup."}
            </p>
            <Button asChild>
              <Link href="/indonesia-guide/universities">{language === "ar" ? "عرض الدليل" : "Lihat Panduan"}</Link>
            </Button>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Universities in Indonesia"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Residence Procedures"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold">
              {language === "ar" ? "دليل إجراءات الإقامة في إندونيسيا" : "Panduan Prosedur Izin Tinggal di Indonesia"}
            </h3>
            <p>
              {language === "ar"
                ? "شرح مبسّط ومفصّل لأنواع الإقامات في إندونيسيا، الشروط المطلوبة لكل نوع، الجهات المعنية بإصدار الإقامات، وخطوات استخراج وتجديد الإقامة. يتضمن الدليل أيضًا معلومات عن تكاليف الإقامة، والمستندات المطلوبة، والإجراءات القانونية المتعلقة بالإقامة."
                : "Penjelasan sederhana dan rinci tentang jenis izin tinggal di Indonesia, persyaratan untuk setiap jenis, otoritas yang bertanggung jawab untuk mengeluarkan izin tinggal, dan langkah-langkah untuk mendapatkan dan memperpanjang izin tinggal. Panduan ini juga mencakup informasi tentang biaya izin tinggal, dokumen yang diperlukan, dan prosedur hukum yang berkaitan dengan izin tinggal."}
            </p>
            <Button asChild>
              <Link href="/indonesia-guide/residence">{language === "ar" ? "عرض الدليل" : "Lihat Panduan"}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

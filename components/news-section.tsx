"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

export function NewsSection() {
  const { t, language } = useLanguage()

  const news = [
    {
      title:
        language === "ar"
          ? "حفل تنصيب رئيس الجالية وتكريم القيادة السابقة"
          : "Upacara Pelantikan Ketua Komunitas dan Penghargaan Kepemimpinan Sebelumnya",
      description:
        language === "ar"
          ? "في يوم تاريخي من أيام الجالية، شهدت القاعة الكبرى بتاريخ 8 مارس 2025 فعالية مميزة جمعت أبناء الجالية من مختلف الفئات والأعمار لحضور حفل تكريم وتنصيب رئيس الجالية الجديد"
          : "Dalam hari bersejarah komunitas, Aula Besar pada tanggal 8 Maret 2025 menyaksikan acara istimewa yang mengumpulkan anggota komunitas dari berbagai kategori dan usia untuk menghadiri upacara penghargaan dan pelantikan ketua komunitas baru",
      date: language === "ar" ? "٨ مارس ٢٠٢٥" : "8 Maret 2025",
      image: "/images/news-1.png",
    },
    {
      title:
        language === "ar"
          ? "الاجتماع الأول لمجلس أمناء الجالية اليمنية مع الرئيس الجديد"
          : "Pertemuan Pertama Dewan Pengurus Komunitas Yaman dengan Ketua Baru",
      description:
        language === "ar"
          ? "في مساء يوم الخميس الموافق 13 مارس 2025، عُقد في العاصمة الإندونيسية جاكرتا الاجتماع الأول لمجلس أمناء الجالية اليمنية في إندونيسيا برئاسة الشيخ مبخوت المرادي"
          : "Pada malam Kamis, 13 Maret 2025, diadakan di ibu kota Indonesia Jakarta pertemuan pertama Dewan Pengurus Komunitas Yaman di Indonesia yang dipimpin oleh Syekh Mabkhout Al-Muradi",
      date: language === "ar" ? "١٣ مارس ٢٠٢٥" : "13 Maret 2025",
      image: "/images/news-2.png",
    },
    {
      title:
        language === "ar"
          ? "تعيين محمد العيني نائبًا لرئيس الجالية اليمنية في إندونيسيا"
          : "Penunjukan Mohammed Al-Aini sebagai Wakil Ketua Komunitas Yaman di Indonesia",
      description:
        language === "ar"
          ? "في خطوة تنظيمية مهمة تعكس روح المسؤولية والعمل الجماعي، أصدر رئيس الجالية اليمنية في إندونيسيا الدكتور محمد الجمري قرارًا بتعيين الأستاذ محمد العيني نائبًا له"
          : "Dalam langkah organisasi penting yang mencerminkan semangat tanggung jawab dan kerja tim, Ketua Komunitas Yaman di Indonesia Dr. Mohammed Al-Jamri mengeluarkan keputusan untuk menunjuk Profesor Mohammed Al-Aini sebagai wakilnya",
      date: language === "ar" ? "١٥ مارس ٢٠٢٥" : "15 Maret 2025",
      image: "/images/news-3.png",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-card">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-primary">{t("latest_news")}</h2>
          <Button
            variant="outline"
            asChild
            className="border-accent text-primary hover:bg-accent hover:text-primary bg-transparent"
          >
            <Link href="/media/news">{t("view_all")}</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden bg-background border-accent/20">
              <div className="aspect-video relative">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="leading-relaxed text-primary line-clamp-2">{item.title}</CardTitle>
                <CardDescription className="text-primary/60">{item.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-primary/80 line-clamp-3">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" asChild className="px-0 text-button hover:text-button/80">
                  <Link href={`/media/news/${index + 1}`}>
                    {language === "ar" ? "اقرأ المزيد" : "Baca selengkapnya"} →
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

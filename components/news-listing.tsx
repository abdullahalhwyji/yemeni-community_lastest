"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, User } from "lucide-react"

export function NewsListing() {
  const { language } = useLanguage()

  const news = [
    {
      id: "1",
      title:
        language === "ar"
          ? "حفل تنصيب رئيس الجالية وتكريم القيادة السابقة"
          : "Upacara Pelantikan Ketua Komunitas dan Penghargaan Kepemimpinan Sebelumnya",
      description:
        language === "ar"
          ? "في يوم تاريخي من أيام الجالية، شهدت القاعة الكبرى بتاريخ 8 مارس 2025 فعالية مميزة جمعت أبناء الجالية من مختلف الفئات والأعمار لحضور حفل تكريم وتنصيب رئيس الجالية الجديد"
          : "Dalam hari bersejarah komunitas, Aula Besar pada tanggal 8 Maret 2025 menyaksikan acara istimewa yang mengumpulkan anggota komunitas dari berbagai kategori dan usia untuk menghadiri upacara penghargaan dan pelantikan ketua komunitas baru",
      date: language === "ar" ? "٨ مارس ٢٠٢٥" : "8 Maret 2025",
      location: language === "ar" ? "جاكرتا، إندونيسيا" : "Jakarta, Indonesia",
      author: language === "ar" ? "القطاع الإعلامي" : "Sektor Media",
      image: "/images/news-1.png",
    },
    {
      id: "2",
      title:
        language === "ar"
          ? "الاجتماع الأول لمجلس أمناء الجالية اليمنية مع الرئيس الجديد"
          : "Pertemuan Pertama Dewan Pengurus Komunitas Yaman dengan Ketua Baru",
      description:
        language === "ar"
          ? "في مساء يوم الخميس الموافق 13 مارس 2025، عُقد في العاصمة الإندونيسية جاكرتا الاجتماع الأول لمجلس أمناء الجالية اليمنية في إندونيسيا برئاسة الشيخ مبخوت المرادي"
          : "Pada malam Kamis, 13 Maret 2025, diadakan di ibu kota Indonesia Jakarta pertemuan pertama Dewan Pengurus Komunitas Yaman di Indonesia yang dipimpin oleh Syekh Mabkhout Al-Muradi",
      date: language === "ar" ? "١٣ مارس ٢٠٢٥" : "13 Maret 2025",
      location: language === "ar" ? "جاكرتا، إندونيسيا" : "Jakarta, Indonesia",
      author: language === "ar" ? "القطاع الإعلامي" : "Sektor Media",
      image: "/images/news-2.png",
    },
    {
      id: "3",
      title:
        language === "ar"
          ? "تعيين محمد العيني نائبًا لرئيس الجالية اليمنية في إندونيسيا"
          : "Penunjukan Mohammed Al-Aini sebagai Wakil Ketua Komunitas Yaman di Indonesia",
      description:
        language === "ar"
          ? "في خطوة تنظيمية مهمة تعكس روح المسؤولية والعمل الجماعي، أصدر رئيس الجالية اليمنية في إندونيسيا الدكتور محمد الجمري قرارًا بتعيين الأستاذ محمد العيني نائبًا له"
          : "Dalam langkah organisasi penting yang mencerminkan semangat tanggung jawab dan kerja tim, Ketua Komunitas Yaman di Indonesia Dr. Mohammed Al-Jamri mengeluarkan keputusan untuk menunjuk Profesor Mohammed Al-Aini sebagai wakilnya",
      date: language === "ar" ? "١٥ مارس ٢٠٢٥" : "15 Maret 2025",
      location: language === "ar" ? "جاكرتا، إندونيسيا" : "Jakarta, Indonesia",
      author: language === "ar" ? "القطاع الإعلامي" : "Sektor Media",
      image: "/images/news-3.png",
    },
    {
      id: "4",
      title:
        language === "ar"
          ? "اعتماد أعضاء مجلس الأمناء للدورة الثالثة لجالية اليمن في إندونيسيا"
          : "Pengesahan Anggota Dewan Pengurus Periode Ketiga Komunitas Yaman di Indonesia",
      description:
        language === "ar"
          ? "في إطار استكمال الهيكل الإداري والتنظيمي للجالية اليمنية في إندونيسيا، تم رسميًا اعتماد أعضاء مجلس الأمناء للدورة الثالثة، وذلك كخطوة استراتيجية تهدف إلى تعزيز أداء الجالية"
          : "Dalam rangka melengkapi struktur administratif dan organisasi Komunitas Yaman di Indonesia, secara resmi disahkan anggota Dewan Pengurus periode ketiga, sebagai langkah strategis untuk meningkatkan kinerja komunitas",
      date: language === "ar" ? "١٨ مارس ٢٠٢٥" : "18 Maret 2025",
      location: language === "ar" ? "جاكرتا، إندونيسيا" : "Jakarta, Indonesia",
      author: language === "ar" ? "القطاع الإعلامي" : "Sektor Media",
      image: "/images/news-4.png",
    },
    {
      id: "5",
      title:
        language === "ar"
          ? "تكليف عبدالرحمن قايد بالسكرتارية العامة للجالية اليمنية في إندونيسيا"
          : "Penugasan Abdurrahman Qaid sebagai Sekretaris Jenderal Komunitas Yaman di Indonesia",
      description:
        language === "ar"
          ? "أصدر رئيس الجالية اليمنية في إندونيسيا القرار الإداري رقم (001/2025) القاضي بتكليف الأستاذ عبدالرحمن محمد قايد للقيام بأعمال السكرتارية العامة للجالية اليمنية"
          : "Ketua Komunitas Yaman di Indonesia mengeluarkan keputusan administratif nomor (001/2025) yang menugaskan Profesor Abdurrahman Mohammed Qaid untuk melaksanakan tugas Sekretaris Jenderal Komunitas Yaman",
      date: language === "ar" ? "٢٠ مارس ٢٠٢٥" : "20 Maret 2025",
      location: language === "ar" ? "جاكرتا، إندونيسيا" : "Jakarta, Indonesia",
      author: language === "ar" ? "القطاع الإعلامي" : "Sektor Media",
      image: "/images/news-5.png",
    },
    {
      id: "6",
      title:
        language === "ar"
          ? "تكليف فاطمة السقاف مسؤولة للقطاع النسائي في الجالية اليمنية"
          : "Penugasan Fatimah Al-Saqqaf sebagai Penanggung Jawab Sektor Wanita Komunitas Yaman",
      description:
        language === "ar"
          ? "في خطوة نوعية تعزز من تمكين المرأة اليمنية في المجتمع الإندونيسي، أصدر رئيس الجالية اليمنية في إندونيسيا القرار الإداري رقم (002/2025) بتكليف الأستاذة فاطمة علي عبدالقادر السقاف"
          : "Dalam langkah kualitatif yang memperkuat pemberdayaan perempuan Yaman dalam masyarakat Indonesia, Ketua Komunitas Yaman di Indonesia mengeluarkan keputusan administratif nomor (002/2025) untuk menugaskan Profesor Fatimah Ali Abdulqadir Al-Saqqaf",
      date: language === "ar" ? "٢٢ مارس ٢٠٢٥" : "22 Maret 2025",
      location: language === "ar" ? "جاكرتا، إندونيسيا" : "Jakarta, Indonesia",
      author: language === "ar" ? "القطاع الإعلامي" : "Sektor Media",
      image: "/images/news-6.png",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Card key={item.id} className="overflow-hidden flex flex-col h-full">
              <div className="aspect-video relative">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </CardDescription>
                </div>
                <CardTitle className="line-clamp-2 leading-relaxed">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-muted-foreground">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{item.author}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href={`/media/news/${item.id}`}>
                    {language === "ar" ? "قراءة المزيد" : "Baca Selengkapnya"}
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

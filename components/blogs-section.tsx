"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"

export function BlogsSection() {
  const { language } = useLanguage()

  const blogs = [
    {
      id: 1,
      title:
        language === "ar"
          ? "تجربة الطلاب اليمنيين في الجامعات الإندونيسية"
          : "Pengalaman Mahasiswa Yaman di Universitas Indonesia",
      excerpt:
        language === "ar"
          ? "استكشاف رحلة التعليم العالي للطلاب اليمنيين في إندونيسيا والتحديات والفرص التي يواجهونها"
          : "Menjelajahi perjalanan pendidikan tinggi mahasiswa Yaman di Indonesia dan tantangan serta peluang yang mereka hadapi",
      image: "/placeholder.svg?height=300&width=400&text=Students+Blog",
      author: language === "ar" ? "أحمد محمد" : "Ahmad Muhammad",
      date: "2025-05-20",
      category: language === "ar" ? "تعليم" : "Pendidikan",
      readTime: language === "ar" ? "5 دقائق" : "5 menit",
    },
    {
      id: 2,
      title:
        language === "ar"
          ? "الثقافة اليمنية في إندونيسيا: جسر بين الحضارات"
          : "Budaya Yaman di Indonesia: Jembatan Antar Peradaban",
      excerpt:
        language === "ar"
          ? "كيف تمكنت الثقافة اليمنية من الاندماج والازدهار في المجتمع الإندونيسي المتنوع"
          : "Bagaimana budaya Yaman berhasil berintegrasi dan berkembang dalam masyarakat Indonesia yang beragam",
      image: "/placeholder.svg?height=300&width=400&text=Culture+Blog",
      author: language === "ar" ? "فاطمة علي" : "Fatimah Ali",
      date: "2025-05-18",
      category: language === "ar" ? "ثقافة" : "Budaya",
      readTime: language === "ar" ? "7 دقائق" : "7 menit",
    },
    {
      id: 3,
      title:
        language === "ar"
          ? "ريادة الأعمال في الجالية اليمنية بإندونيسيا"
          : "Kewirausahaan dalam Komunitas Yaman di Indonesia",
      excerpt:
        language === "ar"
          ? "قصص نجاح رجال الأعمال اليمنيين في إندونيسيا وكيف ساهموا في الاقتصاد المحلي"
          : "Kisah sukses pengusaha Yaman di Indonesia dan bagaimana mereka berkontribusi pada ekonomi lokal",
      image: "/placeholder.svg?height=300&width=400&text=Business+Blog",
      author: language === "ar" ? "محمد الحضرمي" : "Muhammad Al-Hadrami",
      date: "2025-05-15",
      category: language === "ar" ? "أعمال" : "Bisnis",
      readTime: language === "ar" ? "6 دقائق" : "6 menit",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-card">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">{language === "ar" ? "مقالات" : "Artikel"}</h2>
            <p className="text-primary/70">
              {language === "ar"
                ? "اقرأ أحدث المقالات والقصص من مجتمعنا"
                : "Baca artikel dan cerita terbaru dari komunitas kami"}
            </p>
          </div>
          <Button variant="outline" asChild className="border-accent text-primary hover:bg-accent hover:text-primary">
            <Link href="/media/articles">{language === "ar" ? "عرض الكل" : "Lihat Semua"}</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="bg-background border-accent/20 hover:shadow-lg transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-xs text-primary/60 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(blog.date).toLocaleDateString(language === "ar" ? "ar-SA" : "id-ID")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h3 className="font-bold text-lg text-primary mb-3 line-clamp-2 leading-relaxed group-hover:text-button transition-colors">
                  {blog.title}
                </h3>

                <p className="text-primary/70 text-sm mb-4 line-clamp-3 leading-relaxed">{blog.excerpt}</p>

                <Link
                  href={`/media/articles/${blog.id}`}
                  className="inline-flex items-center gap-2 text-button hover:text-button/80 font-medium text-sm transition-colors"
                >
                  {language === "ar" ? "اقرأ المزيد" : "Baca Selengkapnya"}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, MapPin } from "lucide-react"

export function ActivitiesSection() {
  const { t, language } = useLanguage()

  const activities = [
    {
      title: language === "ar" ? "المؤتمر السنوي للأعمال" : "Konferensi Bisnis Tahunan",
      description:
        language === "ar"
          ? "مؤتمر يجمع رجال الأعمال اليمنيين والإندونيسيين لمناقشة فرص التعاون"
          : "Konferensi yang menyatukan pengusaha Yaman dan Indonesia untuk membahas peluang kerjasama",
      date: language === "ar" ? "٢٠ يونيو ٢٠٢٥" : "20 Juni 2025",
      location: language === "ar" ? "فندق موليا، جاكرتا" : "Hotel Mulia, Jakarta",
      category: language === "ar" ? "أعمال" : "Bisnis",
    },
    {
      title: language === "ar" ? "احتفال العيد الوطني" : "Perayaan Hari Nasional",
      description:
        language === "ar"
          ? "احتفال بمناسبة العيد الوطني اليمني مع عروض ثقافية وأطعمة تقليدية"
          : "Perayaan Hari Nasional Yaman dengan pertunjukan budaya dan makanan tradisional",
      date: language === "ar" ? "٢٢ مايو ٢٠٢٥" : "22 Mei 2025",
      location: language === "ar" ? "مركز الثقافة اليمني، جاكرتا" : "Pusat Budaya Yaman, Jakarta",
      category: language === "ar" ? "ثقافي" : "Budaya",
    },
    {
      title: language === "ar" ? "يوم التوجيه للطلاب الجدد" : "Hari Orientasi untuk Mahasiswa Baru",
      description:
        language === "ar"
          ? "يوم توجيهي للطلاب اليمنيين الجدد في الجامعات الإندونيسية"
          : "Hari orientasi untuk mahasiswa Yaman baru di universitas Indonesia",
      date: language === "ar" ? "١٥ سبتمبر ٢٠٢٥" : "15 September 2025",
      location: language === "ar" ? "جامعة إندونيسيا، ديبوك" : "Universitas Indonesia, Depok",
      category: language === "ar" ? "تعليمي" : "Pendidikan",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-card">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-primary leading-relaxed">{t("featured_activities")}</h2>
          <Button variant="outline" asChild className="border-accent text-primary hover:bg-accent hover:text-primary">
            <Link href="/our-work/events-activities">{t("view_all")}</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity, index) => (
            <Card key={index} className="bg-background border-accent/20">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Badge className="bg-accent text-primary">{activity.category}</Badge>
                </div>
                <CardTitle className="mt-2 text-primary line-clamp-2 leading-relaxed">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-primary/80 line-clamp-3">{activity.description}</p>
                <div className="flex items-center text-sm text-primary/60">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{activity.date}</span>
                </div>
                <div className="mt-2 flex items-center text-sm text-primary/60">
                  <MapPin className="mr-2 h-4 w-4" />
                  <span>{activity.location}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-button text-primary hover:bg-button/90">
                  <Link href={`/activities/${index + 1}`}>{language === "ar" ? "التسجيل" : "Daftar"}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

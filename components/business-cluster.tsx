"use client"

import { Badge } from "@/components/ui/badge"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Building, Briefcase, Users } from "lucide-react"

export function BusinessCluster() {
  const { t, language } = useLanguage()

  const businesses = [
    {
      name: language === "ar" ? "مطعم حضرموت" : "Restoran Hadramout",
      category: language === "ar" ? "مطاعم" : "Restoran",
      location: language === "ar" ? "جاكرتا" : "Jakarta",
      contact: "+62 123 456 789",
      website: "https://example.com",
    },
    {
      name: language === "ar" ? "شركة اليمن للشحن" : "Yemen Shipping Company",
      category: language === "ar" ? "شحن" : "Pengiriman",
      location: language === "ar" ? "سورابايا" : "Surabaya",
      contact: "+62 987 654 321",
      website: "https://example.com",
    },
    {
      name: language === "ar" ? "متجر التوابل اليمنية" : "Toko Rempah Yaman",
      category: language === "ar" ? "غذاء" : "Makanan",
      location: language === "ar" ? "باندونج" : "Bandung",
      contact: "+62 456 789 123",
      website: "https://example.com",
    },
    {
      name: language === "ar" ? "وكالة سفر اليمن" : "Agen Perjalanan Yaman",
      category: language === "ar" ? "سفر" : "Perjalanan",
      location: language === "ar" ? "جوكجاكرتا" : "Yogyakarta",
      contact: "+62 789 123 456",
      website: "https://example.com",
    },
  ]

  const jobs = [
    {
      title: language === "ar" ? "مدير مبيعات" : "Manajer Penjualan",
      company: language === "ar" ? "شركة اليمن للتجارة" : "Yemen Trading Company",
      location: language === "ar" ? "جاكرتا" : "Jakarta",
      type: language === "ar" ? "دوام كامل" : "Penuh Waktu",
      posted: language === "ar" ? "منذ 3 أيام" : "3 hari yang lalu",
    },
    {
      title: language === "ar" ? "مدرس لغة عربية" : "Guru Bahasa Arab",
      company: language === "ar" ? "مركز اللغات" : "Pusat Bahasa",
      location: language === "ar" ? "باندونج" : "Bandung",
      type: language === "ar" ? "دوام جزئي" : "Paruh Waktu",
      posted: language === "ar" ? "منذ 5 أيام" : "5 hari yang lalu",
    },
    {
      title: language === "ar" ? "محاسب" : "Akuntan",
      company: language === "ar" ? "مطعم صنعاء" : "Restoran Sanaa",
      location: language === "ar" ? "سورابايا" : "Surabaya",
      type: language === "ar" ? "دوام كامل" : "Penuh Waktu",
      posted: language === "ar" ? "منذ أسبوع" : "1 minggu yang lalu",
    },
  ]

  const events = [
    {
      title: language === "ar" ? "معرض الأعمال اليمني الإندونيسي" : "Pameran Bisnis Yaman-Indonesia",
      date: language === "ar" ? "١٥ يونيو ٢٠٢٥" : "15 Juni 2025",
      location: language === "ar" ? "مركز جاكرتا للمؤتمرات" : "Jakarta Convention Center",
      description:
        language === "ar"
          ? "معرض يجمع رجال الأعمال اليمنيين والإندونيسيين لعرض منتجاتهم وخدماتهم وبناء شراكات تجارية"
          : "Pameran yang menyatukan pengusaha Yaman dan Indonesia untuk menampilkan produk dan layanan mereka dan membangun kemitraan bisnis",
    },
    {
      title: language === "ar" ? "ورشة عمل ريادة الأعمال" : "Workshop Kewirausahaan",
      date: language === "ar" ? "٢٠ يوليو ٢٠٢٥" : "20 Juli 2025",
      location: language === "ar" ? "فندق موليا، جاكرتا" : "Hotel Mulia, Jakarta",
      description:
        language === "ar"
          ? "ورشة عمل تهدف إلى تطوير مهارات ريادة الأعمال لدى الشباب اليمني في إندونيسيا"
          : "Workshop yang bertujuan untuk mengembangkan keterampilan kewirausahaan di kalangan pemuda Yaman di Indonesia",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">{t("business_cluster")}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {language === "ar"
              ? "دعم وتمكين أصحاب الأعمال اليمنيين في إندونيسيا"
              : "Mendukung dan memberdayakan pengusaha Yaman di Indonesia"}
          </p>
        </div>

        <Tabs defaultValue="directory" className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="directory">
              <Building className="mr-2 h-4 w-4" />
              {t("business_directory")}
            </TabsTrigger>
            <TabsTrigger value="jobs">
              <Briefcase className="mr-2 h-4 w-4" />
              {t("job_opportunities")}
            </TabsTrigger>
            <TabsTrigger value="networking">
              <Users className="mr-2 h-4 w-4" />
              {t("networking_events")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="directory" className="mt-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {businesses.map((business, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{business.name}</CardTitle>
                    <CardDescription>{business.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{language === "ar" ? "الموقع:" : "Lokasi:"}</span>
                        <span>{business.location}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">{language === "ar" ? "الاتصال:" : "Kontak:"}</span>
                        <span>{business.contact}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={business.website} target="_blank">
                        {language === "ar" ? "زيارة الموقع" : "Kunjungi Situs"}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button asChild>
                <Link href="/business-directory">
                  {language === "ar" ? "عرض جميع الشركات" : "Lihat Semua Perusahaan"}
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="jobs" className="mt-6">
            <div className="space-y-4">
              {jobs.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between">
                      <div>
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription>{job.company}</CardDescription>
                      </div>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm">
                      <span>{job.location}</span>
                      <span>{job.posted}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/jobs/${index + 1}`}>
                        {language === "ar" ? "التقديم للوظيفة" : "Lamar Pekerjaan"}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button asChild>
                <Link href="/jobs">{language === "ar" ? "عرض جميع الوظائف" : "Lihat Semua Pekerjaan"}</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="networking" className="mt-6">
            <div className="space-y-6">
              {events.map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <CardDescription>
                      <div className="flex flex-col space-y-1">
                        <span>{event.date}</span>
                        <span>{event.location}</span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/events/${index + 1}`}>
                        {language === "ar" ? "التسجيل في الفعالية" : "Daftar Acara"}
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

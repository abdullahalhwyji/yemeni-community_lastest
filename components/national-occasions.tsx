"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin } from "lucide-react"

export function NationalOccasions() {
  const { t, language } = useLanguage()

  const upcomingCelebrations = [
    {
      title: language === "ar" ? "احتفال العيد الوطني اليمني" : "Perayaan Hari Nasional Yaman",
      date: language === "ar" ? "٢٢ مايو ٢٠٢٥" : "22 Mei 2025",
      location: language === "ar" ? "مركز الثقافة اليمني، جاكرتا" : "Pusat Budaya Yaman, Jakarta",
      description:
        language === "ar"
          ? "احتفال بمناسبة العيد الوطني اليمني مع عروض ثقافية وأطعمة تقليدية"
          : "Perayaan Hari Nasional Yaman dengan pertunjukan budaya dan makanan tradisional",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: language === "ar" ? "يوم الوحدة اليمنية" : "Hari Persatuan Yaman",
      date: language === "ar" ? "٢٢ مايو ٢٠٢٥" : "22 Mei 2025",
      location: language === "ar" ? "قاعة المؤتمرات، سورابايا" : "Balai Konferensi, Surabaya",
      description:
        language === "ar"
          ? "احتفال بذكرى الوحدة اليمنية مع ندوات ثقافية وفنية"
          : "Perayaan peringatan Persatuan Yaman dengan seminar budaya dan seni",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const pastCelebrations = [
    {
      title: language === "ar" ? "احتفال العيد الوطني اليمني ٢٠٢٤" : "Perayaan Hari Nasional Yaman 2024",
      date: language === "ar" ? "٢٢ مايو ٢٠٢٤" : "22 Mei 2024",
      location: language === "ar" ? "مركز الثقافة اليمني، جاكرتا" : "Pusat Budaya Yaman, Jakarta",
      description:
        language === "ar"
          ? "احتفال بمناسبة العيد الوطني اليمني مع عروض ثقافية وأطعمة تقليدية"
          : "Perayaan Hari Nasional Yaman dengan pertunjukan budaya dan makanan tradisional",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: language === "ar" ? "يوم الوحدة اليمنية ٢٠٢٤" : "Hari Persatuan Yaman 2024",
      date: language === "ar" ? "٢٢ مايو ٢٠٢٤" : "22 Mei 2024",
      location: language === "ar" ? "قاعة المؤتمرات، سورابايا" : "Balai Konferensi, Surabaya",
      description:
        language === "ar"
          ? "احتفال بذكرى الوحدة اليمنية مع ندوات ثقافية وفنية"
          : "Perayaan peringatan Persatuan Yaman dengan seminar budaya dan seni",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">{t("national_occasions")}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {language === "ar"
              ? "الاحتفال بالهوية الوطنية وتعزيز الانتماء"
              : "Merayakan identitas nasional dan memperkuat rasa memiliki"}
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">{t("upcoming_celebrations")}</TabsTrigger>
            <TabsTrigger value="past">{t("past_celebrations")}</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {upcomingCelebrations.map((celebration, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={celebration.image || "/placeholder.svg"}
                      alt={celebration.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{celebration.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{celebration.description}</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{celebration.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{celebration.location}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/celebrations/${index + 1}`}>{language === "ar" ? "التسجيل" : "Daftar"}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {pastCelebrations.map((celebration, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={celebration.image || "/placeholder.svg"}
                      alt={celebration.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{celebration.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{celebration.description}</p>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{celebration.date}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{celebration.location}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={`/celebrations/past/${index + 1}`}>
                        {language === "ar" ? "عرض التفاصيل" : "Lihat Detail"}
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

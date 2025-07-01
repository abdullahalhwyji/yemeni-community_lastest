"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"

export function EventsActivities() {
  const { t, language } = useLanguage()

  const upcomingEvents = [
    {
      title: language === "ar" ? "المؤتمر السنوي للأعمال" : "Konferensi Bisnis Tahunan",
      date: language === "ar" ? "٢٠ يونيو ٢٠٢٥" : "20 Juni 2025",
      location: language === "ar" ? "فندق موليا، جاكرتا" : "Hotel Mulia, Jakarta",
      category: language === "ar" ? "أعمال" : "Bisnis",
      attendees: "150+",
      description:
        language === "ar"
          ? "مؤتمر يجمع رجال الأعمال اليمنيين والإندونيسيين لمناقشة فرص التعاون"
          : "Konferensi yang menyatukan pengusaha Yaman dan Indonesia untuk membahas peluang kerjasama",
    },
    {
      title: language === "ar" ? "يوم التوجيه للطلاب الجدد" : "Hari Orientasi untuk Mahasiswa Baru",
      date: language === "ar" ? "١٥ سبتمبر ٢٠٢٥" : "15 September 2025",
      location: language === "ar" ? "جامعة إندونيسيا، ديبوك" : "Universitas Indonesia, Depok",
      category: language === "ar" ? "تعليمي" : "Pendidikan",
      attendees: "100+",
      description:
        language === "ar"
          ? "يوم توجيهي للطلاب اليمنيين الجدد في الجامعات الإندونيسية"
          : "Hari orientasi untuk mahasiswa Yaman baru di universitas Indonesia",
    },
    {
      title: language === "ar" ? "دورة اللغة الإندونيسية" : "Kursus Bahasa Indonesia",
      date: language === "ar" ? "١ يوليو ٢٠٢٥" : "1 Juli 2025",
      location: language === "ar" ? "مركز الثقافة اليمني، جاكرتا" : "Pusat Budaya Yaman, Jakarta",
      category: language === "ar" ? "تعليمي" : "Pendidikan",
      attendees: "50+",
      description:
        language === "ar"
          ? "دورة مكثفة لتعلم اللغة الإندونيسية للوافدين الجدد من اليمن"
          : "Kursus intensif untuk belajar bahasa Indonesia bagi pendatang baru dari Yaman",
    },
  ]

  const pastEvents = [
    {
      title: language === "ar" ? "المؤتمر السنوي للأعمال ٢٠٢٤" : "Konferensi Bisnis Tahunan 2024",
      date: language === "ar" ? "٢٠ يونيو ٢٠٢٤" : "20 Juni 2024",
      location: language === "ar" ? "فندق موليا، جاكرتا" : "Hotel Mulia, Jakarta",
      category: language === "ar" ? "أعمال" : "Bisnis",
      attendees: "120+",
      description:
        language === "ar"
          ? "مؤتمر جمع رجال الأعمال اليمنيين والإندونيسيين لمناقشة فرص التعاون"
          : "Konferensi yang menyatukan pengusaha Yaman dan Indonesia untuk membahas peluang kerjasama",
    },
    {
      title: language === "ar" ? "يوم التوجيه للطلاب الجدد ٢٠٢٤" : "Hari Orientasi untuk Mahasiswa Baru 2024",
      date: language === "ar" ? "١٥ سبتمبر ٢٠٢٤" : "15 September 2024",
      location: language === "ar" ? "جامعة إندونيسيا، ديبوك" : "Universitas Indonesia, Depok",
      category: language === "ar" ? "تعليمي" : "Pendidikan",
      attendees: "80+",
      description:
        language === "ar"
          ? "يوم توجيهي للطلاب اليمنيين الجدد في الجامعات الإندونيسية"
          : "Hari orientasi untuk mahasiswa Yaman baru di universitas Indonesia",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">{t("events_activities")}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {language === "ar"
              ? "توثيق الأنشطة الاجتماعية والثقافية والتعليمية للجالية"
              : "Mendokumentasikan kegiatan sosial, budaya, dan pendidikan komunitas"}
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">{t("upcoming_events")}</TabsTrigger>
            <TabsTrigger value="past">{t("past_events")}</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-6">
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <Badge>{event.category}</Badge>
                    </div>
                    <CardTitle className="mt-2">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{event.description}</p>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-2 h-4 w-4" />
                        <span>
                          {event.attendees} {language === "ar" ? "مشارك" : "peserta"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={`/events/${index + 1}`}>{language === "ar" ? "التسجيل" : "Daftar"}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-6">
            <div className="space-y-6">
              {pastEvents.map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">{event.category}</Badge>
                    </div>
                    <CardTitle className="mt-2">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{event.description}</p>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="mr-2 h-4 w-4" />
                        <span>
                          {event.attendees} {language === "ar" ? "مشارك" : "peserta"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild className="w-full">
                      <Link href={`/events/past/${index + 1}`}>
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

"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Mail, Phone } from "lucide-react"

export function ContactInfo() {
  const { t, language } = useLanguage()

  const contactInfo = [
    {
      title: t("official_address"),
      content:
        language === "ar"
          ? "جاكرتا، إندونيسيا، الشارع الرئيسي، مبنى رقم 123"
          : "Jakarta, Indonesia, Jalan Utama, Gedung No. 123",
      icon: <MapPin className="h-8 w-8" />,
    },
    {
      title: t("official_hours"),
      content:
        language === "ar"
          ? "من الإثنين إلى الجمعة – من الساعة 9:00 صباحا حتى 4:00 مساءً"
          : "Senin hingga Jumat - 9:00 pagi hingga 4:00 sore",
      icon: <Clock className="h-8 w-8" />,
    },
    {
      title: t("official_email"),
      content: "komunitasyaman@gmail.com",
      icon: <Mail className="h-8 w-8" />,
    },
    {
      title: t("community_phone"),
      content: "+6282211112217",
      icon: <Phone className="h-8 w-8" />,
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">{t("contact_us")}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {language === "ar"
              ? "نرحب بجميع الرسائل ونسعى للرد عليها في أقرب وقت ممكن"
              : "Kami menyambut semua pesan dan berusaha untuk meresponsnya sesegera mungkin"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((info, index) => (
            <Card key={index}>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 rounded-full bg-primary/10 p-3 text-yemen-brown-light md:text-primary">
                  {info.icon}
                </div>
                <CardTitle>{info.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">{info.content}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

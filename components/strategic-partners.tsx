"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function StrategicPartners() {
  const { t, language } = useLanguage()

  const partners = [
    {
      name: language === "ar" ? "سفارة الجمهورية اليمنية في إندونيسيا" : "Kedutaan Besar Republik Yaman di Indonesia",
      description:
        language === "ar"
          ? "شريك رسمي في التمثيل والدعم وتيسير الإجراءات الرسمية للمواطنين"
          : "Mitra resmi dalam representasi, dukungan, dan fasilitasi prosedur resmi untuk warga negara",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://example.com",
    },
    {
      name: language === "ar" ? "غرفة التجارة اليمنية الإندونيسية" : "Kamar Dagang Yaman-Indonesia",
      description:
        language === "ar"
          ? "تعزيز العلاقات التجارية بين اليمن وإندونيسيا ودعم المستثمرين"
          : "Mempromosikan hubungan perdagangan antara Yaman dan Indonesia dan mendukung investor",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://example.com",
    },
    {
      name: language === "ar" ? "مركز الدراسات الآسيوية" : "Pusat Studi Asia",
      description:
        language === "ar"
          ? "مركز بحثي يدعم الدراسات والأبحاث المتعلقة بالعلاقات اليمنية الإندونيسية"
          : "Pusat penelitian yang mendukung studi dan penelitian terkait hubungan Yaman-Indonesia",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://example.com",
    },
    {
      name: language === "ar" ? "منظمة التعاون الإسلامي" : "Organisasi Kerjasama Islam",
      description:
        language === "ar"
          ? "منظمة دولية تدعم التعاون بين الدول الإسلامية في مختلف المجالات"
          : "Organisasi internasional yang mendukung kerjasama antara negara-negara Islam di berbagai bidang",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://example.com",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">{t("strategic_partners")}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {language === "ar"
              ? "الجهات الرسمية والمراكز الداعمة التي تمثل ركيزة أساسية في تعزيز وجود الجالية وتطوير أدائها"
              : "Badan resmi dan pusat pendukung yang mewakili pilar dasar dalam memperkuat keberadaan komunitas dan mengembangkan kinerjanya"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl">{partner.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-center">{partner.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href={partner.website} target="_blank">
                    {language === "ar" ? "زيارة الموقع" : "Kunjungi Situs"}
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

"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function ExecutivePartners() {
  const { t, language } = useLanguage()

  const partners = [
    {
      name: language === "ar" ? "اتحاد رجال الأعمال اليمنيين" : "Asosiasi Pengusaha Yaman",
      description:
        language === "ar"
          ? "يقدمون دعما مباشراً لتنفيذ الفعاليات والأنشطة الخدمية والمجتمعية"
          : "Memberikan dukungan langsung untuk pelaksanaan acara dan kegiatan layanan dan masyarakat",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://example.com",
    },
    {
      name: language === "ar" ? "جامعة إندونيسيا" : "Universitas Indonesia",
      description:
        language === "ar"
          ? "تشارك في دعم برامج التدريب، الفعاليات الطلابية، وتسهيل التواصل الأكاديمي"
          : "Berpartisipasi dalam mendukung program pelatihan, acara mahasiswa, dan memfasilitasi komunikasi akademik",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://example.com",
    },
    {
      name: language === "ar" ? "اتحاد الطلاب اليمنيين في جاكرتا" : "Persatuan Mahasiswa Yaman di Jakarta",
      description:
        language === "ar"
          ? "شريك أساسي في تنظيم الفعاليات، نشر الوعي، وربط الطلاب الجدد بالمجتمع الطلابي"
          : "Mitra utama dalam mengorganisir acara, menyebarkan kesadaran, dan menghubungkan mahasiswa baru dengan komunitas mahasiswa",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://example.com",
    },
    {
      name: language === "ar" ? "مبادرة شباب اليمن" : "Inisiatif Pemuda Yaman",
      description:
        language === "ar"
          ? "تُشارك في تنشيط العمل المجتمعي وتقديم الخدمات التطوعية للجالية"
          : "Berpartisipasi dalam mengaktifkan kerja masyarakat dan memberikan layanan sukarela kepada komunitas",
      logo: "/placeholder.svg?height=200&width=200",
      website: "https://example.com",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">{t("executive_partners")}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {language === "ar"
              ? "الجهات التي تتعاون بشكل مباشر في تنفيذ الأنشطة والمشاريع الميدانية للجالية"
              : "Entitas yang bekerja sama secara langsung dalam pelaksanaan kegiatan dan proyek lapangan komunitas"}
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

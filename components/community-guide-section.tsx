"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Shield, Plane, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CommunityGuideSection() {
  const { language } = useLanguage()

  const openGuide1 = () => {
    window.open("https://drive.google.com/file/d/1_jejQVBXG2Nr4H_7vry-0829OoPIN87u/view?usp=drive_link", "_blank")
  }

  const openGuide2 = () => {
    window.open("https://drive.google.com/file/d/17N8LXInqzkj29gUYQ-OjNcf-_snKKdP1/view?usp=drive_link", "_blank")
  }

  const openGuide3 = () => {
    window.open("https://drive.google.com/file/d/1HOovHvshy8oM4HlLQ6OwO4lxerqAA3G5/view?usp=drive_link", "_blank")
  }

  const guides = [
    {
      title: language === "ar" ? "دليل استخراج جواز سفر جديد" : "Panduan Pengurusan Paspor Baru",
      description:
        language === "ar"
          ? "يوضح هذا الدليل الإجراءات اللازمة للمواطنين اليمنيين في إندونيسيا لاستخراج جواز سفر جديد"
          : "Panduan ini menjelaskan prosedur yang diperlukan bagi warga negara Yaman di Indonesia untuk mengurus paspor baru",
      icon: <FileText className="h-6 w-6" />,
      onClick: openGuide1,
    },
    {
      title: language === "ar" ? "دليل التأمين الصحي الحكومي (BPJS)" : "Panduan Asuransi Kesehatan Pemerintah (BPJS)",
      description:
        language === "ar"
          ? "يقدم هذا الدليل شرحًا شاملاً لنظام التأمين الصحي الحكومي الإندونيسي (BPJS) للأجانب"
          : "Panduan ini memberikan penjelasan komprehensif tentang sistem asuransi kesehatan pemerintah Indonesia (BPJS) untuk warga asing",
      icon: <Shield className="h-6 w-6" />,
      onClick: openGuide2,
    },
    {
      title:
        language === "ar"
          ? "دليل مطار جاكرتا الدولي (سوكارنو-هاتا)"
          : "Panduan Bandara Internasional Jakarta (Soekarno-Hatta)",
      description:
        language === "ar"
          ? "يعد هذا الدليل مرجعًا للمسافرين عبر مطار جاكرتا الدولي"
          : "Panduan ini merupakan referensi bagi para pelancong melalui Bandara Internasional Jakarta",
      icon: <Plane className="h-6 w-6" />,
      onClick: openGuide3,
    },
  ]

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {language === "ar" ? "دليل إندونيسيا الشامل" : "Panduan Lengkap Indonesia"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === "ar"
              ? "أدلة مفيدة ومعلومات شاملة للجالية اليمنية في إندونيسيا"
              : "Panduan berguna dan informasi lengkap untuk komunitas Yaman di Indonesia"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
          {guides.map((guide, index) => (
            <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-3 rounded-full bg-primary/10 p-2 w-fit text-primary">{guide.icon}</div>
                <CardTitle className="text-lg">{guide.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="flex-1 mb-4 text-sm">{guide.description}</CardDescription>
                <Button onClick={guide.onClick} variant="outline" size="sm">
                  {language === "ar" ? "عرض الدليل" : "Lihat Panduan"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/indonesia-guide">
            <Button size="lg" className="gap-2">
              {language === "ar" ? "عرض جميع الأدلة" : "Lihat Semua Panduan"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Home, GraduationCap, Phone, Shield, Plane, Globe, Briefcase, MapPin } from "lucide-react"

export function GuideCategories() {
  const { t, language } = useLanguage()

  const categories = [
    {
      title: t("residence_procedures"),
      description:
        language === "ar"
          ? "شرح مبسّط ومفصّل لأنواع الإقامات، الشروط، الجهات المعنية، وخطوات استخراج وتجديد الإقامة"
          : "Penjelasan sederhana dan rinci tentang jenis izin tinggal, persyaratan, otoritas terkait, dan langkah-langkah untuk mendapatkan dan memperpanjang izin tinggal",
      icon: <FileText className="h-8 w-8" />,
      href: "/indonesia-guide/residence",
    },
    {
      title: t("housing_guide"),
      description:
        language === "ar"
          ? "معلومات حول خيارات السكن المختلفة، مع نصائح للبحث والتأجير، وتوضيح المناطق المناسبة للعائلات أو الأفراد"
          : "Informasi tentang berbagai pilihan perumahan, dengan tips untuk mencari dan menyewa, dan klarifikasi area yang cocok untuk keluarga atau individu",
      icon: <Home className="h-8 w-8" />,
      href: "/indonesia-guide/housing",
    },
    {
      title: t("universities_education"),
      description:
        language === "ar"
          ? "دليل شامل للجامعات والمعاهد، آلية التسجيل، التخصصات المتوفرة، والجهات التي توفر منح دراسية"
          : "Panduan komprehensif untuk universitas dan institut, mekanisme pendaftaran, spesialisasi yang tersedia, dan entitas yang menyediakan beasiswa",
      icon: <GraduationCap className="h-8 w-8" />,
      href: "/indonesia-guide/universities",
    },
    {
      title: t("emergency_services"),
      description:
        language === "ar"
          ? "أرقام الطوارئ الأساسية مثل الإسعاف، الشرطة، الدفاع المدني، وخطوط المساعدة الخاصة بالسفارة أو الجالية"
          : "Nomor darurat dasar seperti ambulans, polisi, pertahanan sipil, dan hotline bantuan khusus untuk kedutaan atau komunitas",
      icon: <Phone className="h-8 w-8" />,
      href: "/indonesia-guide/emergency",
    },
    {
      title: t("insurance"),
      description:
        language === "ar"
          ? "معلومات عن التأمين الصحي والإجراءات المرتبطة به، وأفضل الشركات أو البرامج التي يمكن أن يستفيد منها اليمنيون"
          : "Informasi tentang asuransi kesehatan dan prosedur terkait, dan perusahaan atau program terbaik yang dapat dimanfaatkan oleh warga Yaman",
      icon: <Shield className="h-8 w-8" />,
      href: "/indonesia-guide/insurance",
    },
    {
      title: t("travel_tips"),
      description:
        language === "ar"
          ? "إرشادات حول التنقل داخل المدن، وسائل المواصلات العامة، استئجار المركبات، وإجراءات التنقل بين المدن"
          : "Panduan tentang pergerakan di dalam kota, transportasi umum, penyewaan kendaraan, dan prosedur perjalanan antar kota",
      icon: <Plane className="h-8 w-8" />,
      href: "/indonesia-guide/travel",
    },
    {
      title: t("culture_customs"),
      description:
        language === "ar"
          ? "دليل ثقافي يساعد الوافد على فهم المجتمع الإندونيسي، العادات والتقاليد، ما يجب احترامه وما يجب تجنبه"
          : "Panduan budaya yang membantu pendatang memahami masyarakat Indonesia, adat dan tradisi, apa yang harus dihormati dan apa yang harus dihindari",
      icon: <Globe className="h-8 w-8" />,
      href: "/indonesia-guide/culture",
    },
    {
      title: t("work_systems"),
      description:
        language === "ar"
          ? "معلومات عن قوانين العمل في إندونيسيا، متطلبات العمل لغير الإندونيسيين، وأبرز النصائح القانونية"
          : "Informasi tentang hukum ketenagakerjaan di Indonesia, persyaratan kerja untuk non-Indonesia, dan tips hukum utama",
      icon: <Briefcase className="h-8 w-8" />,
      href: "/indonesia-guide/work",
    },
    {
      title: t("tourist_places"),
      description:
        language === "ar"
          ? "عرض لأهم المواقع السياحية التي يمكن زيارتها، مع خرائط، صور، ومعلومات عن الأماكن المناسبة للعائلات"
          : "Tampilan situs wisata penting yang dapat dikunjungi, dengan peta, gambar, dan informasi tentang tempat yang cocok untuk keluarga",
      icon: <MapPin className="h-8 w-8" />,
      href: "/indonesia-guide/tourism",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">{language === "ar" ? "أقسام الدليل" : "Bagian Panduan"}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {language === "ar"
              ? "معلومات موثوقة ومحدثة في مختلف الجوانب لتيسير حياة المقيمين والوافدين الجدد"
              : "Informasi terpercaya dan terbaru di berbagai aspek untuk memudahkan kehidupan penduduk dan pendatang baru"}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit text-primary">{category.icon}</div>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{category.description}</CardDescription>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="outline" asChild className="w-full">
                  <Link href={category.href}>{language === "ar" ? "عرض الدليل" : "Lihat Panduan"}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

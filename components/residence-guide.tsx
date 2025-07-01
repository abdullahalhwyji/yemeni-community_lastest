"use client"

import { useLanguage } from "@/components/language-provider"
import { PDFViewer } from "@/components/pdf-viewer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { FileText, Clock, Users, AlertCircle } from "lucide-react"

export function ResidenceGuide() {
  const { language } = useLanguage()

  const residenceTypes = [
    {
      title: language === "ar" ? "تأشيرة الزيارة" : "Visa Kunjungan",
      description: language === "ar" ? "للزيارات قصيرة المدى والسياحة" : "Untuk kunjungan jangka pendek dan pariwisata",
      duration: language === "ar" ? "30 يوم" : "30 hari",
      pdfUrl: "/placeholder.pdf",
      requirements:
        language === "ar"
          ? ["جواز سفر ساري المفعول", "تذكرة طيران", "إثبات الإقامة"]
          : ["Paspor yang masih berlaku", "Tiket pesawat", "Bukti akomodasi"],
    },
    {
      title: language === "ar" ? "تأشيرة الإقامة" : "Visa Tinggal",
      description: language === "ar" ? "للإقامة طويلة المدى والعمل" : "Untuk tinggal jangka panjang dan bekerja",
      duration: language === "ar" ? "1 سنة" : "1 tahun",
      pdfUrl: "/placeholder.pdf",
      requirements:
        language === "ar"
          ? ["جواز سفر ساري المفعول", "عقد عمل", "شهادة صحية", "كشف حساب بنكي"]
          : ["Paspor yang masih berlaku", "Kontrak kerja", "Sertifikat kesehatan", "Rekening koran bank"],
    },
    {
      title: language === "ar" ? "تأشيرة الطالب" : "Visa Pelajar",
      description: language === "ar" ? "للدراسة في الجامعات والمعاهد" : "Untuk belajar di universitas dan institut",
      duration: language === "ar" ? "حسب مدة الدراسة" : "Sesuai masa studi",
      pdfUrl: "/placeholder.pdf",
      requirements:
        language === "ar"
          ? ["جواز سفر ساري المفعول", "قبول جامعي", "شهادة صحية", "إثبات القدرة المالية"]
          : [
              "Paspor yang masih berlaku",
              "Surat penerimaan universitas",
              "Sertifikat kesehatan",
              "Bukti kemampuan finansial",
            ],
    },
  ]

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">{language === "ar" ? "الرئيسية" : "Beranda"}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/indonesia-guide">
              {language === "ar" ? "دليل إندونيسيا" : "Panduan Indonesia"}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>{language === "ar" ? "إجراءات الإقامة" : "Prosedur Izin Tinggal"}</BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          {language === "ar" ? "دليل إجراءات الإقامة في إندونيسيا" : "Panduan Prosedur Izin Tinggal di Indonesia"}
        </h1>
        <p className="text-lg text-muted-foreground">
          {language === "ar"
            ? "شرح مبسّط ومفصّل لأنواع الإقامات، الشروط، الجهات المعنية، وخطوات استخراج وتجديد الإقامة"
            : "Penjelasan sederhana dan rinci tentang jenis izin tinggal, persyaratan, otoritas terkait, dan langkah-langkah untuk mendapatkan dan memperpanjang izin tinggal"}
        </p>
      </div>

      {/* Important Notice */}
      <Card className="mb-8 border-amber-200 bg-amber-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-800">
            <AlertCircle className="h-5 w-5" />
            {language === "ar" ? "تنبيه مهم" : "Pemberitahuan Penting"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-amber-700">
            {language === "ar"
              ? "يُنصح بمراجعة السفارة الإندونيسية أو القنصلية في بلدكم للحصول على أحدث المعلومات والمتطلبات قبل التقديم."
              : "Disarankan untuk menghubungi Kedutaan Besar atau Konsulat Indonesia di negara Anda untuk mendapatkan informasi dan persyaratan terbaru sebelum mengajukan permohonan."}
          </p>
        </CardContent>
      </Card>

      {/* Residence Types */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {residenceTypes.map((type, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                {type.title}
              </CardTitle>
              <CardDescription>{type.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{language === "ar" ? "المدة:" : "Durasi:"}</span>
                  <span>{type.duration}</span>
                </div>

                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    {language === "ar" ? "المتطلبات:" : "Persyaratan:"}
                  </h4>
                  <ul className="text-sm space-y-1">
                    {type.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <PDFViewer
                    title={type.title}
                    pdfUrl={type.pdfUrl}
                    triggerText={language === "ar" ? "عرض الدليل التفصيلي" : "Lihat Panduan Detail"}
                    description={
                      language === "ar"
                        ? "دليل شامل يتضمن جميع الخطوات والمتطلبات والنماذج المطلوبة"
                        : "Panduan lengkap yang mencakup semua langkah, persyaratan, dan formulir yang diperlukan"
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Resources */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>{language === "ar" ? "موارد إضافية" : "Sumber Daya Tambahan"}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <PDFViewer
              title={language === "ar" ? "نماذج طلبات الإقامة" : "Formulir Permohonan Izin Tinggal"}
              pdfUrl="/placeholder.pdf"
              triggerText={language === "ar" ? "تحميل النماذج" : "Download Formulir"}
              description={
                language === "ar"
                  ? "جميع النماذج المطلوبة لطلبات الإقامة المختلفة"
                  : "Semua formulir yang diperlukan untuk berbagai jenis permohonan izin tinggal"
              }
            />

            <PDFViewer
              title={language === "ar" ? "قائمة المكاتب والعناوين" : "Daftar Kantor dan Alamat"}
              pdfUrl="/placeholder.pdf"
              triggerText={language === "ar" ? "عرض العناوين" : "Lihat Alamat"}
              description={
                language === "ar"
                  ? "عناوين وأرقام هواتف المكاتب المختصة بشؤون الإقامة"
                  : "Alamat dan nomor telepon kantor yang menangani urusan izin tinggal"
              }
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

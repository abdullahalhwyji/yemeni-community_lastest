"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Shield, Plane, MapPin, GraduationCap } from "lucide-react"
import { PDFViewer } from "@/components/pdf-viewer"

export function IndonesiaGuides() {
  const { language } = useLanguage()

  const guides = [
    {
      title: language === "ar" ? "دليل استخراج جواز سفر جديد" : "Panduan Pengurusan Paspor Baru",
      description:
        language === "ar"
          ? "يوضح هذا الدليل الإجراءات اللازمة للمواطنين اليمنيين في إندونيسيا لاستخراج جواز سفر جديد. تبدأ العملية بتجهيز المستندات المطلوبة وإرسالها إلى السفارة اليمنية في جاكرتا، ثم إلى السفارة في ماليزيا. كما يحدد الدليل رسوم الإصدار المختلفة حسب حالة المتقدم ويشرح طريقة تحويل المبلغ لبدء المعاملة"
          : "Panduan ini menjelaskan prosedur yang diperlukan bagi warga negara Yaman di Indonesia untuk mengurus paspor baru. Proses dimulai dengan menyiapkan dokumen yang diperlukan dan mengirimkannya ke Kedutaan Yaman di Jakarta, kemudian ke Kedutaan di Malaysia. Panduan ini juga menentukan biaya penerbitan yang berbeda berdasarkan status pemohon dan menjelaskan cara mentransfer jumlah untuk memulai transaksi.",
      icon: <FileText className="h-8 w-8" />,
      pdfUrl: "https://drive.google.com/file/d/1_jejQVBXG2Nr4H_7vry-0829OoPIN87u/preview",
      buttonText: language === "ar" ? "عرض دليل جواز السفر" : "Lihat Panduan Paspor",
    },
    {
      title: language === "ar" ? "دليل التأمين الصحي الحكومي (BPJS)" : "Panduan Asuransi Kesehatan Pemerintah (BPJS)",
      description:
        language === "ar"
          ? "يقدم هذا الدليل شرحًا شاملاً لنظام التأمين الصحي الحكومي الإندونيسي (BPJS) للأجانب. يوضح الدليل درجات التأمين المتاحة مع رسومها الشهرية، الرعاية الصحية التي يغطيها، إجراءات التسجيل، عملية الدفع، ومراحل استخدام التأمين من العيادات الأولية إلى المستشفيات المتخصصة"
          : "Panduan ini memberikan penjelasan komprehensif tentang sistem asuransi kesehatan pemerintah Indonesia (BPJS) untuk warga asing. Panduan ini menjelaskan tingkat asuransi yang tersedia dengan biaya bulanannya, perawatan kesehatan yang dicakup, prosedur pendaftaran, proses pembayaran, dan tahapan penggunaan asuransi dari klinik primer hingga rumah sakit khusus.",
      icon: <Shield className="h-8 w-8" />,
      pdfUrl: "https://drive.google.com/file/d/17N8LXInqzkj29gUYQ-OjNcf-_snKKdP1/preview",
      buttonText: language === "ar" ? "عرض دليل BPJS" : "Lihat Panduan BPJS",
    },
    {
      title:
        language === "ar"
          ? "دليل مطار جاكرتا الدولي (سوكارنو-هاتا)"
          : "Panduan Bandara Internasional Jakarta (Soekarno-Hatta)",
      description:
        language === "ar"
          ? "يعد هذا الدليل مرجعًا للمسافرين عبر مطار جاكرتا الدولي. يغطي معلومات هامة قبل السفر كإعداد الوثائق وأنظمة الأمتعة، ويقدم لمحة عن أقسام المطار ومرافقه. ويوضح إجراءات الوصول والمغادرة، بالإضافة إلى خيارات المواصلات من وإلى المطار، بما في ذلك القطارات، الحافلات، وتطبيقات سيارات الأجرة"
          : "Panduan ini merupakan referensi bagi para pelancong melalui Bandara Internasional Jakarta. Mencakup informasi penting sebelum bepergian seperti persiapan dokumen dan sistem bagasi, serta memberikan gambaran tentang bagian-bagian bandara dan fasilitasnya. Menjelaskan prosedur kedatangan dan keberangkatan, serta pilihan transportasi dari dan ke bandara, termasuk kereta api, bus, dan aplikasi taksi.",
      icon: <Plane className="h-8 w-8" />,
      pdfUrl: "https://drive.google.com/file/d/1HOovHvshy8oM4HlLQ6OwO4lxerqAA3G5/preview",
      buttonText: language === "ar" ? "عرض دليل المطار" : "Lihat Panduan Bandara",
    },
    {
      title: language === "ar" ? "الدليل السياحي في إندونيسيا" : "Panduan Wisata di Indonesia",
      description:
        language === "ar"
          ? "يقدم هذا الدليل معلومات للزوار في أشهر الوجهات الإندونيسية: جاكرتا، بونشاك، باندونج، وبالي. يستهل بمعلومات أساسية عن التأشيرات، اللغة، والعملة. ثم يستعرض أبرز الأماكن السياحية، مراكز التسوق، والمطاعم العربية في كل مدينة، مع توفير ساعات العمل لتسهيل التخطيط للرحلة"
          : "Panduan ini memberikan informasi bagi pengunjung di destinasi Indonesia yang paling populer: Jakarta, Puncak, Bandung, dan Bali. Dimulai dengan informasi dasar tentang visa, bahasa, dan mata uang. Kemudian mengulas tempat-tempat wisata utama, pusat perbelanjaan, dan restoran Arab di setiap kota, dengan menyediakan jam operasional untuk memudahkan perencanaan perjalanan.",
      icon: <MapPin className="h-8 w-8" />,
      pdfUrl: "https://drive.google.com/file/d/1MXPaYJAo5wU_PfIbP1bIfwo_sExmv0Fq/preview",
      buttonText: language === "ar" ? "عرض دليل السياحة" : "Lihat Panduan Wisata",
    },
    {
      title:
        language === "ar"
          ? "دليل تعميد الشهائد المدرسية والجامعية"
          : "Panduan Legalisasi Ijazah Sekolah dan Universitas",
      description:
        language === "ar"
          ? "يشرح هذا الدليل خطوات تصديق الشهادات التعليمية في إندونيسيا للاستخدام خارج البلاد. يوضح الفرق بين التصديق العادي (Legalisasi) والأبوستيل (Apostille). كما يفصل آلية الحصول على التصديق عبر وزارة التعليم، وزارة العدل، وزارة الخارجية، وانتهاءً بالسفارة اليمنية"
          : "Panduan ini menjelaskan langkah-langkah legalisasi ijazah pendidikan di Indonesia untuk digunakan di luar negeri. Menjelaskan perbedaan antara legalisasi biasa dan Apostille. Juga merinci mekanisme memperoleh legalisasi melalui Kementerian Pendidikan, Kementerian Hukum, Kementerian Luar Negeri, dan berakhir di Kedutaan Yaman.",
      icon: <GraduationCap className="h-8 w-8" />,
      pdfUrl: "https://drive.google.com/file/d/1-N7dm_aRojKvzqMYWvVR2TdLfNRkfDgE/preview",
      buttonText: language === "ar" ? "عرض دليل الشهادات" : "Lihat Panduan Ijazah",
    },
  ]

  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">
          {language === "ar" ? "دليل إندونيسيا الشامل" : "Panduan Lengkap Indonesia"}
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {language === "ar"
            ? "مجموعة شاملة من الأدلة والمعلومات المفيدة للجالية اليمنية في إندونيسيا"
            : "Kumpulan panduan dan informasi lengkap yang berguna bagi komunitas Yaman di Indonesia"}
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide, index) => (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader>
              <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit text-primary">{guide.icon}</div>
              <CardTitle className="text-xl">{guide.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <CardDescription className="flex-1 mb-6 text-sm leading-relaxed">{guide.description}</CardDescription>
              <PDFViewer
                title={guide.title}
                pdfUrl={guide.pdfUrl}
                triggerText={guide.buttonText}
                description={guide.description}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

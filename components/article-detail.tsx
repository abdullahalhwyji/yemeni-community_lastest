"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User, Clock, ChevronLeft } from "lucide-react"
import { useMemo } from "react"

interface ArticleDetailProps {
  id: string
}

export function ArticleDetail({ id }: ArticleDetailProps) {
  const { language } = useLanguage()

  const articles = useMemo(() => {
    return {
      "1": {
        title:
          language === "ar"
            ? "تجربة الطلاب اليمنيين في الجامعات الإندونيسية"
            : "Pengalaman Mahasiswa Yaman di Universitas Indonesia",
        content:
          language === "ar"
            ? `
            <p>تعتبر إندونيسيا وجهة تعليمية مهمة للطلاب اليمنيين الساعين للحصول على تعليم عالي الجودة في بيئة أكاديمية متقدمة ومتنوعة. هذه التجربة التعليمية تمثل رحلة مليئة بالتحديات والفرص التي تساهم في تشكيل شخصية الطالب وتوسيع آفاقه المعرفية.</p>
            
            <p>يواجه الطلاب اليمنيون في بداية رحلتهم التعليمية في إندونيسيا تحديات متعددة، أبرزها التكيف مع البيئة الثقافية الجديدة واللغة الإندونيسية. ومع ذلك، فإن الطبيعة المضيافة للشعب الإندونيسي والتشابه في القيم الإسلامية يسهل عملية الاندماج بشكل كبير.</p>
            
            <p>تتميز الجامعات الإندونيسية بتنوع برامجها الأكاديمية وجودة التعليم المقدم، خاصة في مجالات الطب والهندسة وتكنولوجيا المعلومات والعلوم الإسلامية. كما توفر هذه الجامعات بيئة بحثية متقدمة تمكن الطلاب من تطوير مهاراتهم البحثية والأكاديمية.</p>
            
            <p>من أهم الفوائد التي يحصل عليها الطلاب اليمنيون من دراستهم في إندونيسيا هو التعرض لثقافات متنوعة وتطوير مهارات التواصل متعدد الثقافات، مما يعدهم لسوق العمل العالمي. كما يكتسبون خبرات عملية من خلال برامج التدريب والتعاون مع الشركات المحلية.</p>
            
            <p>تلعب الجالية اليمنية في إندونيسيا دوراً مهماً في دعم الطلاب الجدد من خلال تقديم المشورة والإرشاد، وتنظيم فعاليات ثقافية واجتماعية تساعد في الحفاظ على الهوية اليمنية وتعزيز الروابط بين أفراد الجالية.</p>
            `
            : `
            <p>Indonesia merupakan destinasi pendidikan penting bagi mahasiswa Yaman yang mencari pendidikan berkualitas tinggi dalam lingkungan akademik yang maju dan beragam. Pengalaman pendidikan ini merupakan perjalanan yang penuh dengan tantangan dan peluang yang berkontribusi dalam membentuk kepribadian mahasiswa dan memperluas wawasan mereka.</p>
            
            <p>Mahasiswa Yaman menghadapi berbagai tantangan di awal perjalanan pendidikan mereka di Indonesia, terutama beradaptasi dengan lingkungan budaya baru dan bahasa Indonesia. Namun, sifat ramah masyarakat Indonesia dan kesamaan nilai-nilai Islam sangat memudahkan proses integrasi.</p>
            
            <p>Universitas-universitas Indonesia memiliki keunggulan dalam keragaman program akademik dan kualitas pendidikan yang diberikan, terutama dalam bidang kedokteran, teknik, teknologi informasi, dan ilmu-ilmu Islam. Universitas-universitas ini juga menyediakan lingkungan penelitian yang maju yang memungkinkan mahasiswa mengembangkan keterampilan penelitian dan akademik mereka.</p>
            
            <p>Salah satu manfaat terpenting yang diperoleh mahasiswa Yaman dari studi mereka di Indonesia adalah paparan terhadap budaya yang beragam dan pengembangan keterampilan komunikasi multikultural, yang mempersiapkan mereka untuk pasar kerja global. Mereka juga memperoleh pengalaman praktis melalui program pelatihan dan kerjasama dengan perusahaan lokal.</p>
            
            <p>Komunitas Yaman di Indonesia memainkan peran penting dalam mendukung mahasiswa baru melalui pemberian nasihat dan bimbingan, serta mengorganisir kegiatan budaya dan sosial yang membantu melestarikan identitas Yaman dan memperkuat ikatan antar anggota komunitas.</p>
            `,
        date: language === "ar" ? "٢٠ مايو ٢٠٢٥" : "20 Mei 2025",
        author: language === "ar" ? "أحمد محمد" : "Ahmad Muhammad",
        category: language === "ar" ? "تعليم" : "Pendidikan",
        readTime: language === "ar" ? "5 دقائق" : "5 menit",
        image: "/placeholder.svg?height=300&width=400&text=Students+Blog",
      },
      "2": {
        title:
          language === "ar"
            ? "الثقافة اليمنية في إندونيسيا: جسر بين الحضارات"
            : "Budaya Yaman di Indonesia: Jembatan Antar Peradaban",
        content:
          language === "ar"
            ? `
            <p>تمثل الثقافة اليمنية في إندونيسيا نموذجاً رائعاً للتفاعل الحضاري والثقافي بين شعبين يتشاركان في كثير من القيم والتقاليد. هذا التفاعل الثقافي لم يكن مجرد انتقال للعادات والتقاليد، بل كان عملية تبادل ثقافي حقيقي أثرى كلا الثقافتين.</p>
            
            <p>يعود تاريخ الوجود اليمني في إندونيسيا إلى قرون عديدة، حيث وصل التجار والدعاة اليمنيون إلى الأرخبيل الإندونيسي حاملين معهم ثقافتهم وتقاليدهم. هذا التاريخ الطويل خلق جذوراً عميقة للثقافة اليمنية في المجتمع الإندونيسي.</p>
            
            <p>تتجلى الثقافة اليمنية في إندونيسيا في مختلف جوانب الحياة، من الطعام والموسيقى إلى الأدب والفنون. المطبخ اليمني، بنكهاته المميزة وأطباقه التقليدية مثل المندي والزربيان، أصبح جزءاً من التنوع الغذائي في إندونيسيا.</p>
            
            <p>الموسيقى والفنون اليمنية أيضاً وجدت مكانها في المشهد الثقافي الإندونيسي. الأغاني التراثية اليمنية والرقصات الشعبية تُؤدى في المناسبات الثقافية والاجتماعية، مما يساهم في الحفاظ على التراث ونقله للأجيال الجديدة.</p>
            
            <p>هذا التفاعل الثقافي لا يقتصر على الحفاظ على التراث اليمني فحسب، بل يساهم أيضاً في إثراء الثقافة الإندونيسية وتعزيز التنوع الثقافي في البلاد. إنه مثال حي على كيف يمكن للثقافات المختلفة أن تتعايش وتتفاعل بشكل إيجابي.</p>
            `
            : `
            <p>Budaya Yaman di Indonesia merupakan contoh luar biasa dari interaksi peradaban dan budaya antara dua bangsa yang berbagi banyak nilai dan tradisi. Interaksi budaya ini bukan hanya sekedar perpindahan adat dan tradisi, tetapi merupakan proses pertukaran budaya yang sesungguhnya yang memperkaya kedua budaya.</p>
            
            <p>Sejarah keberadaan Yaman di Indonesia sudah berlangsung selama berabad-abad, di mana pedagang dan da'i Yaman tiba di Nusantara membawa serta budaya dan tradisi mereka. Sejarah panjang ini menciptakan akar yang dalam bagi budaya Yaman dalam masyarakat Indonesia.</p>
            
            <p>Budaya Yaman di Indonesia termanifestasi dalam berbagai aspek kehidupan, mulai dari makanan dan musik hingga sastra dan seni. Masakan Yaman, dengan cita rasa khasnya dan hidangan tradisional seperti mandi dan zarbiyan, telah menjadi bagian dari keragaman kuliner di Indonesia.</p>
            
            <p>Musik dan seni Yaman juga menemukan tempatnya dalam lanskap budaya Indonesia. Lagu-lagu tradisional Yaman dan tarian rakyat dipentaskan dalam acara-acara budaya dan sosial, yang berkontribusi dalam melestarikan warisan dan mewariskannya kepada generasi baru.</p>
            
            <p>Interaksi budaya ini tidak hanya terbatas pada pelestarian warisan Yaman, tetapi juga berkontribusi dalam memperkaya budaya Indonesia dan meningkatkan keragaman budaya di negara ini. Ini adalah contoh nyata bagaimana budaya yang berbeda dapat hidup berdampingan dan berinteraksi secara positif.</p>
            `,
        date: language === "ar" ? "١٨ مايو ٢٠٢٥" : "18 Mei 2025",
        author: language === "ar" ? "فاطمة علي" : "Fatimah Ali",
        category: language === "ar" ? "ثقافة" : "Budaya",
        readTime: language === "ar" ? "7 دقائق" : "7 menit",
        image: "/placeholder.svg?height=300&width=400&text=Culture+Blog",
      },
      // Add more articles as needed...
    }
  }, [language])

  const article = articles[id as keyof typeof articles]

  if (!article) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <p className="text-muted-foreground">{language === "ar" ? "المقال غير موجود" : "Artikel tidak ditemukan"}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8 md:py-12">
      <div className="container">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{language === "ar" ? "الرئيسية" : "Beranda"}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/media/articles">{language === "ar" ? "المقالات" : "Artikel"}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/media/articles/${id}`} className="line-clamp-1 max-w-[200px]">
                {article.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <Card className="overflow-hidden border-0 shadow-md">
          {/* Article Header */}
          <div className="bg-muted p-6 md:p-8">
            <div className="mb-4">
              <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-medium">
                {article.category}
              </span>
            </div>
            <h1 className="mb-6 text-2xl font-bold md:text-3xl lg:text-4xl leading-relaxed text-primary">
              {article.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-primary/60">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Image */}
          <div className="relative aspect-video w-full">
            <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-8">
            <div
              className="prose max-w-none lg:prose-lg text-primary"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* Back Button */}
          <div className="border-t p-6 md:p-8">
            <Button asChild variant="outline" className="border-accent text-primary hover:bg-accent hover:text-primary">
              <Link href="/media/articles" className="flex items-center gap-2">
                <ChevronLeft className="h-4 w-4" />
                {language === "ar" ? "العودة إلى المقالات" : "Kembali ke Artikel"}
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect, useMemo } from "react"
import { useLanguage } from "@/components/language-provider"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Search,
  FileText,
  Calendar,
  Users,
  MapPin,
  Phone,
  Building,
  GraduationCap,
  Briefcase,
  Clock,
  X,
} from "lucide-react"
import Link from "next/link"

interface SearchResult {
  id: string
  title: string
  description: string
  url: string
  type: "page" | "news" | "activity" | "guide" | "contact" | "business" | "partner" | "service"
  category?: string
  date?: string
  location?: string
  tags?: string[]
}

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const { language } = useLanguage()
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [recentSearches, setRecentSearches] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  // Load recent searches from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("recentSearches")
    if (saved) {
      setRecentSearches(JSON.parse(saved))
    }
  }, [])

  // Save search to recent searches
  const saveSearch = (searchTerm: string) => {
    if (searchTerm.trim() && !recentSearches.includes(searchTerm)) {
      const updated = [searchTerm, ...recentSearches.slice(0, 4)] // Keep only 5 recent searches
      setRecentSearches(updated)
      localStorage.setItem("recentSearches", JSON.stringify(updated))
    }
  }

  // Clear recent searches
  const clearRecentSearches = () => {
    setRecentSearches([])
    localStorage.removeItem("recentSearches")
  }

  // Comprehensive search data
  const searchData: SearchResult[] = useMemo(
    () => [
      // Main pages
      {
        id: "home",
        title: language === "ar" ? "الصفحة الرئيسية" : "Beranda",
        description:
          language === "ar"
            ? "منصة جامعة وفاعلة تخدم اليمنيين في إندونيسيا، وتدعم تطلعاتهم في المجالات الاجتماعية، الاقتصادية، والتعليمية"
            : "Platform yang menyatukan dan melayani warga Yaman di Indonesia, mendukung aspirasi mereka di bidang sosial, ekonomi, dan pendidikan",
        url: "/",
        type: "page",
        tags: [
          language === "ar" ? "رئيسية" : "beranda",
          language === "ar" ? "جالية" : "komunitas",
          language === "ar" ? "يمن" : "yaman",
          language === "ar" ? "إندونيسيا" : "indonesia",
        ],
      },
      {
        id: "about-community",
        title: language === "ar" ? "عن الجالية" : "Tentang Komunitas",
        description:
          language === "ar"
            ? "تعرف على تاريخ الجالية اليمنية في إندونيسيا، رؤيتنا، رسالتنا، وفريقنا"
            : "Pelajari sejarah Komunitas Yaman di Indonesia, visi, misi, dan tim kami",
        url: "/about/community",
        type: "page",
        tags: [
          language === "ar" ? "تاريخ" : "sejarah",
          language === "ar" ? "رؤية" : "visi",
          language === "ar" ? "رسالة" : "misi",
          language === "ar" ? "فريق" : "tim",
        ],
      },
      {
        id: "about-management",
        title: language === "ar" ? "إدارة الجالية" : "Manajemen Komunitas",
        description:
          language === "ar"
            ? "فريق الجالية واللجان التنفيذية المسؤولة عن إدارة الأنشطة والخدمات"
            : "Tim komunitas dan komite eksekutif yang bertanggung jawab mengelola kegiatan dan layanan",
        url: "/about/management",
        type: "page",
        tags: [
          language === "ar" ? "إدارة" : "manajemen",
          language === "ar" ? "لجان" : "komite",
          language === "ar" ? "قيادة" : "kepemimpinan",
          language === "ar" ? "مسؤولين" : "pejabat",
        ],
      },
      {
        id: "about-regulations",
        title: language === "ar" ? "لوائح الجالية التنظيمية" : "Peraturan Komunitas",
        description:
          language === "ar"
            ? "القواعد والأنظمة المعتمدة التي تنظم عمل الجالية وتضمن الشفافية والمشاركة"
            : "Aturan dan peraturan yang mengatur kerja komunitas dan menjamin transparansi dan partisipasi",
        url: "/about/regulations",
        type: "page",
        tags: [
          language === "ar" ? "قوانين" : "hukum",
          language === "ar" ? "لوائح" : "peraturan",
          language === "ar" ? "أنظمة" : "sistem",
          language === "ar" ? "شفافية" : "transparansi",
        ],
      },

      // Business and Work
      {
        id: "business-cluster",
        title: language === "ar" ? "التكتل التجاري" : "Klaster Bisnis",
        description:
          language === "ar"
            ? "دعم وتمكين أصحاب الأعمال اليمنيين في إندونيسيا من خلال الشبكات التجارية"
            : "Mendukung dan memberdayakan pengusaha Yaman di Indonesia melalui jaringan bisnis",
        url: "/our-work",
        type: "business",
        tags: [
          language === "ar" ? "أعمال" : "bisnis",
          language === "ar" ? "تجارة" : "perdagangan",
          language === "ar" ? "استثمار" : "investasi",
          language === "ar" ? "شركات" : "perusahaan",
        ],
      },
      {
        id: "job-opportunities",
        title: language === "ar" ? "فرص العمل" : "Peluang Kerja",
        description:
          language === "ar"
            ? "فرص وظيفية متنوعة للأعضاء في مختلف القطاعات والتخصصات"
            : "Berbagai peluang kerja untuk anggota di berbagai sektor dan spesialisasi",
        url: "/our-work",
        type: "business",
        tags: [
          language === "ar" ? "وظائف" : "pekerjaan",
          language === "ar" ? "توظيف" : "rekrutmen",
          language === "ar" ? "مهن" : "profesi",
          language === "ar" ? "كاريير" : "karir",
        ],
      },

      // News items (expanded)
      {
        id: "news-1",
        title: language === "ar" ? "افتتاح مقر جديد للجالية في جاكرتا" : "Pembukaan Kantor Baru Komunitas di Jakarta",
        description:
          language === "ar"
            ? "تم افتتاح المقر الجديد للجالية اليمنية في جاكرتا بحضور السفير اليمني والمسؤولين الإندونيسيين"
            : "Kantor baru Komunitas Yaman di Jakarta diresmikan dengan kehadiran Duta Besar Yaman dan pejabat Indonesia",
        url: "/news/1",
        type: "news",
        category: language === "ar" ? "أخبار" : "Berita",
        date: language === "ar" ? "١٠ مايو ٢٠٢٥" : "10 Mei 2025",
        location: language === "ar" ? "جاكرتا" : "Jakarta",
        tags: [
          language === "ar" ? "افتتاح" : "pembukaan",
          language === "ar" ? "مقر" : "kantor",
          language === "ar" ? "سفير" : "duta besar",
        ],
      },
      {
        id: "news-2",
        title: language === "ar" ? "ورشة عمل حول فرص الاستثمار" : "Workshop tentang Peluang Investasi",
        description:
          language === "ar"
            ? "نظمت الجالية ورشة عمل حول فرص الاستثمار في إندونيسيا للمستثمرين اليمنيين مع خبراء اقتصاديين"
            : "Komunitas menyelenggarakan workshop tentang peluang investasi di Indonesia untuk investor Yaman dengan ahli ekonomi",
        url: "/news/2",
        type: "news",
        category: language === "ar" ? "أخبار" : "Berita",
        date: language === "ar" ? "٥ مايو ٢٠٢٥" : "5 Mei 2025",
        tags: [
          language === "ar" ? "ورشة" : "workshop",
          language === "ar" ? "استثمار" : "investasi",
          language === "ar" ? "اقتصاد" : "ekonomi",
        ],
      },
      {
        id: "news-3",
        title:
          language === "ar"
            ? "توقيع اتفاقية تعاون مع جامعة إندونيسية"
            : "Penandatanganan Kerjasama dengan Universitas Indonesia",
        description:
          language === "ar"
            ? "وقعت الجالية اتفاقية تعاون مع جامعة إندونيسيا لدعم الطلاب اليمنيين وتوفير منح دراسية"
            : "Komunitas menandatangani perjanjian kerjasama dengan Universitas Indonesia untuk mendukung mahasiswa Yaman dan menyediakan beasiswa",
        url: "/news/3",
        type: "news",
        category: language === "ar" ? "أخبار" : "Berita",
        date: language === "ar" ? "١ مايو ٢٠٢٥" : "1 Mei 2025",
        tags: [
          language === "ar" ? "اتفاقية" : "perjanjian",
          language === "ar" ? "جامعة" : "universitas",
          language === "ar" ? "منح" : "beasiswa",
          language === "ar" ? "طلاب" : "mahasiswa",
        ],
      },

      // Activities (expanded)
      {
        id: "activity-1",
        title: language === "ar" ? "المؤتمر السنوي للأعمال" : "Konferensi Bisnis Tahunan",
        description:
          language === "ar"
            ? "مؤتمر يجمع رجال الأعمال اليمنيين والإندونيسيين لمناقشة فرص التعاون والشراكات التجارية"
            : "Konferensi yang menyatukan pengusaha Yaman dan Indonesia untuk membahas peluang kerjasama dan kemitraan bisnis",
        url: "/activities/1",
        type: "activity",
        category: language === "ar" ? "أعمال" : "Bisnis",
        date: language === "ar" ? "٢٠ يونيو ٢٠٢٥" : "20 Juni 2025",
        location: language === "ar" ? "فندق موليا، جاكرتا" : "Hotel Mulia, Jakarta",
        tags: [
          language === "ar" ? "مؤتمر" : "konferensi",
          language === "ar" ? "أعمال" : "bisnis",
          language === "ar" ? "شراكة" : "kemitraan",
        ],
      },
      {
        id: "activity-2",
        title: language === "ar" ? "احتفال العيد الوطني" : "Perayaan Hari Nasional",
        description:
          language === "ar"
            ? "احتفال بمناسبة العيد الوطني اليمني مع عروض ثقافية وأطعمة تقليدية وفعاليات للعائلات"
            : "Perayaan Hari Nasional Yaman dengan pertunjukan budaya, makanan tradisional, dan kegiatan keluarga",
        url: "/activities/2",
        type: "activity",
        category: language === "ar" ? "ثقافي" : "Budaya",
        date: language === "ar" ? "٢٢ مايو ٢٠٢٥" : "22 Mei 2025",
        location: language === "ar" ? "مركز الثقافة اليمني، جاكرتا" : "Pusat Budaya Yaman, Jakarta",
        tags: [
          language === "ar" ? "احتفال" : "perayaan",
          language === "ar" ? "ثقافة" : "budaya",
          language === "ar" ? "تراث" : "warisan",
          language === "ar" ? "عائلة" : "keluarga",
        ],
      },
      {
        id: "activity-3",
        title: language === "ar" ? "يوم التوجيه للطلاب الجدد" : "Hari Orientasi untuk Mahasiswa Baru",
        description:
          language === "ar"
            ? "يوم توجيهي للطلاب اليمنيين الجدد في الجامعات الإندونيسية مع جلسات إرشادية ولقاءات تعارف"
            : "Hari orientasi untuk mahasiswa Yaman baru di universitas Indonesia dengan sesi bimbingan dan pertemuan perkenalan",
        url: "/activities/3",
        type: "activity",
        category: language === "ar" ? "تعليمي" : "Pendidikan",
        date: language === "ar" ? "١٥ سبتمبر ٢٠٢٥" : "15 September 2025",
        location: language === "ar" ? "جامعة إندونيسيا، ديبوك" : "Universitas Indonesia, Depok",
        tags: [
          language === "ar" ? "طلاب" : "mahasiswa",
          language === "ar" ? "توجيه" : "orientasi",
          language === "ar" ? "تعليم" : "pendidikan",
          language === "ar" ? "جامعة" : "universitas",
        ],
      },

      // Indonesia Guide sections (expanded)
      {
        id: "guide-residence",
        title: language === "ar" ? "إجراءات الإقامة" : "Prosedur Izin Tinggal",
        description:
          language === "ar"
            ? "شرح مبسّط ومفصّل لأنواع الإقامات، الشروط، الجهات المعنية، وخطوات استخراج وتجديد الإقامة في إندونيسيا"
            : "Penjelasan sederhana dan rinci tentang jenis izin tinggal, persyaratan, otoritas terkait, dan langkah-langkah untuk mendapatkan dan memperpanjang izin tinggal di Indonesia",
        url: "/indonesia-guide/residence",
        type: "guide",
        category: language === "ar" ? "دليل" : "Panduan",
        tags: [
          language === "ar" ? "إقامة" : "izin tinggal",
          language === "ar" ? "فيزا" : "visa",
          language === "ar" ? "إجراءات" : "prosedur",
          language === "ar" ? "قانوني" : "legal",
        ],
      },
      {
        id: "guide-housing",
        title: language === "ar" ? "دليل السكن" : "Panduan Perumahan",
        description:
          language === "ar"
            ? "معلومات شاملة حول خيارات السكن المختلفة، نصائح للبحث والتأجير، والمناطق المناسبة للعائلات"
            : "Informasi komprehensif tentang berbagai pilihan perumahan, tips untuk mencari dan menyewa, dan area yang cocok untuk keluarga",
        url: "/indonesia-guide/housing",
        type: "guide",
        category: language === "ar" ? "دليل" : "Panduan",
        tags: [
          language === "ar" ? "سكن" : "perumahan",
          language === "ar" ? "إيجار" : "sewa",
          language === "ar" ? "شقة" : "apartemen",
          language === "ar" ? "منزل" : "rumah",
        ],
      },
      {
        id: "guide-universities",
        title: language === "ar" ? "الجامعات والتعليم" : "Universitas dan Pendidikan",
        description:
          language === "ar"
            ? "دليل شامل للجامعات والمعاهد، آلية التسجيل، التخصصات المتوفرة، المنح الدراسية، وتكاليف التعليم"
            : "Panduan komprehensif untuk universitas dan institut, mekanisme pendaftaran, spesialisasi yang tersedia, beasiswa, dan biaya pendidikan",
        url: "/indonesia-guide/universities",
        type: "guide",
        category: language === "ar" ? "دليل" : "Panduan",
        tags: [
          language === "ar" ? "جامعات" : "universitas",
          language === "ar" ? "تعليم" : "pendidikan",
          language === "ar" ? "منح" : "beasiswa",
          language === "ar" ? "دراسة" : "studi",
        ],
      },
      {
        id: "guide-emergency",
        title: language === "ar" ? "خدمات الطوارئ" : "Layanan Darurat",
        description:
          language === "ar"
            ? "أرقام الطوارئ الأساسية، خدمات الإسعاف، الشرطة، الدفاع المدني، وخطوط المساعدة الخاصة بالسفارة"
            : "Nomor darurat dasar, layanan ambulans, polisi, pertahanan sipil, dan hotline bantuan khusus kedutaan",
        url: "/indonesia-guide/emergency",
        type: "guide",
        category: language === "ar" ? "دليل" : "Panduan",
        tags: [
          language === "ar" ? "طوارئ" : "darurat",
          language === "ar" ? "إسعاف" : "ambulans",
          language === "ar" ? "شرطة" : "polisi",
          language === "ar" ? "مساعدة" : "bantuan",
        ],
      },

      // Partners
      {
        id: "partner-embassy",
        title:
          language === "ar" ? "سفارة الجمهورية اليمنية في إندونيسيا" : "Kedutaan Besar Republik Yaman di Indonesia",
        description:
          language === "ar"
            ? "شريك رسمي في التمثيل والدعم وتيسير الإجراءات الرسمية للمواطنين اليمنيين"
            : "Mitra resmi dalam representasi, dukungan, dan fasilitasi prosedur resmi untuk warga negara Yaman",
        url: "/partners",
        type: "partner",
        tags: [
          language === "ar" ? "سفارة" : "kedutaan",
          language === "ar" ? "دبلوماسي" : "diplomatik",
          language === "ar" ? "رسمي" : "resmi",
        ],
      },
      {
        id: "partner-chamber",
        title: language === "ar" ? "غرفة التجارة اليمنية الإندونيسية" : "Kamar Dagang Yaman-Indonesia",
        description:
          language === "ar"
            ? "تعزيز العلاقات التجارية بين اليمن وإندونيسيا ودعم المستثمرين والتجار"
            : "Mempromosikan hubungan perdagangan antara Yaman dan Indonesia dan mendukung investor dan pedagang",
        url: "/partners",
        type: "partner",
        tags: [
          language === "ar" ? "غرفة تجارة" : "kamar dagang",
          language === "ar" ? "تجارة" : "perdagangan",
          language === "ar" ? "اقتصاد" : "ekonomi",
        ],
      },

      // Services
      {
        id: "service-membership",
        title: language === "ar" ? "خدمات العضوية" : "Layanan Keanggotaan",
        description:
          language === "ar"
            ? "التسجيل في الجالية، الحصول على بطاقة العضوية، والاستفادة من الخدمات المتاحة"
            : "Pendaftaran komunitas, mendapatkan kartu keanggotaan, dan memanfaatkan layanan yang tersedia",
        url: "/register",
        type: "service",
        tags: [
          language === "ar" ? "عضوية" : "keanggotaan",
          language === "ar" ? "تسجيل" : "pendaftaran",
          language === "ar" ? "خدمات" : "layanan",
        ],
      },
      {
        id: "service-legal",
        title: language === "ar" ? "الاستشارات القانونية" : "Konsultasi Hukum",
        description:
          language === "ar"
            ? "مساعدة قانونية ومشورة في الأمور المتعلقة بالإقامة والعمل والاستثمار"
            : "Bantuan hukum dan nasihat dalam hal yang berkaitan dengan izin tinggal, kerja, dan investasi",
        url: "/contact",
        type: "service",
        tags: [
          language === "ar" ? "قانوني" : "hukum",
          language === "ar" ? "استشارة" : "konsultasi",
          language === "ar" ? "مساعدة" : "bantuan",
        ],
      },

      // Contact information (expanded)
      {
        id: "contact-phone",
        title: language === "ar" ? "رقم هاتف الجالية" : "Nomor Telepon Komunitas",
        description:
          "+6282211112217 - " + (language === "ar" ? "للاستفسارات والمساعدة" : "untuk pertanyaan dan bantuan"),
        url: "/contact",
        type: "contact",
        tags: [language === "ar" ? "هاتف" : "telepon", language === "ar" ? "اتصال" : "kontak"],
      },
      {
        id: "contact-email",
        title: language === "ar" ? "البريد الإلكتروني الرسمي" : "Email Resmi",
        description:
          "komunitasyaman@gmail.com - " + (language === "ar" ? "للمراسلات الرسمية" : "untuk korespondensi resmi"),
        url: "/contact",
        type: "contact",
        tags: [language === "ar" ? "إيميل" : "email", language === "ar" ? "مراسلة" : "korespondensi"],
      },
      {
        id: "contact-address",
        title: language === "ar" ? "العنوان الرسمي" : "Alamat Resmi",
        description:
          (language === "ar"
            ? "جاكرتا، إندونيسيا - مقر الجالية الرئيسي"
            : "Jakarta, Indonesia - kantor pusat komunitas") +
          " - " +
          (language === "ar" ? "مفتوح للزيارات" : "terbuka untuk kunjungan"),
        url: "/contact",
        type: "contact",
        location: language === "ar" ? "جاكرتا" : "Jakarta",
        tags: [language === "ar" ? "عنوان" : "alamat", language === "ar" ? "مقر" : "kantor"],
      },
    ],
    [language],
  )

  // Search categories
  const categories = [
    { id: "all", label: language === "ar" ? "الكل" : "Semua" },
    { id: "page", label: language === "ar" ? "صفحات" : "Halaman" },
    { id: "news", label: language === "ar" ? "أخبار" : "Berita" },
    { id: "activity", label: language === "ar" ? "أنشطة" : "Kegiatan" },
    { id: "guide", label: language === "ar" ? "أدلة" : "Panduan" },
    { id: "business", label: language === "ar" ? "أعمال" : "Bisnis" },
    { id: "contact", label: language === "ar" ? "اتصال" : "Kontak" },
  ]

  // Enhanced search function
  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    const searchTerm = query.toLowerCase()
    let filteredResults = searchData.filter((item) => {
      const matchesQuery =
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        (item.category && item.category.toLowerCase().includes(searchTerm)) ||
        (item.location && item.location.toLowerCase().includes(searchTerm)) ||
        (item.tags && item.tags.some((tag) => tag.toLowerCase().includes(searchTerm)))

      const matchesCategory = selectedCategory === "all" || item.type === selectedCategory

      return matchesQuery && matchesCategory
    })

    // Sort results by relevance
    filteredResults = filteredResults.sort((a, b) => {
      const aTitle = a.title.toLowerCase().includes(searchTerm) ? 2 : 0
      const bTitle = b.title.toLowerCase().includes(searchTerm) ? 2 : 0
      const aDesc = a.description.toLowerCase().includes(searchTerm) ? 1 : 0
      const bDesc = b.description.toLowerCase().includes(searchTerm) ? 1 : 0

      return bTitle + bDesc - (aTitle + aDesc)
    })

    setResults(filteredResults.slice(0, 12)) // Increased to 12 results
  }, [query, searchData, selectedCategory])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "page":
        return <FileText className="h-4 w-4" />
      case "news":
        return <Calendar className="h-4 w-4" />
      case "activity":
        return <Users className="h-4 w-4" />
      case "guide":
        return <MapPin className="h-4 w-4" />
      case "contact":
        return <Phone className="h-4 w-4" />
      case "business":
        return <Briefcase className="h-4 w-4" />
      case "partner":
        return <Building className="h-4 w-4" />
      case "service":
        return <GraduationCap className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "page":
        return language === "ar" ? "صفحة" : "Halaman"
      case "news":
        return language === "ar" ? "خبر" : "Berita"
      case "activity":
        return language === "ar" ? "نشاط" : "Kegiatan"
      case "guide":
        return language === "ar" ? "دليل" : "Panduan"
      case "contact":
        return language === "ar" ? "اتصال" : "Kontak"
      case "business":
        return language === "ar" ? "أعمال" : "Bisnis"
      case "partner":
        return language === "ar" ? "شريك" : "Mitra"
      case "service":
        return language === "ar" ? "خدمة" : "Layanan"
      default:
        return type
    }
  }

  const handleResultClick = (url: string) => {
    saveSearch(query)
    onClose()
    setQuery("")
    setResults([])
  }

  const handleRecentSearchClick = (searchTerm: string) => {
    setQuery(searchTerm)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-4xl max-h-[90vh] overflow-hidden"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.preventDefault()
            onClose()
          }
        }}
      >
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            {language === "ar" ? "البحث في الموقع" : "Cari di Situs"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={language === "ar" ? "ابحث عن أي شيء..." : "Cari apa saja..."}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-10"
              autoFocus
            />
            {query && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuery("")}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="text-xs"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          {query && (
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>
                {results.length > 0
                  ? `${results.length} ${language === "ar" ? "نتيجة" : "hasil"}`
                  : language === "ar"
                    ? "لا توجد نتائج"
                    : "Tidak ada hasil"}
              </span>
              {selectedCategory !== "all" && (
                <Button variant="ghost" size="sm" onClick={() => setSelectedCategory("all")} className="text-xs">
                  {language === "ar" ? "إظهار الكل" : "Tampilkan semua"}
                </Button>
              )}
            </div>
          )}

          {/* Search Results */}
          <div className="h-[50vh] overflow-y-auto space-y-2 pr-1">
            {results.map((result) => (
              <Link
                key={result.id}
                href={result.url}
                onClick={() => handleResultClick(result.url)}
                className="block p-3 rounded-lg border hover:bg-accent transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-muted-foreground">{getTypeIcon(result.type)}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-medium text-sm truncate">{result.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {getTypeLabel(result.type)}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-1">{result.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      {result.date && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {result.date}
                        </span>
                      )}
                      {result.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {result.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Recent Searches */}
          {!query && recentSearches.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">
                  {language === "ar" ? "عمليات البحث الأخيرة" : "Pencarian Terbaru"}
                </h4>
                <Button variant="ghost" size="sm" onClick={clearRecentSearches} className="text-xs">
                  {language === "ar" ? "مسح" : "Hapus"}
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleRecentSearchClick(search)}
                    className="text-xs"
                  >
                    <Clock className="h-3 w-3 mr-1" />
                    {search}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {!query && recentSearches.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="mb-2">{language === "ar" ? "ابدأ بكتابة للبحث..." : "Mulai mengetik untuk mencari..."}</p>
              <p className="text-xs">
                {language === "ar"
                  ? "يمكنك البحث عن الصفحات، الأخبار، الأنشطة، الأدلة، وأكثر"
                  : "Anda dapat mencari halaman, berita, kegiatan, panduan, dan lainnya"}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

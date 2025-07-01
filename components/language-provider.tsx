"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "ar" | "id"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translations
const translations = {
  ar: {
    // Navigation
    home: "الرئيسية",
    about: "من نحن",
    our_work: "أعمالنا",
    indonesia_guide: "دليل إندونيسيا",
    partners: "شركاؤنا",
    contact: "تواصل معنا",
    register: "إنشاء عضوية",
    language_switch: "Bahasa Indonesia",

    // Homepage
    years_established: "سنوات التأسيس",
    partner_companies: "الشركات المتعاونة",
    events_held: "الفعاليات المنفذة",
    registered_members: "الأعضاء المسجلين",
    latest_news: "آخر الأخبار",
    view_all: "عرض الكل",
    featured_activities: "الأنشطة المميزة",
    subscribe: "اشترك",
    email_placeholder: "البريد الإلكتروني",
    community_guide: "دليل الجالية في إندونيسيا",
    residence_procedures: "إجراءات الإقامة",
    housing_services: "خدمات السكن",
    emergency_support: "الطوارئ والدعم",
    business_networks: "التكتلات التجارية",

    // About
    about_community: "عن الجالية",
    community_history: "تاريخ الجالية",
    our_vision: "رؤيتنا",
    our_mission: "رسالتنا",
    community_management: "إدارة الجالية",
    team: "فريق الجالية",
    executive_committees: "اللجان التنفيذية",
    regulations: "اللوائح التنظيمية للجالية",
    membership_rules: "قواعد عضوية الجالية",
    event_organization: "تنظيم الفعاليات",
    election_procedures: "إجراءات الانتخابات",
    obligations: "التزامات الإدارة والأعضاء",

    // Our Work
    business_cluster: "التكتل التجاري",
    business_directory: "دليل الأعمال",
    job_opportunities: "فرص العمل",
    networking_events: "فعاليات التواصل",
    national_occasions: "المناسبات الوطنية",
    upcoming_celebrations: "الاحتفالات القادمة",
    past_celebrations: "الاحتفالات السابقة",
    events_activities: "الفعاليات والأنشطة",
    upcoming_events: "الفعاليات القادمة",
    past_events: "الفعاليات السابقة",

    // Indonesia Guide
    residence_procedures: "إجراءات الإقامة",
    housing_guide: "دليل السكن",
    universities_education: "الجامعات والتعليم",
    emergency_services: "خدمات الطوارئ",
    insurance: "التأمينات",
    travel_tips: "نصائح السفر والتنقل",
    culture_customs: "الثقافة والعادات",
    work_systems: "أنظمة العمل",
    tourist_places: "الأماكن السياحية",

    // Partners
    strategic_partners: "الشركاء الاستراتيجيون",
    yemen_embassy: "سفارة الجمهورية اليمنية في إندونيسيا",
    business_clusters: "التكتلات التجارية والمؤسسات الاقتصادية",
    research_centers: "المراكز البحثية والمؤسسات التعليمية",
    civil_organizations: "منظمات المجتمع المدني",
    executive_partners: "الشركاء التنفيذيون",
    businessmen_traders: "رجال الأعمال والتجار اليمنيون",
    universities: "بعض الجامعات والمؤسسات التعليمية",
    student_unions: "اتحادات الطلاب اليمنيين",
    youth_initiatives: "مبادرات شبابية ومنصات تطوعية",

    // Contact
    contact_us: "تواصل معنا",
    contact_welcome: "يسرنا في الجالية اليمنية في إندونيسيا أن نكون على تواصل دائم",
    official_address: "العنوان الرسمي للجالية",
    official_hours: "أوقات الدوام الرسمية",
    official_email: "البريد الإلكتروني الرسمي",
    community_phone: "رقم هاتف الجالية",
    direct_contact: "نموذج التواصل المباشر",
    full_name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    message_title: "عنوان الرسالة",
    message: "نص الرسالة",
    send: "إرسال",

    // Membership
    new_membership: "إنشاء عضوية جديدة",
    membership_info: "حرصًا على تسهيل انضمام أفراد الجالية إلى المنصة الرقمية",
    register_now: "سجل الآن",

    // Footer
    all_rights_reserved: "جميع الحقوق محفوظة",
    follow_us: "تابعنا",
    quick_links: "روابط سريعة",
  },
  id: {
    // Navigation
    home: "Beranda",
    about: "Tentang Kami",
    our_work: "Kegiatan Kami",
    indonesia_guide: "Panduan Indonesia",
    partners: "Mitra Kami",
    contact: "Hubungi Kami",
    register: "Daftar Keanggotaan",
    language_switch: "اللغة العربية",

    // Homepage
    years_established: "Tahun Berdiri",
    partner_companies: "Perusahaan Mitra",
    events_held: "Acara Terlaksana",
    registered_members: "Anggota Terdaftar",
    latest_news: "Berita Terbaru",
    view_all: "Lihat Semua",
    featured_activities: "Kegiatan Unggulan",
    subscribe: "Berlangganan",
    email_placeholder: "Email Anda",
    community_guide: "Panduan Komunitas di Indonesia",
    residence_procedures: "Prosedur Izin Tinggal",
    housing_services: "Layanan Perumahan",
    emergency_support: "Dukungan Darurat",
    business_networks: "Jaringan Bisnis",

    // About
    about_community: "Tentang Komunitas",
    community_history: "Sejarah Komunitas",
    our_vision: "Visi Kami",
    our_mission: "Misi Kami",
    community_management: "Manajemen Komunitas",
    team: "Tim Komunitas",
    executive_committees: "Komite Eksekutif",
    regulations: "Peraturan Komunitas",
    membership_rules: "Aturan Keanggotaan",
    event_organization: "Organisasi Acara",
    election_procedures: "Prosedur Pemilihan",
    obligations: "Kewajiban Manajemen dan Anggota",

    // Our Work
    business_cluster: "Klaster Bisnis",
    business_directory: "Direktori Bisnis",
    job_opportunities: "Peluang Kerja",
    networking_events: "Acara Jaringan",
    national_occasions: "Acara Nasional",
    upcoming_celebrations: "Perayaan Mendatang",
    past_celebrations: "Perayaan Sebelumnya",
    events_activities: "Acara dan Kegiatan",
    upcoming_events: "Acara Mendatang",
    past_events: "Acara Sebelumnya",

    // Indonesia Guide
    residence_procedures: "Prosedur Izin Tinggal",
    housing_guide: "Panduan Perumahan",
    universities_education: "Universitas dan Pendidikan",
    emergency_services: "Layanan Darurat",
    insurance: "Asuransi",
    travel_tips: "Tips Perjalanan",
    culture_customs: "Budaya dan Adat",
    work_systems: "Sistem Kerja",
    tourist_places: "Tempat Wisata",

    // Partners
    strategic_partners: "Mitra Strategis",
    yemen_embassy: "Kedutaan Besar Republik Yaman di Indonesia",
    business_clusters: "Klaster Bisnis dan Lembaga Ekonomi",
    research_centers: "Pusat Penelitian dan Lembaga Pendidikan",
    civil_organizations: "Organisasi Masyarakat Sipil",
    executive_partners: "Mitra Eksekutif",
    businessmen_traders: "Pengusaha dan Pedagang Yaman",
    universities: "Beberapa Universitas dan Lembaga Pendidikan",
    student_unions: "Persatuan Mahasiswa Yaman",
    youth_initiatives: "Inisiatif Pemuda dan Platform Sukarela",

    // Contact
    contact_us: "Hubungi Kami",
    contact_welcome: "Kami senang dapat berkomunikasi dengan semua anggota komunitas",
    official_address: "Alamat Resmi Komunitas",
    official_hours: "Jam Kerja Resmi",
    official_email: "Email Resmi",
    community_phone: "Nomor Telepon Komunitas",
    direct_contact: "Formulir Kontak Langsung",
    full_name: "Nama Lengkap",
    email: "Email",
    phone: "Nomor Telepon",
    message_title: "Judul Pesan",
    message: "Isi Pesan",
    send: "Kirim",

    // Membership
    new_membership: "Buat Keanggotaan Baru",
    membership_info: "Untuk memudahkan bergabung dengan platform digital komunitas",
    register_now: "Daftar Sekarang",

    // Footer
    all_rights_reserved: "Hak Cipta Dilindungi",
    follow_us: "Ikuti Kami",
    quick_links: "Tautan Cepat",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar")

  // Function to translate text
  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  // Set initial language based on browser settings or localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "ar" || savedLanguage === "id")) {
      setLanguage(savedLanguage)
    } else {
      // Default to Arabic if no preference is found
      setLanguage("ar")
    }
  }, [])

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem("language", language)
    // Set the dir attribute on the html element
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language

    // Apply font to body based on language
    if (typeof document !== "undefined") {
      document.body.className = document.body.className.replace(/font-(arabic|latin)/g, "")
      document.body.classList.add(language === "ar" ? "font-arabic" : "font-latin")
    }
  }, [language])

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

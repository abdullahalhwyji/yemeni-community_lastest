export interface Category {
  id: string
  name: {
    ar: string
    id: string
  }
  description: {
    ar: string
    id: string
  }
  color: string
}

export const categories: Category[] = [
  {
    id: "commercial",
    name: {
      ar: "القطاع التجاري",
      id: "Sektor Komersial",
    },
    description: {
      ar: "أخبار ومقالات حول الأنشطة التجارية والاستثمارية",
      id: "Berita dan artikel tentang kegiatan komersial dan investasi",
    },
    color: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    id: "women",
    name: {
      ar: "قطاع المرأة",
      id: "Sektor Wanita",
    },
    description: {
      ar: "أنشطة وأخبار خاصة بالمرأة اليمنية في إندونيسيا",
      id: "Kegiatan dan berita khusus wanita Yaman di Indonesia",
    },
    color: "bg-rose-50 text-rose-700 border-rose-200",
  },
  {
    id: "scholars",
    name: {
      ar: "قطاع المشايخ والدعاة",
      id: "Sektor Ulama dan Da'i",
    },
    description: {
      ar: "أنشطة وأخبار المشايخ والدعاة اليمنيين في إندونيسيا",
      id: "Kegiatan dan berita ulama dan da'i Yaman di Indonesia",
    },
    color: "bg-green-50 text-green-700 border-green-200",
  },
  {
    id: "academic",
    name: {
      ar: "القطاع الأكاديمي",
      id: "Sektor Akademik",
    },
    description: {
      ar: "أخبار ومقالات حول الأكاديميين والباحثين اليمنيين",
      id: "Berita dan artikel tentang akademisi dan peneliti Yaman",
    },
    color: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    id: "refugees",
    name: {
      ar: "قطاع اللاجئين",
      id: "Sektor Pengungsi",
    },
    description: {
      ar: "أخبار وخدمات خاصة باللاجئين اليمنيين في إندونيسيا",
      id: "Berita dan layanan khusus pengungsi Yaman di Indonesia",
    },
    color: "bg-orange-50 text-orange-700 border-orange-200",
  },
]

export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id)
}

export function getCategoryName(id: string, language: "ar" | "id"): string {
  const category = getCategoryById(id)
  return category ? category.name[language] : id
}

export function getCategoryColor(id: string): string {
  const category = getCategoryById(id)
  return category ? category.color : "bg-gray-50 text-gray-700 border-gray-200"
}

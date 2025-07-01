"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeroSection() {
  const { t, language } = useLanguage()

  // Array of background images with titles
  const backgroundImages = [
    {
      url: "/yemeni-indonesian-gathering.png",
      title: language === "ar" ? "الجالية اليمنية" : "Komunitas Yaman",
    },
    {
      url: "https://alyemenyoon.com/storage/media/2023/06/%D8%A7%D9%84%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D8%A7%D9%84%D8%B1%D8%B6%D9%8A-%D8%B1%D8%A6%D9%8A%D8%B3%D8%A7%D9%8B-%D9%84%D9%84%D8%AC%D8%A7%D9%84%D9%8A%D8%A9-%D8%A7%D9%84%D9%8A%D9%85%D9%86%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A5%D9%86%D8%AF%D9%88%D9%86%D9%8A%D8%B3%D9%8A%D8%A7-1-1024x576.jpg",
      title: language === "ar" ? "التعاون الثقافي" : "Kerjasama Budaya",
    },
    {
      url: "/yemeni-indonesian-cultural-event.png",
      title: language === "ar" ? "الفعاليات الثقافية" : "Acara Budaya",
    },
    {
      url: "/yemeni-indonesian-business.png",
      title: language === "ar" ? "مجتمع الأعمال" : "Komunitas Bisnis",
    },
    {
      url: "/yemeni-indonesian-students.png",
      title: language === "ar" ? "الطلاب اليمنيون" : "Mahasiswa Yaman",
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  // Auto-advance images every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1))
      setProgress(0) // Reset progress when slide changes
    }, 10000) // 10 seconds

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  // Progress animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0
        }
        return prevProgress + 1
      })
    }, 100) // Update every 100ms for smooth animation (10s total = 100 steps)

    return () => clearInterval(progressInterval)
  }, [currentImageIndex])

  const goToPrevious = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? backgroundImages.length - 1 : currentImageIndex - 1)
    setProgress(0) // Reset progress
  }

  const goToNext = () => {
    setCurrentImageIndex(currentImageIndex === backgroundImages.length - 1 ? 0 : currentImageIndex + 1)
    setProgress(0) // Reset progress
  }

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index)
    setProgress(0) // Reset progress
  }

  return (
    <section className="relative">
      <div className="relative h-[500px] w-full overflow-hidden">
        {/* Background Images */}
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url('${image.url}')` }}
          >
            <div className="absolute inset-0 bg-accent/30" />
          </div>
        ))}

        {/* Content */}
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
            {language === "ar" ? "الجالية اليمنية في إندونيسيا" : "Komunitas Yaman di Indonesia"}
          </h1>
          <p className="mb-6 max-w-2xl text-lg md:text-xl">
            {language === "ar"
              ? "منصة جامعة وفاعلة تخدم اليمنيين في إندونيسيا، وتدعم تطلعاتهم في المجالات الاجتماعية، الاقتصادية، والتعليمية"
              : "Platform yang menyatukan dan melayani warga Yaman di Indonesia, mendukung aspirasi mereka di bidang sosial, ekonomi, dan pendidikan"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-yemen-brown hover:bg-yemen-brown-dark">
              <Link href="/register">
                <span>{t("register")}</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-yemen-brown bg-white hover:bg-white/90"
            >
              <Link href="/about">
                <span>{t("about")}</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-all duration-200"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Fixed Spacing Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          {/* Title of current slide */}
          <div className="mb-3 px-4 py-1 bg-primary/80 rounded-full text-white text-sm font-medium">
            {backgroundImages[currentImageIndex].title}
          </div>

          {/* Bar indicators with fixed spacing containers */}
          <div className="flex items-center gap-4">
            {backgroundImages.map((_, index) => (
              <div key={index} className="flex justify-center" style={{ width: "40px" }}>
                <button
                  onClick={() => goToSlide(index)}
                  className="relative h-1 rounded-full overflow-hidden transition-all duration-300 focus:outline-none"
                  style={{ width: index === currentImageIndex ? "40px" : "20px" }}
                  aria-label={`Go to image ${index + 1}`}
                >
                  <div className="absolute inset-0 bg-primary/40"></div>
                  {index === currentImageIndex && (
                    <div className="absolute inset-0 bg-primary" style={{ width: `${progress}%` }}></div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* News ticker */}
      <div className="bg-yemen-brown text-white py-2">
        <div className="container overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-4 inline-block">
              {language === "ar"
                ? "مرحبًا بكم في موقع الجالية اليمنية في إندونيسيا"
                : "Selamat datang di situs Komunitas Yaman di Indonesia"}
            </span>
            <span className="mx-4 inline-block">
              {language === "ar"
                ? "انضم إلينا في الفعالية القادمة بتاريخ ١٥ يونيو ٢٠٢٥"
                : "Bergabunglah dengan kami di acara mendatang pada 15 Juni 2025"}
            </span>
            <span className="mx-4 inline-block">
              {language === "ar" ? "سجل الآن للحصول على عضوية الجالية" : "Daftar sekarang للحصول على عضوية الجالية"}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

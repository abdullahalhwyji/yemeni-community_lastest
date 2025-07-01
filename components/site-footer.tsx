"use client"

import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function SiteFooter() {
  const { t, language } = useLanguage()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-yemen-brown-dark text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">{language === "ar" ? "الجالية اليمنية" : "Komunitas Yaman"}</h3>
            <p className="text-sm">
              {language === "ar"
                ? "منصة جامعة وفاعلة تخدم اليمنيين في إندونيسيا، وتدعم تطلعاتهم في المجالات الاجتماعية، الاقتصادية، والتعليمية"
                : "Platform yang menyatukan dan melayani warga Yaman di Indonesia, mendukung aspirasi mereka di bidang sosial, ekonomi, dan pendidikan"}
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("contact_us")}</h3>
            <address className="not-italic text-sm">
              <p>Email: komunitasyaman@gmail.com</p>
              <p>Phone: +6282211112217</p>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("follow_us")}</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white/80">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-white/80">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-white/80">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-white/80">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">{t("quick_links")}</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/about" className="hover:underline">
                <span>{t("about")}</span>
              </Link>
              <Link href="/our-work" className="hover:underline">
                <span>{t("our_work")}</span>
              </Link>
              <Link href="/indonesia-guide" className="hover:underline">
                <span>{t("indonesia_guide")}</span>
              </Link>
              <Link href="/contact" className="hover:underline">
                <span>{t("contact")}</span>
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-white/20 pt-8 text-center text-sm">
          <p>
            &copy; {currentYear} {language === "ar" ? "الجالية اليمنية في إندونيسيا" : "Komunitas Yaman Indonesia"}.{" "}
            {t("all_rights_reserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}

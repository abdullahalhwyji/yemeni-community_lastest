"use client"

import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import Image from "next/image"

export function Logo({ className, inMobileMenu }: { className?: string; inMobileMenu?: boolean }) {
  const { language } = useLanguage()

  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-12 w-12 overflow-hidden order-first">
        <Image
          src="/images/logo.png"
          alt={language === "ar" ? "شعار الجالية اليمنية في إندونيسيا" : "Logo Komunitas Yaman di Indonesia"}
          width={48}
          height={48}
          className="object-contain"
          priority
        />
      </div>
      <div className={`flex flex-col w-auto ${language === "ar" ? "items-end text-right" : "items-start text-left"}`}>
        <span className="text-base font-bold w-full leading-tight">
          {language === "ar" ? "الجالية اليمنية" : "Komunitas Yaman"}
        </span>
        <span
          className={`text-xs w-full leading-tight mt-0.5 ${inMobileMenu ? "text-white" : "text-muted-foreground"}`}
        >
          {language === "ar" ? "في إندونيسيا" : "di Indonesia"}
        </span>
      </div>
    </Link>
  )
}

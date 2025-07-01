"use client"

import { useLanguage } from "@/components/language-provider"

export function RegisterHero() {
  const { t, language } = useLanguage()

  return (
    <section className="relative py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{t("new_membership")}</h1>
          <p className="text-xl text-muted-foreground">
            {language === "ar"
              ? "حرصًا على تسهيل انضمام أفراد الجالية إلى المنصة الرقمية، يمكنك إنشاء عضوية جديدة مباشرة عبر الموقع الإلكتروني"
              : "Untuk memudahkan anggota komunitas bergabung dengan platform digital, Anda dapat membuat keanggotaan baru langsung melalui situs web"}
          </p>
        </div>
      </div>
    </section>
  )
}

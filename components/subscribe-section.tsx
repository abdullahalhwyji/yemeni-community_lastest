"use client"

import type React from "react"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export function SubscribeSection() {
  const { t, language } = useLanguage()
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the email to your backend
    console.log("Subscribing email:", email)

    // Show success message
    toast({
      title: language === "ar" ? "تم الاشتراك بنجاح!" : "Berhasil berlangganan!",
      description:
        language === "ar" ? "شكرًا لاشتراكك في نشرتنا الإخبارية" : "Terima kasih telah berlangganan newsletter kami",
    })

    // Reset form
    setEmail("")
  }

  return (
    <section className="py-12 md:py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">
            {language === "ar"
              ? "ابق على اطلاع بأحدث أخبار الجالية"
              : "Tetap terinformasi dengan berita terbaru komunitas"}
          </h2>
          <p className="mb-8">
            {language === "ar"
              ? "اشترك في نشرتنا الإخبارية للحصول على آخر التحديثات والفعاليات"
              : "Berlangganan newsletter kami untuk mendapatkan pembaruan dan acara terbaru"}
          </p>

          <form onSubmit={handleSubmit} className="flex w-full max-w-md mx-auto gap-2">
            <Input
              type="email"
              placeholder={t("email_placeholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-primary-foreground text-primary"
            />
            <Button type="submit" variant="secondary">
              {t("subscribe")}
            </Button>
          </form>
        </div>
      </div>
      <Toaster />
    </section>
  )
}

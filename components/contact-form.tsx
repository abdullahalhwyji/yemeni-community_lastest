"use client"

import type React from "react"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export function ContactForm() {
  const { t, language } = useLanguage()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)

    // Show success message
    toast({
      title: language === "ar" ? "تم إرسال الرسالة بنجاح!" : "Pesan berhasil dikirim!",
      description:
        language === "ar"
          ? "شكرًا لتواصلك معنا، سنرد عليك في أقرب وقت ممكن"
          : "Terima kasih telah menghubungi kami, kami akan merespons Anda sesegera mungkin",
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-bold">{t("direct_contact")}</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {language === "ar"
              ? "يمكنك أيضا إرسال رسالتك مباشرة عبر الموقع من خلال تعبئة النموذج التالي"
              : "Anda juga dapat mengirim pesan Anda langsung melalui situs dengan mengisi formulir berikut"}
          </p>
        </div>

        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle>{t("contact_us")}</CardTitle>
            <CardDescription>
              {language === "ar"
                ? "املأ النموذج أدناه وسنرد عليك في أقرب وقت ممكن"
                : "Isi formulir di bawah ini dan kami akan merespons Anda sesegera mungkin"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">{t("full_name")}</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{t("email")}</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t("phone")}</Label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">{t("message_title")}</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{t("message")}</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              {t("send")}
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Toaster />
    </section>
  )
}

"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Quote, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function TestimonialsSection() {
  const { language } = useLanguage()

  const testimonials = [
    {
      name: language === "ar" ? "أحمد محمد الحداد" : "Ahmad Muhammad Al-Haddad",
      role: language === "ar" ? "طالب دكتوراه - جامعة إندونيسيا" : "PhD Student - Universitas Indonesia",
      content:
        language === "ar"
          ? "الجالية اليمنية في إندونيسيا قدمت لي الدعم الكامل خلال رحلتي الأكاديمية. من خلال برامجهم وأنشطتهم، تمكنت من التكيف مع الثقافة الإندونيسية والنجاح في دراستي."
          : "Komunitas Yaman di Indonesia memberikan dukungan penuh selama perjalanan akademis saya. Melalui program dan kegiatan mereka, saya dapat beradaptasi dengan budaya Indonesia dan berhasil dalam studi saya.",
      image: "/placeholder.svg?height=80&width=80&text=Ahmad",
      rating: 5,
    },
    {
      name: language === "ar" ? "فاطمة علي السالمي" : "Fatimah Ali As-Salimi",
      role: language === "ar" ? "رائدة أعمال" : "Entrepreneur",
      content:
        language === "ar"
          ? "بفضل شبكة الأعمال التي وفرتها الجالية، تمكنت من تأسيس شركتي الناشئة في جاكرتا. الدعم والتوجيه الذي حصلت عليه كان لا يقدر بثمن."
          : "Berkat jaringan bisnis yang disediakan komunitas, saya berhasil mendirikan startup saya di Jakarta. Dukungan dan bimbingan yang saya terima sangat berharga.",
      image: "/placeholder.svg?height=80&width=80&text=Fatimah",
      rating: 5,
    },
    {
      name: language === "ar" ? "محمد عبدالله الشامي" : "Muhammad Abdullah Ash-Shami",
      role: language === "ar" ? "مهندس برمجيات" : "Software Engineer",
      content:
        language === "ar"
          ? "الأنشطة الثقافية والاجتماعية التي تنظمها الجالية ساعدتني في الحفاظ على هويتي اليمنية مع الاندماج في المجتمع الإندونيسي بنجاح."
          : "Kegiatan budaya dan sosial yang diselenggarakan komunitas membantu saya mempertahankan identitas Yaman sambil berhasil berintegrasi dengan masyarakat Indonesia.",
      image: "/placeholder.svg?height=80&width=80&text=Muhammad",
      rating: 5,
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-card">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-2">
            {language === "ar" ? "شهادات أعضائنا" : "Testimoni Anggota"}
          </h2>
          <p className="text-primary/70 max-w-2xl mx-auto">
            {language === "ar"
              ? "استمع إلى قصص نجاح أعضاء الجالية اليمنية في إندونيسيا"
              : "Dengarkan kisah sukses anggota komunitas Yaman di Indonesia"}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-background border-accent/20 hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-primary">{testimonial.name}</h3>
                    <p className="text-sm text-primary/60">{testimonial.role}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-button text-button" />
                      ))}
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-accent flex-shrink-0" />
                </div>
                <p className="text-primary/80 leading-relaxed text-sm">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" asChild className="border-accent text-primary hover:bg-accent hover:text-primary">
            <Link href="/testimonials">{language === "ar" ? "المزيد من الشهادات" : "Lebih Banyak Testimoni"}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

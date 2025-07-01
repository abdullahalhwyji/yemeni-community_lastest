import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactHero } from "@/components/contact-hero"
import { ContactInfo } from "@/components/contact-info"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ContactHero />
        <ContactInfo />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  )
}

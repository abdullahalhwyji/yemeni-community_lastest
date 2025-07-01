import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PartnersHero } from "@/components/partners-hero"
import { StrategicPartners } from "@/components/strategic-partners"

export default function StrategicPartnersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PartnersHero />
        <StrategicPartners />
      </main>
      <SiteFooter />
    </div>
  )
}

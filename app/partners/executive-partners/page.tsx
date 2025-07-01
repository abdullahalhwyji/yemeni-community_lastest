import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PartnersHero } from "@/components/partners-hero"
import { ExecutivePartners } from "@/components/executive-partners"

export default function ExecutivePartnersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PartnersHero />
        <ExecutivePartners />
      </main>
      <SiteFooter />
    </div>
  )
}

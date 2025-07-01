import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { PartnersHero } from "@/components/partners-hero"
import { redirect } from "next/navigation"

export default function PartnersPage() {
  redirect("/partners/strategic-partners")
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PartnersHero />
        {/* <StrategicPartners /> */}
        {/* <ExecutivePartners /> */}
      </main>
      <SiteFooter />
    </div>
  )
}

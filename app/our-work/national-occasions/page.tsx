import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { OurWorkHero } from "@/components/our-work-hero"
import { NationalOccasions } from "@/components/national-occasions"

export default function NationalOccasionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <OurWorkHero />
        <NationalOccasions />
      </main>
      <SiteFooter />
    </div>
  )
}

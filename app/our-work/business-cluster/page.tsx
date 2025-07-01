import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { OurWorkHero } from "@/components/our-work-hero"
import { BusinessCluster } from "@/components/business-cluster"

export default function BusinessClusterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <OurWorkHero />
        <BusinessCluster />
      </main>
      <SiteFooter />
    </div>
  )
}

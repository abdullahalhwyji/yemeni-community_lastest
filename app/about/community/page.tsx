import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AboutHero } from "@/components/about-hero"
import { AboutCommunity } from "@/components/about-community"

export default function AboutCommunityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AboutHero />
        <AboutCommunity />
      </main>
      <SiteFooter />
    </div>
  )
}

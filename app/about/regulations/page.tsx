import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AboutHero } from "@/components/about-hero"
import { CommunityRegulations } from "@/components/community-regulations"

export default function CommunityRegulationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AboutHero />
        <CommunityRegulations />
      </main>
      <SiteFooter />
    </div>
  )
}

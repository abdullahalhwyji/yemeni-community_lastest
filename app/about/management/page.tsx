import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AboutHero } from "@/components/about-hero"
import { CommunityManagement } from "@/components/community-management"

export default function CommunityManagementPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AboutHero />
        <CommunityManagement />
      </main>
      <SiteFooter />
    </div>
  )
}

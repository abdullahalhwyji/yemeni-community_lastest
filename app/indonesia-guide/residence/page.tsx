import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ResidenceGuide } from "@/components/residence-guide"

export default function ResidenceGuidePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ResidenceGuide />
      </main>
      <SiteFooter />
    </div>
  )
}

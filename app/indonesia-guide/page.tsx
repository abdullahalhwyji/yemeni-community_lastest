import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { IndonesiaGuides } from "@/components/indonesia-guides"

export default function IndonesiaGuidePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <IndonesiaGuides />
      </main>
      <SiteFooter />
    </div>
  )
}

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MediaHero } from "@/components/media-hero"
import { NewsListing } from "@/components/news-listing"

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <MediaHero />
        <NewsListing />
      </main>
      <SiteFooter />
    </div>
  )
}

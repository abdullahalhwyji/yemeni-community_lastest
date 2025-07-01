import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MediaHero } from "@/components/media-hero"
import { ArticlesListing } from "@/components/articles-listing"

export default function ArticlesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <MediaHero />
        <ArticlesListing />
      </main>
      <SiteFooter />
    </div>
  )
}

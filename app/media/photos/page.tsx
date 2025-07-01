import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MediaHero } from "@/components/media-hero"
import { PhotoGallery } from "@/components/photo-gallery"

export default function PhotosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <MediaHero />
        <PhotoGallery />
      </main>
      <SiteFooter />
    </div>
  )
}

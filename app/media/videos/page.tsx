import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MediaHero } from "@/components/media-hero"
import { VideoGallery } from "@/components/video-gallery"

export default function VideosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <MediaHero />
        <VideoGallery />
      </main>
      <SiteFooter />
    </div>
  )
}

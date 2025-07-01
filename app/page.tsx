import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { NewsSection } from "@/components/news-section"
import { ActivitiesSection } from "@/components/activities-section"
import { BlogsSection } from "@/components/blogs-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SubscribeSection } from "@/components/subscribe-section"
import { CommunityGuideSection } from "@/components/community-guide-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <NewsSection />
        <ActivitiesSection />
        <BlogsSection />
        <TestimonialsSection />
        <SubscribeSection />
        <CommunityGuideSection />
      </main>
      <SiteFooter />
    </div>
  )
}

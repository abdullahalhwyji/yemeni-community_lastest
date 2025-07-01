import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { OurWorkHero } from "@/components/our-work-hero"
import { EventsActivities } from "@/components/events-activities"

export default function EventsActivitiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <OurWorkHero />
        <EventsActivities />
      </main>
      <SiteFooter />
    </div>
  )
}

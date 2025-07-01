import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { OurWorkHero } from "@/components/our-work-hero"
import { BusinessCluster } from "@/components/business-cluster"
import { NationalOccasions } from "@/components/national-occasions"
import { EventsActivities } from "@/components/events-activities"
import { redirect } from "next/navigation"

export default function OurWorkPage() {
  redirect("/our-work/business-cluster")
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <OurWorkHero />
        <BusinessCluster />
        <NationalOccasions />
        <EventsActivities />
      </main>
      <SiteFooter />
    </div>
  )
}

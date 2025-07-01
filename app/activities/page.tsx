import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ActivitiesSection } from "@/components/activities-section"

export default function ActivitiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="py-12">
          <div className="container">
            <h1 className="text-4xl font-bold text-primary mb-8">الأنشطة والفعاليات</h1>
            <ActivitiesSection />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RegisterHero } from "@/components/register-hero"
import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <RegisterHero />
        <RegisterForm />
      </main>
      <SiteFooter />
    </div>
  )
}

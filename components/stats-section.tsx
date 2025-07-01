"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Building, Award } from "lucide-react"

export function StatsSection() {
  const { t } = useLanguage()

  const stats = [
    {
      title: t("years_established"),
      value: "10+",
      icon: <Calendar className="h-8 w-8" />,
    },
    {
      title: t("partner_companies"),
      value: "50+",
      icon: <Building className="h-8 w-8" />,
    },
    {
      title: t("events_held"),
      value: "200+",
      icon: <Award className="h-8 w-8" />,
    },
    {
      title: t("registered_members"),
      value: "1000+",
      icon: <Users className="h-8 w-8" />,
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">{stat.icon}</div>
                <h3 className="text-4xl font-bold">{stat.value}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

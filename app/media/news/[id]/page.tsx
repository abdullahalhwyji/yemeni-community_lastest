import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { NewsArticle } from "@/components/news-article"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }]
}

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  // For now, we only have articles with IDs 1 and 2
  if (!["1", "2", "3", "4", "5", "6"].includes(params.id)) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <NewsArticle id={params.id} />
      </main>
      <SiteFooter />
    </div>
  )
}

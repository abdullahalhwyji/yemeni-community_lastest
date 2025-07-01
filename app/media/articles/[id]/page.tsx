import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleDetail } from "@/components/article-detail"

interface ArticlePageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }]
}

export default function ArticlePage({ params }: ArticlePageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ArticleDetail id={params.id} />
      </main>
      <SiteFooter />
    </div>
  )
}

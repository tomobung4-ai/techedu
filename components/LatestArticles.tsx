import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export default function LatestArticles() {
  return (
    <section className="mb-12">

      <h2 className="text-3xl font-bold mb-6">
        Artikel Terbaru
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {articles.slice(0, 6).map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
          />
        ))}
      </div>

    </section>
  );
}
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

export default function PopularArticles() {
  const popularArticles = articles.filter(
    (article) => article.popular
  );

  return (
    <section className="mb-16">

      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">🔥</span>

        <h2 className="text-3xl font-bold">
          Artikel Populer
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {popularArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
          />
        ))}
      </div>

    </section>
  );
}
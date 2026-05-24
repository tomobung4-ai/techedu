import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({
  params,
}: Props) {
  const { slug } = await params;

  const categoryName =
    slug.charAt(0).toUpperCase() + slug.slice(1);

  const filteredArticles = articles.filter(
    (article) =>
      article.category.toLowerCase() ===
      slug.toLowerCase()
  );

  if (filteredArticles.length === 0) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">

      <h1 className="text-4xl font-bold mb-2">
        {categoryName}
      </h1>

      <p className="text-gray-500 mb-8">
        Artikel dalam kategori {categoryName}
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
          />
        ))}
      </div>

    </main>
  );
}
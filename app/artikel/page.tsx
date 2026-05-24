import Link from "next/link";
import Image from "next/image";
import { getArticles } from "@/lib/articles";

export default async function ArtikelPage() {
  const articles = await getArticles();

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Semua Artikel
      </h1>

      {articles.length === 0 ? (
        <p>Belum ada artikel.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article: any) => (
            <div
              key={article.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={500}
                height={300}
                className="w-full h-52 object-cover"
              />

              <div className="p-5">
                <span className="text-sm text-blue-600 font-semibold">
                  {article.category}
                </span>

                <h2 className="text-xl font-bold mt-2 mb-2">
                  {article.title}
                </h2>

                <p className="text-sm text-gray-500 mb-4">
                  {article.date}
                </p>

                <Link
                  href={`/artikel/${article.slug}`}
                  className="text-blue-600 font-semibold"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
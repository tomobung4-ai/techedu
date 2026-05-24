import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/articles";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function DetailArtikel({ params }: Props) {
  const { slug } = await params;

  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <Image
        src={article.image}
        alt={article.title}
        width={1200}
        height={600}
        className="w-full rounded-xl mb-8"
      />

      <span className="text-blue-600 font-semibold">
        {article.category}
      </span>

      <h1 className="text-4xl font-bold mt-2 mb-4">
        {article.title}
      </h1>

      <p className="text-gray-500 mb-8">
        {article.date}
      </p>

      <article className="prose dark:prose-invert max-w-none">
        {article.content}
      </article>
    </main>
  );
}
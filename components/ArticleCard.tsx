import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  article: {
    id: number;
    slug: string;
    title: string;
    category: string;
    date: string;
    image: string;
  };
};

export default function ArticleCard({
  article,
}: ArticleCardProps) {
  return (
    <div
      className="
        bg-white dark:bg-gray-900
        rounded-2xl
        overflow-hidden
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
      "
    >
      <Image
        src={article.image}
        alt={article.title}
        width={400}
        height={250}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        <span
          className="
            inline-block
            bg-blue-100
            text-blue-700
            px-3
            py-1
            rounded-full
            text-xs
            font-semibold
          "
        >
          {article.category}
        </span>

        <h2
          className="
            text-xl
            font-bold
            mt-3
            line-clamp-2
          "
        >
          {article.title}
        </h2>

        <p
          className="
            text-sm
            text-gray-500 dark:text-gray-400
            mt-2
          "
        >
          {article.date}
        </p>

        <Link
          href={`/artikel/${article.slug}`}
          className="
            inline-block
            mt-4
            text-blue-600
            font-semibold
            hover:text-blue-800
          "
        >
          Baca Selengkapnya →
        </Link>

      </div>
    </div>
  );
}
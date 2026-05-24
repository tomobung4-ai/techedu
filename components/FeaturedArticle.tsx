import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";

export default function FeaturedArticle() {
  const featured = articles[0];

  return (
    <section className="mb-12">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        <div className="grid md:grid-cols-2">

          <div>
            <Image
              src={featured.image}
              alt={featured.title}
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 flex flex-col justify-center">

            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
              Artikel Pilihan
            </span>

            <h2 className="text-4xl font-bold mb-4">
              {featured.title}
            </h2>

            <p className="text-gray-600 mb-6">
              Kategori: {featured.category}
            </p>

            <Link
              href={`/artikel/${featured.slug}`}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl w-fit"
            >
              Baca Selengkapnya
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
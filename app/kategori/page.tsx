import Link from "next/link";

const categories = [
  "Programming",
  "Komputer",
  "AI",
  "Pendidikan",
];

export default function KategoriPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">

      <h1 className="text-4xl font-bold mb-8">
        Semua Kategori
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {categories.map((category) => (
          <Link
            key={category}
            href={`/kategori/${category.toLowerCase()}`}
            className="
              bg-white
              dark:bg-gray-900
              rounded-2xl
              shadow-md
              p-8
              hover:shadow-xl
              transition
            "
          >
            <h2 className="text-2xl font-bold">
              {category}
            </h2>

            <p className="text-gray-500 mt-2">
              Lihat semua artikel {category}
            </p>
          </Link>
        ))}

      </div>

    </main>
  );
}
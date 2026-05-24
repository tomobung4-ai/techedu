import FeaturedArticle from "@/components/FeaturedArticle";
import LatestArticles from "@/components/LatestArticles";
import PopularArticles from "@/components/PopularArticles";
import Newsletter from "@/components/Newsletter";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-10 md:p-16 mb-12">

        <h1 className="text-5xl font-bold mb-4">
          TechEdu Indonesia
        </h1>

        <p className="text-xl mb-6">
          Portal Teknologi, Komputer, Programming, AI dan Pendidikan
        </p>

        <div className="flex gap-4">

          <a
            href="/artikel"
            className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold"
          >
            Baca Artikel
          </a>

          <a
            href="/kategori"
            className="border border-white px-6 py-3 rounded-xl"
          >
            Lihat Kategori
          </a>

        </div>

      </section>

      {/* Statistik */}
      <section className="grid md:grid-cols-4 gap-6 mb-12">

        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-3xl font-bold">100+</h3>
          <p>Artikel</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-3xl font-bold">4</h3>
          <p>Kategori</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-3xl font-bold">AI</h3>
          <p>Teknologi Modern</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 text-center">
          <h3 className="text-3xl font-bold">24/7</h3>
          <p>Konten Edukasi</p>
        </div>

      </section>

      <FeaturedArticle />

<PopularArticles />

<LatestArticles />

<Newsletter />

    </main>
  );
}
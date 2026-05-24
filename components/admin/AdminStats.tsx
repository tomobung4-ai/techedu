import { getArticles } from "@/lib/articles";

export default async function AdminStats() {
  const articles = await getArticles();

  const totalArtikel = articles.length;

  const totalPopuler = articles.filter(
    (a: any) => a.popular
  ).length;

  const totalKategori = new Set(
    articles.map((a: any) => a.category)
  ).size;

  const totalGambar = articles.filter(
    (a: any) => a.image
  ).length;

  const stats = [
    {
      title: "Total Artikel",
      value: totalArtikel,
      icon: "📚",
    },
    {
      title: "Artikel Populer",
      value: totalPopuler,
      icon: "⭐",
    },
    {
      title: "Total Kategori",
      value: totalKategori,
      icon: "📂",
    },
    {
      title: "Total Gambar",
      value: totalGambar,
      icon: "🖼️",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white dark:bg-gray-900 border rounded-xl p-6 shadow"
        >
          <div className="text-4xl mb-3">
            {item.icon}
          </div>

          <h3 className="text-gray-500 text-sm">
            {item.title}
          </h3>

          <p className="text-3xl font-bold mt-2">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}
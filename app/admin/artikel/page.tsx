import Link from "next/link";
import { getArticles } from "@/lib/articles";
import { deleteArticle } from "../actions";

export default async function AdminArtikelPage() {
  const articles = await getArticles();

  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Kelola Artikel
        </h1>

        <Link
          href="/admin/tambah-artikel"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Tambah Artikel
        </Link>
      </div>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Judul</th>
            <th className="p-3 border">Kategori</th>
            <th className="p-3 border">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {articles.map((article: any) => (
            <tr key={article.id}>
              <td className="p-3 border">
                {article.id}
              </td>

              <td className="p-3 border">
                {article.title}
              </td>

              <td className="p-3 border">
                {article.category}
              </td>

              <td className="p-3 border flex gap-2">
                <Link
                  href={`/admin/edit/${article.id}`}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </Link>

                <form
                  action={async () => {
                    "use server";
                    await deleteArticle(article.id);
                  }}
                >
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Hapus
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
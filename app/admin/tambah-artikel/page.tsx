import ArticleForm from "@/components/admin/ArticleForm";

export default function TambahArtikelPage() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">
        Tambah Artikel
      </h1>

      <ArticleForm />
    </main>
  );
}
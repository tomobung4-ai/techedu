import { getArticleById } from "@/lib/articles";
import { updateArticle } from "../../actions";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditPage({
  params,
}: Props) {
  const { id } = await params;

  const article = await getArticleById(
    Number(id)
  );

  if (!article) {
    notFound();
  }

  async function update(formData: FormData) {
    "use server";
    await updateArticle(article.id, formData);
  }

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">
        Edit Artikel
      </h1>

      <form action={update} className="space-y-4">

        <input
          name="title"
          defaultValue={article.title}
          className="w-full border p-3 rounded"
        />

        <input
          name="slug"
          defaultValue={article.slug}
          className="w-full border p-3 rounded"
        />

        <input
          name="category"
          defaultValue={article.category}
          className="w-full border p-3 rounded"
        />

        <input
          name="image"
          defaultValue={article.image}
          className="w-full border p-3 rounded"
        />

        <input
          name="date"
          defaultValue={article.date}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="content"
          rows={10}
          defaultValue={article.content}
          className="w-full border p-3 rounded"
        />

        <button
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          Update Artikel
        </button>

      </form>
    </main>
  );
}
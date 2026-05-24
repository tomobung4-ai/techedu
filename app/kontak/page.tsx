import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi tim TechEdu Indonesia.",
};
export default function KontakPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Hubungi Kami
      </h1>

      <form className="space-y-4">

        <input
          type="text"
          placeholder="Nama"
          className="w-full border p-3 rounded"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded"
        />

        <textarea
          rows={6}
          placeholder="Pesan"
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Kirim Pesan
        </button>

      </form>
    </main>
  );
}
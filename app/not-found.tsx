import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold mb-4">
        404
      </h1>

      <p className="mb-6">
        Halaman tidak ditemukan.
      </p>

      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Kembali ke Home
      </Link>
    </main>
  );
}
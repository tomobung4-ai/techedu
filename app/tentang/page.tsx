import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Informasi tentang TechEdu Indonesia.",
};
export default function TentangPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Tentang TechEdu Indonesia
      </h1>

      <p className="mb-4">
        TechEdu Indonesia adalah portal yang membahas teknologi,
        komputer, programming, artificial intelligence, pendidikan,
        kampus, skripsi, dan perkembangan dunia digital.
      </p>

      <p className="mb-4">
        Website ini dibuat untuk membantu pelajar, mahasiswa,
        guru, dan masyarakat umum mendapatkan informasi yang
        mudah dipahami dan bermanfaat.
      </p>

      <p>
        Fokus kami adalah menghadirkan artikel berkualitas,
        tutorial praktis, dan informasi terbaru seputar dunia
        teknologi.
      </p>
    </main>
  );
}
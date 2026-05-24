import AdminGuard from "@/components/admin/AdminGuard";
import LogoutButton from "@/components/admin/LogoutButton";
import UserProfile from "@/components/admin/UserProfile";
import AdminStats from "@/components/admin/AdminStats";

export default function AdminPage() {
  return (
    <AdminGuard>
      <main className="max-w-7xl mx-auto p-8">

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            Dashboard Admin
          </h1>

          <LogoutButton />
        </div>

        <div className="mb-8">
          <UserProfile />
        </div>

        <AdminStats />
        <div className="grid md:grid-cols-3 gap-6 mt-8">

  <a
    href="/admin/tambah-artikel"
    className="border rounded-xl p-6 hover:shadow"
  >
    <h2 className="text-xl font-bold">
      ➕ Tambah Artikel
    </h2>

    <p className="text-gray-500 mt-2">
      Buat artikel baru
    </p>
  </a>

  <a
    href="/admin/artikel"
    className="border rounded-xl p-6 hover:shadow"
  >
    <h2 className="text-xl font-bold">
      📝 Kelola Artikel
    </h2>

    <p className="text-gray-500 mt-2">
      Edit dan hapus artikel
    </p>
  </a>

  <a
    href="/artikel"
    className="border rounded-xl p-6 hover:shadow"
  >
    <h2 className="text-xl font-bold">
      🌐 Lihat Website
    </h2>

    <p className="text-gray-500 mt-2">
      Buka halaman publik
    </p>
  </a>

</div>

      </main>
    </AdminGuard>
  );
}
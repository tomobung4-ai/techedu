import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
<div className="flex items-center gap-6">
  <Link href="/">Home</Link>
  <Link href="/artikel">Artikel</Link>
  <Link href="/kategori">Kategori</Link>
  <Link href="/tentang">Tentang</Link>
  <Link href="/kontak">Kontak</Link>

  <ThemeToggle />
</div>
export default function Navbar() {
  return (
    
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-bold"
        >
          TechEdu
        </Link>

        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/artikel">Artikel</Link>
          <Link href="/kategori">
  Kategori
</Link>
          <Link href="/tentang">Tentang</Link>
          <Link href="/kontak">Kontak</Link>
        </div>

      </div>
    </nav>
  );
}
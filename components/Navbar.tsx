"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AuthButton from "./AuthButton";

export default function Navbar() {
  return (
    <nav className="border-b bg-white dark:bg-black dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-bold"
        >
          TechEdu
        </Link>

        <div className="flex items-center gap-6">

          <Link href="/">Home</Link>

          <Link href="/artikel">
            Artikel
          </Link>

          <Link href="/kategori">
            Kategori
          </Link>

          <Link href="/tentang">
            Tentang
          </Link>

          <Link href="/kontak">
            Kontak
          </Link>

          <ThemeToggle />

          <AuthButton />

        </div>

      </div>
    </nav>
  );
}
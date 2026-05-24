"use client";

import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Cari artikel..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded-lg p-3"
      />

      <p className="mt-2 text-gray-500">
        Kata kunci: {search}
      </p>
    </div>
  );
}
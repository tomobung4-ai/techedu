"use client";

import { useState } from "react";
import { createArticle } from "@/app/admin/actions";
import ImageUpload from "./ImageUpload";

export default function ArticleForm() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <form action={createArticle} className="space-y-4">

      <input
        type="text"
        name="title"
        placeholder="Judul Artikel"
        required
        className="w-full border p-3 rounded"
      />

      <input
        type="text"
        name="slug"
        placeholder="Slug"
        required
        className="w-full border p-3 rounded"
      />

      <input
        type="text"
        name="category"
        placeholder="Kategori"
        required
        className="w-full border p-3 rounded"
      />

      <div>
        <label className="font-semibold block mb-2">
          Upload Gambar
        </label>

        <ImageUpload onUpload={setImageUrl} />

        <input
          type="hidden"
          name="image"
          value={imageUrl}
        />

        {imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            className="w-60 mt-4 rounded border"
          />
        )}
      </div>

      <input
        type="text"
        name="date"
        placeholder="Tanggal"
        required
        className="w-full border p-3 rounded"
      />

      <textarea
        name="content"
        rows={10}
        placeholder="Isi Artikel"
        required
        className="w-full border p-3 rounded"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Simpan Artikel
      </button>
    </form>
  );
}
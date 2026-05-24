"use client";

import { useState } from "react";
import ImageUpload from "@/components/admin/ImageUpload";

export default function TestUploadPage() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">
        Test Upload Gambar
      </h1>

      <ImageUpload onUpload={setImageUrl} />

      {imageUrl && (
        <div className="mt-6">
          <p className="mb-2">URL:</p>

          <input
            value={imageUrl}
            readOnly
            className="w-full border p-2"
          />

          <img
            src={imageUrl}
            alt="Preview"
            className="mt-4 w-80 rounded"
          />
        </div>
      )}
    </main>
  );
}
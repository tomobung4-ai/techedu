"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type Props = {
  onUpload: (url: string) => void;
};

export default function ImageUpload({
  onUpload,
}: Props) {
  const [uploading, setUploading] = useState(false);

  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = e.target.files?.[0];

    if (!file) return;

    setUploading(true);

    const fileName =
      Date.now() + "-" + file.name;

    const { error } = await supabase.storage
      .from("articles")
      .upload(fileName, file);

    if (error) {
      alert(error.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from("articles")
      .getPublicUrl(fileName);

    onUpload(data.publicUrl);

    setUploading(false);
  }

  return (
    <div className="space-y-2">
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />

      {uploading && (
        <p>Sedang upload...</p>
      )}
    </div>
  );
}
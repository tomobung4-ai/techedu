"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function createArticle(formData: FormData) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const category = formData.get("category") as string;
  const image = formData.get("image") as string;
  const date = formData.get("date") as string;
  const content = formData.get("content") as string;

  const { error } = await supabase
    .from("articles")
    .insert([
      {
        title,
        slug,
        category,
        image,
        date,
        content,
        popular: false,
      },
    ]);

  if (error) {
    throw new Error("Gagal menyimpan artikel");
  }

  revalidatePath("/artikel");
  revalidatePath("/");
  revalidatePath("/admin/artikel");
}

export async function deleteArticle(id: number) {
  const { error } = await supabase
    .from("articles")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error("Gagal menghapus artikel");
  }

  revalidatePath("/artikel");
  revalidatePath("/");
  revalidatePath("/admin/artikel");
}
export async function updateArticle(
  id: number,
  formData: FormData
) {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const category = formData.get("category") as string;
  const image = formData.get("image") as string;
  const date = formData.get("date") as string;
  const content = formData.get("content") as string;

  const { error } = await supabase
    .from("articles")
    .update({
      title,
      slug,
      category,
      image,
      date,
      content,
    })
    .eq("id", id);

  if (error) {
    throw new Error("Gagal update artikel");
  }

  revalidatePath("/artikel");
  revalidatePath("/");
  revalidatePath("/admin/artikel");
}
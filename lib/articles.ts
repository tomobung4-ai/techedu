import { supabase } from "./supabase";

export async function getArticles() {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.error("Error getArticles:", error);
    return [];
  }

  return data;
}

export async function getArticleBySlug(slug: string) {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error getArticleBySlug:", error);
    return null;
  }

  return data;
}

export async function getPopularArticles() {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("popular", true)
    .order("id", { ascending: false });

  if (error) {
    console.error("Error getPopularArticles:", error);
    return [];
  }

  return data;
}

export async function getLatestArticles(limit: number = 6) {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("id", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error getLatestArticles:", error);
    return [];
  }

  return data;
}
export async function getArticleById(id: number) {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
}
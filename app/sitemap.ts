import { MetadataRoute } from "next";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const articleUrls = articles.map((article) => ({
    url: `https://techedu.id/artikel/${article.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://techedu.id",
      lastModified: new Date(),
    },
    {
      url: "https://techedu.id/artikel",
      lastModified: new Date(),
    },
    {
      url: "https://techedu.id/tentang",
      lastModified: new Date(),
    },
    {
      url: "https://techedu.id/kontak",
      lastModified: new Date(),
    },
    ...articleUrls,
  ];
}
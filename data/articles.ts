import { Article } from "@/types/article";

export const articles: Article[] = [
  {
    id: 1,
    slug: "belajar-html-dasar",
    title: "Belajar HTML Dasar",
    category: "Programming",
    image: "/images/html.jpg",
    date: "22 Mei 2026",
    popular: true,
    content: "Isi artikel..."
  },
  {
    id: 2,
    slug: "cara-install-windows-11",
    title: "Cara Install Windows 11",
    category: "Komputer",
    image: "/images/windows11.jpg",
    date: "23 Mei 2026",
    popular: true,
    content: "Isi artikel..."
  },
  {
    id: 3,
    slug: "belajar-ai-untuk-pemula",
    title: "Belajar AI untuk Pemula",
    category: "AI",
    image: "/images/ai.jpg",
    date: "24 Mei 2026",
    popular: true,
    content: "Isi artikel..."
  }
];
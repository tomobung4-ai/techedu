export interface Article {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  date: string;
  content: string;
  popular?: boolean;
}
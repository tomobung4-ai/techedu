import Link from "next/link";

type BreadcrumbProps = {
  title: string;
};

export default function Breadcrumb({
  title,
}: BreadcrumbProps) {
  return (
    <nav className="mb-6 text-sm text-gray-500">
      <Link href="/" className="hover:text-blue-600">
        Home
      </Link>

      <span className="mx-2">›</span>

      <Link
        href="/artikel"
        className="hover:text-blue-600"
      >
        Artikel
      </Link>

      <span className="mx-2">›</span>

      <span>{title}</span>
    </nav>
  );
}
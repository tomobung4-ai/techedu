import Link from "next/link";

export default function CategorySidebar() {
  const categories = [
    "Programming",
    "Komputer",
    "AI",
    "Pendidikan",
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-5">
      <h3 className="font-bold text-lg mb-4">
        Kategori
      </h3>

      <div className="space-y-3">
        {categories.map((item) => (
          <Link
            key={item}
            href={`/kategori/${item.toLowerCase()}`}
            className="
              block
              p-2
              rounded-lg
              hover:bg-blue-50
              hover:text-blue-600
            "
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
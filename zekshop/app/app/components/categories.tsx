import Link from "next/link";

const categories = [
  { name: "Home & Living", image: "/placeholder.svg?height=300&width=400" },
  { name: "Fashion", image: "/placeholder.svg?height=300&width=400" },
  {
    name: "Beauty & Personal Care",
    image: "/placeholder.svg?height=300&width=400",
  },
  { name: "Food & Beverages", image: "/placeholder.svg?height=300&width=400" },
];

export default function Categories() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link href="#" key={index} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-semibold">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

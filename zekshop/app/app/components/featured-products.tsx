"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Bamboo Toothbrush",
    price: 5.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 2,
    name: "Reusable Water Bottle",
    price: 15.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 24.99,
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: 4,
    name: "Recycled Paper Notebook",
    price: 9.99,
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function FeaturedProducts() {
  const [startIndex, setStartIndex] = useState(0);

  const nextProducts = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProducts = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const visibleProducts = [
    products[startIndex],
    products[(startIndex + 1) % products.length],
    products[(startIndex + 2) % products.length],
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Products
        </h2>
        <div className="relative">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
              {visibleProducts.map((product) => (
                <Card key={product.id} className="w-full max-w-sm mx-auto">
                  <CardContent className="p-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover mb-4 rounded"
                    />
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 hidden lg:flex"
            onClick={prevProducts}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden lg:flex"
            onClick={nextProducts}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex justify-center mt-6 lg:hidden">
          <Button
            variant="outline"
            size="sm"
            className="mx-2"
            onClick={prevProducts}
          >
            <ChevronLeft className="h-4 w-4 mr-2" /> Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="mx-2"
            onClick={nextProducts}
          >
            Next <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

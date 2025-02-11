import Link from "next/link";
import { ShoppingCart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-purple-600">
          EcoShop
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#" className="text-gray-600 hover:text-purple-600">
            Home
          </Link>
          <Link href="#" className="text-gray-600 hover:text-purple-600">
            Shop
          </Link>
          <Link href="#" className="text-gray-600 hover:text-purple-600">
            About
          </Link>
          <Link href="#" className="text-gray-600 hover:text-purple-600">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}

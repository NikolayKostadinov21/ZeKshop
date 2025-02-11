import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About EcoShop</h3>
            <p>
              We're committed to providing eco-friendly products for a
              sustainable future.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-purple-400">
                Facebook
              </Link>
              <Link href="#" className="hover:text-purple-400">
                Instagram
              </Link>
              <Link href="#" className="hover:text-purple-400">
                Twitter
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2025 EcoShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

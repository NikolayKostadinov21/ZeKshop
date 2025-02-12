import { Button } from "@heroui/button";

export default function SpecialOffer() {
  return (
    <section className="py-20 bg-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
        <p className="text-xl mb-6">
          Get 20% off on your first purchase. Use code: FIRSTBUY
        </p>
        <Button size="lg">Shop Now</Button>
      </div>
    </section>
  );
}

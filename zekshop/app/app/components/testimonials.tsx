import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah L.",
    comment:
      "I love the quality of EcoShop's products. They're truly eco-friendly and durable!",
  },
  {
    name: "Mike R.",
    comment:
      "Great customer service and fast shipping. Will definitely shop here again.",
  },
  {
    name: "Emily T.",
    comment:
      "The variety of sustainable products is impressive. EcoShop is my go-to store now.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <p className="mb-4">&ldquo;{testimonial.comment}&rdquo;</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

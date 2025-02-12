import { Card, CardBody } from "@heroui/card";

const testimonials = [
  {
    name: "Sarah L.",
    comment: "tttt",
  },
  {
    name: "Aztec",
    comment: "Lorem ipsum.",
  },
  {
    name: "BlockSense.",
    comment: "Lorem Ipsum",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Backed By</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardBody className="p-6">
                <p className="mb-4">&ldquo;{testimonial.comment}&rdquo;</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

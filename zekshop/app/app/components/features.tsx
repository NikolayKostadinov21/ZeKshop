import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Lightbulb, Zap, Shield } from "lucide-react";

const features = [
  {
    title: "Innovative Solutions",
    description:
      "Our cutting-edge technology provides innovative solutions to complex problems.",
    icon: Lightbulb,
  },
  {
    title: "Lightning Fast",
    description:
      "Experience lightning-fast performance that keeps your business ahead of the competition.",
    icon: Zap,
  },
  {
    title: "Secure & Reliable",
    description:
      "Rest easy knowing your data is protected with our state-of-the-art security measures.",
    icon: Shield,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <feature.icon className="w-10 h-10 mb-4 text-purple-600" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

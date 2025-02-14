import { useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import Dialog from "./Dialog";

interface Item {
  title: string;
  img: string;
  price: string;
}

export default function Items() {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null); // ✅ Stores clicked item

  const list: Item[] = [
    { title: "Orange", img: "/11.png", price: "$5.50" },
    { title: "Tangerine", img: "/12.png", price: "$3.00" },
    { title: "Raspberry", img: "/21.png", price: "$10.00" },
    { title: "Lemon", img: "/22.png", price: "$5.30" },
    { title: "Avocado", img: "/24.png", price: "$15.70" },
    { title: "Lemon 2", img: "/25.png", price: "$8.00" },
    { title: "Banana", img: "/11.png", price: "$7.50" },
    { title: "Watermelon", img: "/12.png", price: "$12.20" },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 relative z-10">
      {list.map((item, index) => (
        <Card
          key={index}
          isPressable
          shadow="sm"
          onPress={() => setSelectedItem(item)} // ✅ Opens Dialog when clicked
        >
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[140px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}

      {/* Render Dialog When an Item is Clicked */}
      <Dialog item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}

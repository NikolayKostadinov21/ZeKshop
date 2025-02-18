import React from "react";
import BuyProduct from "../wallet/BuyProduct";
import Opinion from "../wallet/Opinion";

interface DialogProps {
  item: {
    title: string;
    img: string;
    price: string;
  } | null;
  onClose: () => void;
}

const Dialog: React.FC<DialogProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-[99999]"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg text-center relative transform transition-all scale-95 hover:scale-100 z-[100000]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Product Image */}
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />

        {/* Product Name */}
        <h2 className="text-2xl font-bold text-white">{item.title}</h2>

        {/* Price */}
        <p className="text-pink-500 font-bold text-lg mt-2">{item.price}</p>

        {/* BuyProduct Component */}
        <BuyProduct productPrice={item.price.replace("$", "")} />
        <Opinion />
      </div>
    </div>
  );
};

export default Dialog;

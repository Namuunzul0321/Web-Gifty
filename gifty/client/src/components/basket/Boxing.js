"use client";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Boxing({ onNext }) {
  const giftBoxes = [
    { id: 1, name: "Lid and Base", price: 10000, img: "/lid.svg" },
    { id: 2, name: "Magnetic Box", price: 10000, img: "/mag.svg" },
    { id: 3, name: "Heart Lid and Base", price: 10000, img: "/heart.svg" },
    { id: 4, name: "Packaging Box", price: 10000, img: "/pack.svg" },
    { id: 5, name: "Raphe Box", price: 10000, img: "/rap.svg" },
    { id: 6, name: "Drawer Box", price: 10000, img: "/draw.svg" },
    { id: 7, name: "Paper Bag", price: 10000, img: "/paper.svg" },
  ];

  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffcc00", "#ff66cc", "#000000"];
  const [selectedBox, setSelectedBox] = useState(giftBoxes[6]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const formatPrice = (price) => `${price.toLocaleString()}₮`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main */}
      <div className="flex-1 max-w-6xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Gift */}
        <div className="w-full lg:w-3/4">
          <h2 className="text-2xl font-semibold mb-4">Personalized Gift Boxes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {giftBoxes.map((box) => (
              <div
                key={box.id}
                onClick={() => setSelectedBox(box)}
                className={`p-4 rounded-xl text-center border cursor-pointer transition-colors ${
                  selectedBox.id === box.id
                    ? "border-purple-800 bg-purple-50"
                    : "border-gray-300 bg-white"
                }`}
              >
                <div
                  className="w-full max-w-[120px] h-[120px] mx-auto flex items-center justify-center rounded-xl"
                  style={{ backgroundColor: selectedColor }}
                >
                  <img
                    src={box.img}
                    alt={box.name}
                    className="max-w-[100px] h-auto object-contain"
                    onError={(e) => (e.target.src = "/box.svg")}
                  />
                </div>
                <p className="text-base font-bold mt-3">{formatPrice(box.price)}</p>
                <p className="text-sm text-gray-600">{box.name}</p>
              </div>
            ))}
          </div>

          {/* Color zasandaa */}
          <h3 className="text-lg mt-8 mb-2 font-semibold">Choose a Color</h3>
          <div className="flex gap-3">
            {colors.map((color) => (
              <div
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full cursor-pointer border ${
                  selectedColor === color ? "border-gray-800 border-4" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        </div>

        {/* Summ*/}
        <div className="w-full lg:w-1/4 bg-gray-100 p-6 rounded-xl shadow-sm">
          <p className="text-base mb-2">
            Төлбөр: <strong>{formatPrice(selectedBox.price)}</strong>
          </p>
          <p className="text-base mb-2">
            Тоо ширхэг: <strong>1</strong>
          </p>
          <p className="text-base mb-4">
            Хүргэлт: <strong>{formatPrice(10000)}</strong>
          </p>
          <p className="text-lg font-bold mb-6">
            Нийт дүн: {formatPrice(selectedBox.price + 10000)}
          </p>
          <button
            onClick={() => onNext(selectedBox, selectedColor)}
            className="w-full py-3 bg-purple-800 text-white rounded-md hover:bg-purple-700 transition"
          >
            Үргэлжлүүлэх →
          </button>
        </div>
      </div>

      {/* Footer in the house */}
      <Footer />
    </div>
  );
}

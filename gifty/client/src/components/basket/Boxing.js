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

  const colors = [
    "#ff0000", "#00ff00", "#0000ff", "#ffcc00", "#ff66cc", "#00fff0",
    "#ffffff", "#9933FF", "#3399FF", "#33CC99",
    "#FF9966", "#FF3333", "#996633", "#999999", "#CCFF00",
    "#00CCCC", "#FF6699", "#6600FF", "#6666CC", "#33FF00",
  ];

  const [selectedBox, setSelectedBox] = useState(giftBoxes[6]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const formatPrice = (price) => `${price.toLocaleString()}₮`;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main */}
      <div className="flex-1 max-w-[1400px] mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10">
        {/* Gift Box Section */}
        <div className="w-full lg:w-3/4">
          <h2 className="text-2xl font-semibold mb-6">Бэлгийн хайрцаг сонгох</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {giftBoxes.map((box) => (
              <div
                key={box.id}
                onClick={() => setSelectedBox(box)}
                className={`p-4 rounded-xl text-center border cursor-pointer shadow transition-all ${
                  selectedBox.id === box.id
                    ? "border-purple-800 bg-purple-100"
                    : "border-gray-300 bg-white hover:shadow-md"
                }`}
              >
                <div
                  className="w-full max-w-[130px] h-[130px] mx-auto flex items-center justify-center rounded-xl"
                  style={{ backgroundColor: selectedColor }}
                >
                  <img
                    src={box.img}
                    alt={box.name}
                    className="max-w-[100px] h-auto object-contain"
                    onError={(e) => (e.target.src = "/box.svg")}
                  />
                </div>
                <p className="text-lg font-bold mt-4">{formatPrice(box.price)}</p>
                <p className="text-sm text-gray-600">{box.name}</p>
              </div>
            ))}
          </div>

          {/* Color Picker */}
          <h3 className="text-lg mt-10 mb-4 font-semibold">Өнгө сонгох</h3>
          <div className="grid grid-cols-10 gap-3">
            {colors.map((color) => (
              <div
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-10 h-10 rounded-xl cursor-pointer border-2 transition-all ${
                  selectedColor === color ? "border-gray-800 border-4" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="w-full lg:w-1/4 bg-white p-6 rounded-2xl shadow-xl h-fit">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Таны сонголт</h3>
          <div className="space-y-3 text-gray-700 text-[16px] leading-6">
            <p>Төлбөр: <span className="font-bold">{formatPrice(selectedBox.price)}</span></p>
            <p>Тоо ширхэг: <span className="font-bold">1</span></p>
            <p>Хүргэлт: <span className="font-bold">{formatPrice(10000)}</span></p>
            <p className="pt-2 border-t text-lg font-bold text-black">
              Нийт дүн: <span>{formatPrice(selectedBox.price + 10000)}</span>
            </p>
          </div>
          <button
            onClick={() => onNext(selectedBox, selectedColor)}
            className="w-full mt-6 py-3 bg-gradient-to-r from-purple-700 to-pink-600 text-white text-[16px] font-semibold rounded-xl hover:opacity-90 transition"
          >
            Үргэлжлүүлэх →
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

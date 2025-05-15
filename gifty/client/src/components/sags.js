"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Shipping from "../components/basket/Boxing";
import Payment from "../components/basket/Payment";
import Confirmation from "../components/basket/Confirmation";
import Line from "../components/basket/Line";

export default function Sags() {
  const stages = ["Сагс", "Хайрцаг сонгох", "Төлбөр", "Баталгаажсан"];
  const [currentStage, setCurrentStage] = useState(1);
  const [selectedItems, setSelectedItems] = useState(Array(9).fill(false));
  const itemPrices = [10000, 20000, 15000, 25000, 30000, 10000, 5000, 40000, 20000];

  const nextStage = () => setCurrentStage((prev) => Math.min(prev + 1, stages.length));
  const prevStage = () => setCurrentStage((prev) => Math.max(prev - 1, 1));
  const selectAll = () => setSelectedItems(Array(9).fill(true));
  const deselectAll = () => setSelectedItems(Array(9).fill(false));
  const toggleItem = (index) => {
    setSelectedItems((prev) => {
      const newSelection = [...prev];
      newSelection[index] = !newSelection[index];
      return newSelection;
    });
  };

  const totalItems = selectedItems.filter(Boolean).length;
  const totalPrice = selectedItems.reduce(
    (sum, selected, index) => (selected ? sum + itemPrices[index] : sum),
    0
  );

  // Your original dummy product details object
  const productDetails = [
    { select1: "Red", select2: "Large", thing1: "Cotton", thing2: "Button", thing3: "Slim fit" },
    { select1: "Blue", select2: "Medium", thing1: "Polyester", thing2: "Zipper", thing3: "Regular fit" },
    { select1: "Green", select2: "Small", thing1: "Wool", thing2: "Buttons", thing3: "Loose fit" },
    { select1: "Black", select2: "XL", thing1: "Silk", thing2: "No buttons", thing3: "Tight fit" },
    { select1: "White", select2: "L", thing1: "Linen", thing2: "Buttons", thing3: "Casual" },
    { select1: "Yellow", select2: "M", thing1: "Denim", thing2: "Zipper", thing3: "Sporty" },
    { select1: "Pink", select2: "S", thing1: "Cotton", thing2: "Button", thing3: "Classic" },
    { select1: "Brown", select2: "XL", thing1: "Leather", thing2: "Zipper", thing3: "Modern" },
    { select1: "Orange", select2: "M", thing1: "Cotton", thing2: "Buttons", thing3: "Vintage" },
  ];

  return (
    <div className="font-sans bg-gray-50 min-h-screen pt-[90px]">
      {/* Header */}
      <div className="bg-[linear-gradient(90deg,_rgb(226,215,250)_0%,_rgb(255,224,236)_50%,_rgb(255,235,240)_100%)] w-full h-[70px] fixed shadow-md z-[101] px-6 flex items-center justify-between top-0 left-0">
        {/* Left: Logo */}
        <Link href="/">
          <img src="/logo_text.png" className="w-[130px] h-auto cursor-pointer" />
        </Link>

        {/* Middle: Group3.svg centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/Group3.svg"
            alt="Stage Banner"
            width={160}
            height={40}
            className="h-auto"
          />
        </div>

        {/* Right: Sign In */}
        <div>
          <Link href="/sign-in">
            <button className="relative flex items-center gap-2 text-[#6D5B67] border border-[#6D5B67] rounded-full px-4 py-2 hover:bg-black/10">
              <img src="/person.svg" className="w-[15px] h-[16px]" />
              <span className="text-[15px]">Нэвтрэх</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Progress Line */}
      <Line currentStage={currentStage} />

      {/* Stage 1: Cart */}
      {currentStage === 1 && (
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto my-8 px-4 gap-6">
          {/* Left: Product List */}
          <div className="flex-1 space-y-6">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className={`flex items-center border border-gray-300 py-4 px-4 rounded-md transition-colors cursor-pointer shadow-sm ${
                  selectedItems[index] ? "bg-indigo-100 border-indigo-400" : "bg-white"
                }`}
                onClick={() => toggleItem(index)}
              >
                <div className="w-24 h-24 bg-gray-200 rounded-xl shadow-md flex items-center justify-center text-gray-500 font-semibold text-sm select-none">
                  IMG
                </div>
                <div className="ml-6 flex-grow text-left">
                  <h3 className="text-md font-bold">Product {index + 1}</h3>
                  {/* Show your dummy details here */}
                  <p className="text-gray-600 text-sm mt-1">
                    Color: {productDetails[index].select1}, Size: {productDetails[index].select2}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Material: {productDetails[index].thing1}, Feature: {productDetails[index].thing2}, Fit: {productDetails[index].thing3}
                  </p>
                </div>
                <span className="font-bold text-gray-800 mr-4">${itemPrices[index].toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Right: Summary */}
          <div className="flex-shrink-0 bg-white rounded-xl shadow-lg p-6 w-full lg:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-lg text-gray-700 font-semibold mb-2">
                Нийт үнэ: ${totalPrice.toFixed(2)}
              </h3>
              <h3 className="text-lg text-gray-700 font-semibold mb-4">
                Нийт тоо: {totalItems}
              </h3>
              <div className="mb-6 flex gap-4">
                <button
                  onClick={selectAll}
                  className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-700 transition"
                >
                  Бүгдийн сонгох
                </button>
                <button
                  onClick={deselectAll}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-600 transition"
                >
                  Бүгдийн цуцлах
                </button>
              </div>

              {/* Хүргэлт context */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-md p-4 mb-4 text-indigo-700 text-sm">
                <h4 className="font-semibold mb-1">Хүргэлтийн мэдээлэл</h4>
                <p>Танд хүргэлт 5 хоногийн дотор хийгдэх бөгөөд үнэ нь 5000₮ байна.</p>
              </div>
            </div>

            <button
              onClick={nextStage}
              disabled={totalItems === 0}
              className={`mt-2 w-full py-3 rounded-md text-white font-bold transition ${
                totalItems > 0 ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Үргэлжлүүлэх
            </button>
          </div>
        </div>
      )}

      {/* Stage 2–4 */}
      {currentStage === 2 && <Shipping onNext={nextStage} onPrev={prevStage} />}
      {currentStage === 3 && (
        <Payment
          onNext={nextStage}
          onPrev={prevStage}
          selectedItems={selectedItems}
          boxPrice={10000}
        />
      )}
      {currentStage === 4 && <Confirmation onRestart={() => setCurrentStage(1)} />}
    </div>
  );
}

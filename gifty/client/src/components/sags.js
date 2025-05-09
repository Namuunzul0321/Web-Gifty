"use client";

import { useState } from "react";
import Link from "next/link";
import Shipping from "../components/basket/Boxing";
import Payment from "../components/basket/Payment";
import Confirmation from "../components/basket/Confirmation";
import Line from "../components/basket/Line";

export default function Sags() {
  const stages = ["Сагс", "Хайрцаг сонгох", "Төлбөрсй", "Баталгаажсан"];
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

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-700 via-pink-400 to-rose-500 px-8 py-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">GIFTY</h1>
        <Link href="/" className="text-white text-lg font-semibold no-underline">
          ← Back
        </Link>
      </div>

      {/* Progress Line */}
      <Line currentStage={currentStage} />

      {/* Stage 1: Cart */}
      {currentStage === 1 && (
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto my-8 px-4 gap-6">
          {/* Left: Product List */}
          <div className="flex-1 space-y-4">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className={`flex items-center border-b border-gray-300 py-4 rounded-md transition-colors cursor-pointer ${
                  selectedItems[index] ? "bg-indigo-100" : "bg-transparent"
                }`}
                onClick={() => toggleItem(index)}
              >
                <div className="w-24 h-24 bg-gray-200 rounded-xl shadow-md flex items-center justify-center text-gray-500">
                  IMG
                </div>
                <div className="ml-4 flex-grow text-center">
                  <h3 className="text-md font-bold">Product {index + 1}</h3>
                </div>
                <span className="font-bold mr-4">${itemPrices[index].toFixed(2)}</span>
              </div>
            ))}
          </div>

          {/* Right: Summary */}
          <div className="flex-shrink-0 bg-white rounded-xl shadow-md p-6 w-full lg:w-1/3">
            <h3 className="text-lg text-gray-700 font-semibold mb-2">Нийт үнэ: ${totalPrice.toFixed(2)}</h3>
            <h3 className="text-lg text-gray-700 font-semibold mb-4">Нийт тоо: {totalItems}</h3>
            <div className="mb-4 flex gap-3">
              <button
                onClick={selectAll}
                className="px-4 py-2 border border-black rounded-md font-semibold hover:bg-gray-100"
              >
                Бүгдийн сонгох
              </button>
              <button
                onClick={deselectAll}
                className="px-4 py-2 border border-black rounded-md font-semibold hover:bg-gray-100"
              >
                Бүгдийн цуцлах
              </button>
            </div>
            <button
              onClick={nextStage}
              disabled={totalItems === 0}
              className={`mt-4 w-full py-3 rounded-md text-white font-bold ${
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

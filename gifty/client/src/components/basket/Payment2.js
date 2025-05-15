"use client";
import { useState } from "react";
import Line from "../basket/Line";
import Footer from "@/components/Footer";

export default function Payment({ onNext, onPrev }) {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-5">Төлбөрийн мэдээлэл</h2>

      <div className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md">
        <label className="text-lg font-medium flex items-center">
          <input
            type="radio"
            value="card"
            checked={paymentMethod === "card"}
            onChange={() => setPaymentMethod("card")}
            className="mr-3"
          />
          Карт (Credit/Debit)
        </label>

        <label className="text-lg font-medium flex items-center">
          <input
            type="radio"
            value="paypal"
            checked={paymentMethod === "paypal"}
            onChange={() => setPaymentMethod("paypal")}
            className="mr-3"
          />
          PayPal
        </label>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={onPrev}
          className="px-6 py-3 bg-gray-300 rounded-lg text-base font-medium hover:bg-gray-400"
        >
          ← Буцах
        </button>
        <button
          onClick={onNext}
          className="px-6 py-3 bg-purple-800 text-white rounded-lg text-base font-medium hover:bg-purple-700"
        >
          Үргэлжлүүлэх →
        </button>
      </div>
    </div>
  );
}

"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

const bayruud = [
  { id: "16", img: "/Halloween.svg", title: "Halloween", subtitle: "Аймшиг дагуулсан шөнө" },
  { id: "14", img: "/Huuhdiin.svg", title: "Хүүхдийн баяр", subtitle: "Хүүхдийн инээмсэглэл" },
  { id: "11", img: "/Lunar.svg", title: "Цагаан сар", subtitle: "Өв уламжлал, хүндэтгэл" },
  { id: "12", img: "/Mart.svg", title: "Мартын 8", subtitle: "Эмэгтэйчүүдэд зориулав" },
  { id: "17", img: "/Naadam.svg", title: "Наадам", subtitle: "Үндэсний их баяр" },
  { id: "15", img: "/NewYear.svg", title: "Шинэ жил", subtitle: "Шинэ оны баяр" },
  { id: "13", img: "/soldier_day.png", title: "Цэргийн баяр", subtitle: "Эрчүүдийн баяр" },
  { id: "18", img: "/valentine.svg", title: "Валентин", subtitle: "Хосуудын баяр" },
  { id: "15", img: "/christmas.svg", title: "Зул сар", subtitle: "Христийн баяр" },
];

const mockProducts = new Array(20).fill(null).map((_, i) => ({
  id: i + 1,
  name: `Бүтээгдэхүүн ${i + 1}`,
  price: 9000 + i * 500,
  priceText: `₮${9000 + i * 500}₮`,
  image: i % 2 === 0 ? "/Group.svg" : "/Group2.svg",
  rating: 4 + (i % 2),
  category: i % 2 === 0 ? "Түгээмэл" : "Онцгой",
}));

const BayruudList = () => {
  const params = useParams();
  const id = params?.id || "";
  const bayr = bayruud.find((b) => b.id === id);

  const [activeTab, setActiveTab] = useState("Бүгд");
  const [sortBy, setSortBy] = useState("name-asc");

  const filteredProducts = useMemo(() => {
    if (activeTab === "Бүгд") return mockProducts;
    return mockProducts.filter((p) => p.category === activeTab);
  }, [activeTab]);

  const sortedProducts = useMemo(() => {
    let products = [...filteredProducts];
    switch (sortBy) {
      case "name-asc":
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return products.sort((a, b) => b.name.localeCompare(a.name));
      case "price-asc":
        return products.sort((a, b) => a.price - b.price);
      case "price-desc":
        return products.sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  }, [filteredProducts, sortBy]);

  return (
    <div className="w-full max-w-[1400px] px-4 py-10 mx-auto">
      {/* 🎉 Celebration Header */}
{bayr && (
  <div className="relative bg-gradient-to-r from-[#fdf2f8] to-[#fff7ed] rounded-3xl p-8 pl-36 sm:pl-44 mb-10 shadow-md">
    <div className="absolute top-1/2 left-6 sm:left-10 -translate-y-1/2 w-[90px] sm:w-[120px] h-[90px] sm:h-[120px] rounded-full bg-white shadow-lg p-2 flex items-center justify-center">
      <Image
        src={bayr.img}
        alt={bayr.title}
        width={100}
        height={100}
        className="object-contain w-full h-full"
      />
    </div>
    <div className="pt-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{bayr.title}</h1>
      <p className="text-gray-600 mt-2">{bayr.subtitle}</p>
    </div>
  </div>
)}


      {/* Tabs and sorting */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex gap-4">
          {["Бүгд", "Түгээмэл", "Онцгой"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                activeTab === tab
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div>
          <label htmlFor="sort" className="mr-2 font-medium text-gray-700">
            Эрэмбэлэх:
          </label>
          <select
            id="sort"
            className="border border-gray-300 rounded px-3 py-1 text-gray-700"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="name-asc">Нэр (А-Я)</option>
            <option value="name-desc">Нэр (Я-А)</option>
            <option value="price-asc">Үнэ (Багаас их)</option>
            <option value="price-desc">Үнэ (Ихээс бага)</option>
          </select>
        </div>
      </div>

      {/* Product list */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {sortedProducts.map((product) => (
          <div key={product.id} className="border rounded-xl p-4 text-center hover:shadow transition">
            <div className="w-full h-[150px] bg-gray-100 rounded mb-3 flex items-center justify-center">
              <Image src={product.image} alt={product.name} width={100} height={100} />
            </div>
            <p className="font-medium text-sm">{product.name}</p>
            <p className="text-xs text-gray-500">{product.category}</p>
            <p className="text-sm mt-1">{product.priceText}</p>
            <div className="text-yellow-400 text-xs mt-1">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BayruudList;

"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const mockProducts = new Array(20).fill(null).map((_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: 9000 + i * 500,
  priceText: `₮${9000 + i * 500}₮`,
  image: i % 2 === 0 ? "/Group.svg" : "/Group2.svg",
  rating: 5,
  category: i % 2 === 0 ? "Түгээмэл" : "Онцгой",
}));

const SpecialShops2 = ({
  id,
  title = "Default Store Title",
  img = "/Group.svg",
}) => {
  const [activeTab, setActiveTab] = useState("Бүгд");
  const [sortBy, setSortBy] = useState("name-asc");
  const [followerCount, setFollowerCount] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);

  // Load follower count and follow status on mount
  useEffect(() => {
    if (typeof window !== "undefined" && id != null) {
      const storageKey = "shopFollowerCounts";
      const followKey = "shopFollowStatus";

      const storedCounts = localStorage.getItem(storageKey);
      const counts = storedCounts ? JSON.parse(storedCounts) : {};
      const key = String(id);
      const currentCount = counts[key] ?? 6451;

      const storedFollowStatus = localStorage.getItem(followKey);
      const followStatus = storedFollowStatus ? JSON.parse(storedFollowStatus) : {};

      setFollowerCount(currentCount);
      setIsFollowing(!!followStatus[key]);
    }
  }, [id]);

  // Toggle follow/unfollow
  const handleFollowToggle = () => {
    if (typeof window === "undefined" || !id) return;

    const storageKey = "shopFollowerCounts";
    const followKey = "shopFollowStatus";
    const key = String(id);

    const storedCounts = localStorage.getItem(storageKey);
    const counts = storedCounts ? JSON.parse(storedCounts) : {};
    const storedFollowStatus = localStorage.getItem(followKey);
    const followStatus = storedFollowStatus ? JSON.parse(storedFollowStatus) : {};

    if (isFollowing) {
      // Unfollow logic
      const updatedCount = (counts[key] ?? 6451) - 1;
      counts[key] = Math.max(0, updatedCount);
      delete followStatus[key];
      setIsFollowing(false);
      setFollowerCount(counts[key]);
    } else {
      // Follow logic
      const updatedCount = (counts[key] ?? 6451) + 1;
      counts[key] = updatedCount;
      followStatus[key] = true;
      setIsFollowing(true);
      setFollowerCount(updatedCount);
    }

    localStorage.setItem(storageKey, JSON.stringify(counts));
    localStorage.setItem(followKey, JSON.stringify(followStatus));
  };

  const filteredProducts = useMemo(() => {
    if (activeTab === "Бүгд") return mockProducts;
    return mockProducts.filter((p) => p.category === activeTab);
  }, [activeTab]);

  const sortedProducts = useMemo(() => {
    let products = [...filteredProducts];
    switch (sortBy) {
      case "name-asc":
        products.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        products.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        products.sort((a, b) => b.price - a.price);
        break;
    }
    return products;
  }, [filteredProducts, sortBy]);

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-white">
      <Header />

      {/* Banner */}
      <div className="w-full h-[200px] relative">
        <Image src={img} alt="banner" fill style={{ objectFit: "cover" }} priority />
      </div>

      {/* Store Header */}
      <div className="w-full max-w-[1400px] px-8 mt-[-50px] z-10 relative">
        <div className="bg-white p-6 rounded-xl shadow-lg flex items-center gap-6">
          <div className="w-[120px] h-[120px] rounded-full border border-gray-300 overflow-hidden relative">
            <Image src={img} alt="store logo" fill style={{ objectFit: "cover" }} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-gray-500">
              {followerCount !== null
                ? `${followerCount.toLocaleString()} Дагагчтай`
                : "Ачааллаж байна..."}
            </p>
            <button
              onClick={handleFollowToggle}
              className={`mt-2 px-5 py-1 rounded-full border transition font-semibold
                ${
                  isFollowing
                    ? "border-green-600 bg-green-100 text-green-700 hover:bg-green-200"
                    : "border-black text-black hover:bg-black hover:text-white"
                }`}
            >
              {isFollowing ? "Дагаж байна" : "Дагах"}
            </button>
          </div>
        </div>

        {/* Tabs & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6 pb-12">
          {sortedProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-xl p-4 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="w-full h-[150px] bg-gray-100 flex items-center justify-center rounded relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
              <h2 className="mt-4 font-semibold text-sm">{product.name}</h2>
              <p className="text-xs text-gray-400 mt-1">{product.category}</p>
              <p className="mt-2 text-sm">{product.priceText}</p>
              <div className="text-yellow-400 text-xs mt-1">
                {"★".repeat(product.rating)}
                {"☆".repeat(5 - product.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SpecialShops2;

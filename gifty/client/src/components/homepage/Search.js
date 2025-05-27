"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { Header } from "@/components/Header";
import Footer from "../Footer";
import CategorySidebar from "./CategorySidebar";
import { SpecialShops } from "./SpecialShops";

import ProductButton from "../buttons/product_button";
import ProductButtonLong from "../buttons/product_button_long";
import ProductButtonSpecial from "../buttons/product_button_special";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("http://localhost:5001/api/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query)
  );

  const mappedProducts = filteredProducts.map((p) => ({
    storeName: "Dummy Store",
    category: "Category",
    storeImg: "Group.svg",
    productImg: "Group.svg",
    productName: p.name || "No Name",
    productPrice: `${p.price?.toLocaleString()}₮` || "Unknown",
    ratings: "0",
    rate: 1,
  }));

  return (
    <div className="overflow-x-hidden overflow-y-hidden flex flex-col items-center gap-[20px]">
      <Header />

      <div className="w-screen h-[50px]" />

      <div className="flex justify-center mt-[40px] px-4 w-full">
        <div className="w-full max-w-[1575px] flex flex-col lg:flex-row gap-6">
          <div className="w-full max-lg:flex justify-center">
            <CategorySidebar />
          </div>

          <div className="w-full lg:w-[calc(100%-343px-24px)] flex flex-col gap-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
              <div>
                <div className="text-[24px] md:text-[32px] font-medium">Илэрц</div>
                <div className="text-[14px] md:text-[16px] font-light text-[#6D5B67]">
                  Хайлтын илэрц {filteredProducts.length} бараа
                </div>
              </div>

              <div className="w-full md:w-[160px] h-[50px] border border-[#6D5B67] rounded-full px-4 flex items-center">
                <select className="w-full text-[16px] font-light bg-transparent focus:outline-none">
                  <option value="latest">Шинэ нь эхэнд</option>
                  <option value="oldest">Хуучин нь эхэнд</option>
                  <option value="price_high">Үнэтэй нь эхэнд</option>
                  <option value="price_low">Хямд нь эхэнд</option>
                  <option value="ratings">Үнэлгээ</option>
                </select>
              </div>
            </div>
            <div className="w-screen flex justify-center">
              <div className="w-[1575px]">
                <div className="font-bold text-[32px] w-full h-[50px] mb-[15px] max-sm:flex max-sm:justify-center">
                  Бүтээгдэхүүн
                </div>
                <div className="flex w-full gap-[39px] flex-wrap justify-center max-sm:gap-[10px]">
                  {mappedProducts.length > 0 ? (
                    mappedProducts.map((product, i) => {
                      if (i === 0 || i === mappedProducts.length - 1) {
                        return <ProductButtonLong key={i} {...product} />;
                      }
                      if (i % 5 === 0) {
                        return <ProductButtonSpecial key={i} {...product} />;
                      }
                      return <ProductButton key={i} {...product} />;
                    })
                  ) : (
                    <p>Хайлт тохирох бүтээгдэхүүн олдсонгүй.</p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <div className="w-full overflow-y-hidden overflow-x-auto scroll-smooth custom-scrollbar snap-x h-[260px] max-md:h-[200px] max-sm:h-[150px]">
                <div className="flex gap-[19px] flex-nowrap">
                  {[...Array(7)].map((_, index) => (
                    <div key={index} className="snap-start"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* SpecialShops */}
            <div className="w-full flex justify-center mt-10">
              <div className="w-[1500px] max-w-full">
                <SpecialShops />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Header } from "@/components/Header";
import Footer from "../Footer";
import { SpecialShops } from "./SpecialShops";
import OccasionButton from "../buttons/occasion_button";
import ProductButtonLong from "../buttons/product_button_long";
import ProductButton from "../buttons/product_button";
import ProductButtonSpecial from "../buttons/product_button_special";

const occasions = [
  { name: "Valentine’s Day", date: "02.14", img: "/bayruud/valentine.png", link: "/bayruud/18" },
  { name: "Цагаан сар", date: "03.01 - 03.05", img: "/bayruud/tsagaan.png", link: "/bayruud/11" },
  { name: "Март 8", date: "03.08", img: "/bayruud/mart.png", link: "/bayruud/12" },
  { name: "Цэргийн баяр", date: "03.18", img: "/bayruud/soldier_day.png", link: "/bayruud/13" },
  { name: "Хүүхдийн баяр", date: "06.01", img: "/bayruud/kid_day.png", link: "/bayruud/14" },
  { name: "Наадам", date: "07.11 - 07.15", img: "/bayruud/naadam.png", link: "/bayruud/17" },
  { name: "Halloween", date: "10.31", img: "/bayruud/halloween.png", link: "/bayruud/16" },
  { name: "Christmas", date: "12.25", img: "/bayruud/christmas.png", link: "/bayruud/15" },
  { name: "New Year", date: "12.31", img: "/bayruud/new_year.png", link: "/bayruud/15" },
];

export const HomePage = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    (async () => {
      try {
        const res = await fetch("http://localhost:5001/api/products");
        if (!res.ok) throw new Error("Продукт татахад алдаа гарлаа");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    })();
  }, []);

  // Map real product data to match UI component props with dummy filler
  const mappedProducts = products.map((p) => ({
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
      <div className="w-screen h-[30px]" />

      {user?.isAdmin && (
        <>
          <button
            onClick={() => router.push("/add-store")}
            className="bg-pink-400 text-black py-2 px-5 rounded cursor-pointer mt-[80px] mb-[-20px]"
          >
            ➕ Дэлгүүр нэмэх
          </button>
          <button
            onClick={() => router.push("/add-product")}
            className="bg-pink-400 text-black py-2 px-5 rounded cursor-pointer mt-2"
          >
            ➕ Бүтээгдэхүүн нэмэх
          </button>
        </>
      )}

      <div className="flex justify-center">
        <img src="Valentine.svg" alt="Valentine" />
      </div>

      {/* Bayruud */}
      <div>
        <div className="w-[1870px] h-[500px] flex gap-[27px] overflow-x-auto scroll-smooth custom-scrollbar max-lg:gap-[14px] max-lg:w-[1024px] max-lg:h-[370px] max-md:gap-[12px] max-md:w-[768px] max-sm:gap-[8px] max-sm:w-[640px] max-sm:h-[265px]">
          {occasions.map(({ name, date, img, link }) => (
            <OccasionButton
              key={name}
              occasionName={name}
              date={date}
              occasionImg={img}
              link={link}
            />
          ))}
        </div>
      </div>

      {/* Delguuruud */}
      <SpecialShops />

      {/* Categories */}
      {[mappedProducts, mappedProducts.slice(0, 10), mappedProducts.slice(0, 2)].map(
        (categoryProducts, idx) => {
          const isSpecial = idx === 1;
          const title = "Category";

          return (
            <div key={idx} className="w-screen flex justify-center">
              <div className="w-[1575px]">
                <div className="font-bold text-[32px] w-full h-[50px] mb-[15px] max-sm:flex max-sm:justify-center">
                  {title}
                </div>
                <div className="flex w-full gap-[39px] flex-wrap justify-center max-sm:gap-[10px]">
                  {categoryProducts.map((product, i) => {
                    if (isSpecial) {
                      return <ProductButtonSpecial key={i} {...product} />;
                    }
                    if ((idx === 0 && i === 0) || i === categoryProducts.length - 1) {
                      return <ProductButtonLong key={i} {...product} />;
                    }
                    return <ProductButton key={i} {...product} />;
                  })}
                </div>
              </div>
            </div>
          );
        }
      )}

      <Footer />
    </div>
  );
};

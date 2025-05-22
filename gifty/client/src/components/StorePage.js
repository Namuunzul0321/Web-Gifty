"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ProductButton,
  ProductButtonLong,
  ProductButtonSpecial,
} from "@/components/buttons";
import OccasionButton from "@/components/buttons/occasion_button";
import { SpecialShops } from "@/components/SpecialShops";

type Product = {
  storeName: string;
  category: string;
  storeImg: string;
  productImg: string;
  productName: string;
  productPrice: string;
  ratings: string;
  rate: number;
};

export const HomePage = () => {
  const [user, setUser] = useState<{ isAdmin?: boolean } | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/products");
        if (!res.ok) throw new Error("Продукт татахад алдаа гарлаа");
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddShop = () => router.push("/add-store");
  const handleAddProduct = () => router.push("/add-product");

  const dummyProducts: Product[] = Array(10).fill({
    storeName: "Store Name",
    category: "Category",
    storeImg: "Group.svg",
    productImg: "Group.svg",
    productName: "Product Name",
    productPrice: "1’000",
    ratings: "0",
    rate: 1,
  });

  const productsToShow = products.length ? products : dummyProducts;

  return (
    <div className="overflow-x-hidden overflow-y-hidden flex flex-col items-center gap-5">
      <Header />
      <div className="w-screen h-[30px]" />

      {user?.isAdmin && (
        <>
          <button
            onClick={handleAddShop}
            className="bg-pink-400 text-black py-2 px-5 rounded cursor-pointer mt-20 mb-[-20px]"
          >
            ➕ Дэлгүүр нэмэх
          </button>
          <button
            onClick={handleAddProduct}
            className="bg-pink-400 text-black py-2 px-5 rounded cursor-pointer mt-2"
          >
            ➕ Бүтээгдэхүүн нэмэх
          </button>
        </>
      )}

      <div className="flex justify-center">
        <img src="Valentine.svg" alt="Valentine" />
      </div>

      <div className="w-full overflow-x-auto flex gap-7 px-4 max-w-[1870px] max-lg:max-w-[1024px] max-md:max-w-[768px] max-sm:max-w-[640px]">
        <OccasionButton
          occasionName="Valentine’s Day"
          date="02.14"
          occasionImg="/bayruud/valentine.png"
          link="/bayruud/18"
        />
        {/* ...other OccasionButtons */}
      </div>

      <SpecialShops />

      <div className="w-screen flex justify-center">
        <div className="max-w-[1575px] w-full">
          <div className="font-bold text-2xl mb-4 text-center">Category</div>
          <div className="flex flex-wrap justify-center gap-10 max-sm:gap-4">
            {productsToShow.map((product, i) =>
              i % 2 === 0 ? (
                <ProductButtonLong
                  key={i}
                  storeName={product.storeName}
                  category={product.category}
                  storeImg={product.storeImg}
                  productImg={product.productImg}
                  productName={product.productName}
                  productPrice={product.productPrice}
                  ratings={product.ratings}
                  rate={product.rate}
                />
              ) : (
                <ProductButton
                  key={i}
                  storeName={product.storeName}
                  category={product.category}
                  storeImg={product.storeImg}
                  productImg={product.productImg}
                  productName={product.productName}
                  productPrice={product.productPrice}
                  ratings={product.ratings}
                  rate={product.rate}
                />
              )
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

"use client";
import { Angilal } from "@/components/homepage/Angilal";
import { Header } from "@/components/Header";
import Footer from "../Footer";
import StoreButtonWithoutBorder from "../buttons/store_button_without_border";
import ProductButtonLong from "../buttons/product_button_long";
import ProductButton from "../buttons/product_button";
import ProductButtonSpecial from "../buttons/product_button_special";
import OccasionButton from "../buttons/occasion_button";
import { SpecialShops } from "./SpecialShops";
import { BayruudList } from "./BayruudList";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AddProduct from "../AddProducts";

export const HomePage = () => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Продуктуудыг серверээс татах
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/products");
        if (!res.ok) throw new Error("Продукт татахад алдаа гарлаа");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddShop = () => {
    router.push("/add-store");
  };

  const handleAddProduct = () => {
    router.push("/add-product");
  };
  return (
    <div className="overflow-x-hidden overflow-y-hidden flex flex-col items-center gap-[20px]">
      <Header />
      <div className="w-screen h-[30px]"></div>
      {user?.isAdmin && (
        <button
          onClick={handleAddShop}
          style={{
            backgroundColor: "pink",
            color: "black",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "80px",
            marginBottom: "-20px",
          }}
        >
          ➕ Дэлгүүр нэмэх
        </button>
      )}
      {user?.isAdmin && (
        <button
          onClick={handleAddProduct}
          style={{
            backgroundColor: "pink",
            color: "black",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          ➕ Бүтээгдэхүүн нэмэх
        </button>
      )}
      
      <div className="flex justify-center">
        <img src="Valentine.svg" />
      </div>

      {/* Bayruud */}
      <div>
        <div className="w-[1870px] h-[500px] flex gap-[27px] overflow-x-auto scroll-smooth custom-scrollbar max-lg:gap-[14px] max-lg:w-[1024px] max-lg:h-[370px] max-md:gap-[12px] max-md:w-[768px] max-sm:gap-[8px] max-sm:w-[640px] max-sm:h-[265px]">
          <OccasionButton
            occasionName="Valentine’s Day"
            date="02.14"
            occasionImg="/bayruud/valentine.png"
            link="/bayruud/10"
          />
          <OccasionButton
            occasionName="Цагаан сар"
            date="03.01 - 03.05"
            occasionImg="/bayruud/tsagaan.png"
            link="/bayruud/11"
          />
          <OccasionButton
            occasionName="Март 8"
            date="03.08"
            occasionImg="/bayruud/mart.png"
            link="/bayruud/12"
          />
          <OccasionButton
            occasionName="Цэргийн баяр"
            date="03.18"
            occasionImg="/bayruud/soldier_day.png"
            link="/bayruud/13"
          />
          <OccasionButton
            occasionName="Хүүхдийн баяр"
            date="06.01"
            occasionImg="/bayruud/kid_day.png"
            link="/bayruud/14"
          />
          <OccasionButton
            occasionName="Наадам"
            date="07.11 - 07.15"
            occasionImg="/bayruud/naadam.png"
            link="/bayruud/15"
          />
          <OccasionButton
            occasionName="Halloween"
            date="10.31"
            occasionImg="/bayruud/halloween.png"
            link="/bayruud/16"
          />
          <OccasionButton
            occasionName="Christmas"
            date="12.25"
            occasionImg="/bayruud/christmas.png"
            link="/bayruud/17"
          />
          <OccasionButton
            occasionName="New Year"
            date="12.31"
            occasionImg="/bayruud/new_year.png"
            link="/bayruud/18"
          />
        </div>
      </div>
      {/* Delguuruud */}

      <SpecialShops />

      {/* Category */}
      <div className="w-screen flex justify-center">
        <div className="w-[1575px]">
          <div className="font-bold text-[32px] w-full h-[50px] mb-[15px] max-sm:flex max-sm:justify-center">
            Category
          </div>
          <div className="flex w-full gap-[39px] flex-wrap justify-center max-sm:gap-[10px]">
            <ProductButtonLong
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButtonLong
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
          </div>
        </div>
      </div>
      {/* Category 2*/}
      <div className="w-screen flex justify-center">
        <div className="w-[1575px]">
          <div className="font-bold text-[32px] w-full h-[50px] mb-[15px] max-sm:flex max-sm:justify-center">
            Category
          </div>
          <div className="flex w-full gap-[39px] flex-wrap justify-center max-sm:gap-[10px]">
            <ProductButtonSpecial
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButtonSpecial
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
          </div>
        </div>
      </div>
      {/* Category 3*/}
      <div className="w-screen flex justify-center">
        <div className="w-[1575px]">
          <div className="font-bold text-[32px] w-full h-[50px] mb-[15px] max-sm:flex max-sm:justify-center">
            Category
          </div>
          <div className="flex w-full gap-[39px] flex-wrap justify-center max-sm:gap-[10px]">
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
            <ProductButton
              storeName="Store Name"
              category="Category"
              storeImg="Group.svg"
              productImg="Group.svg"
              productName="Product Name"
              productPrice="1’000"
              ratings="0"
              rate={1}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

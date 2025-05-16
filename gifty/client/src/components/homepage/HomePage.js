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
import { Navigation } from "./Navigation";


export const HomePage = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden flex flex-col items-center gap-[20px]">
      <Header />
      <div className="w-screen h-[30px]"></div>
      
      <div className="flex justify-center">
        <img src="Valentine.svg" />
      </div>

      {/* Bayruud */}
      <div>
        <div className="w-[1870px] h-[500px] flex gap-[27px] overflow-x-auto scroll-smooth custom-scrollbar max-lg:gap-[14px] max-lg:w-[1024px] max-lg:h-[370px] max-md:gap-[12px] max-md:w-[768px] max-sm:gap-[8px] max-sm:w-[640px] max-sm:h-[265px]">
          <OccasionButton
            occasionName="Valentines day"
            date="02.14"
            occasionImg="/bayruud/valentine.png"
            link=""
          />
          <OccasionButton
            occasionName="цагаан сар"
            date="03.01 - 03.05"
            occasionImg="/bayruud/tsagaan.png"
            link=""
          />
          <OccasionButton
            occasionName="март 8"
            date="03.08"
            occasionImg="/bayruud/mart.png"
            link=""
          />
          <OccasionButton
            occasionName="цэргийн баяр"
            date="03.18"
            occasionImg="/bayruud/soldier_day.png"
            link=""
          />
          <OccasionButton
            occasionName="хүүхдийн баяр"
            date="06.01"
            occasionImg="/bayruud/kid_day.png"
            link=""
          />
          <OccasionButton
            occasionName="наадам"
            date="07.11 - 07.15"
            occasionImg="/bayruud/naadam.png"
            link=""
          />
          <OccasionButton
            occasionName="halloween"
            date="10-31"
            occasionImg="/bayruud/halloween.png"
            link=""
          />
          <OccasionButton
            occasionName="christmas"
            date="12.25"
            occasionImg="/bayruud/christmas.png"
            link=""
          />
          <OccasionButton
            occasionName="new year"
            date="12.31"
            occasionImg="/bayruud/new_year.png"
            link=""
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
      <div className="hidden w-screen h-[100  px] max-md:block"></div>
    </div>
  );
};

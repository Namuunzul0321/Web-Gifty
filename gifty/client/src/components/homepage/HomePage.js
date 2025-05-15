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

export const HomePage = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden flex flex-col gap-[20px]">
      <Header />
      <Angilal />
      <div className="w-screen h-[90px]"></div>
      <div>
        <img src="Valentine.svg" />
      </div>
      {/* Bayruud */}
<div className="w-screen h-[485px] flex justify-center">
  <div className="w-[1870px] h-full flex gap-[27px] overflow-x-auto whitespace-nowrap no-scrollbar">
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
          <div className="font-bold text-[32px] w-full h-[50px] mb-[15px]">
            Category
          </div>
          <div className="flex w-full gap-[39px] flex-wrap">
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
          <div className="font-bold text-[32px] w-full h-[50px] mb-[15px]">
            Category
          </div>
          <div className="flex w-full gap-[39px] flex-wrap">
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
          <div className="font-bold text-[32px] w-full h-[50px] mb-[15px]">
            Category
          </div>
          <div className="flex w-full gap-[39px] flex-wrap">
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

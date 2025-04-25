"use client";
import { Angilal } from "@/components/homepage/Angilal";
import { Header } from "@/components/Header";
import Footer from "../Footer";
import StoreButtonWithoutBorder from "../buttons/store_button_without_border";
import ProductButtonLong from "../buttons/product_button_long";
import ProductButton from "../buttons/product_button";
import ProductButtonSpecial from "../buttons/product_button_special";
import OccasionButton from "../buttons/occasion_button";

export const HomePage = () => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden flex flex-col gap-[20px]">
        <Header />
        <Angilal />

        <div className="w-screen h-[90px]"></div>

        <div>
          <img src="Valentine.svg"/>
        </div>  

        {/* Bayruud */}
        <div className="w-screen h-[485px] flex justify-center">
          <div className="w-[1870px] h-full flex gap-[27px] overflow-x-auto whitespace-nowrap no-scrollbar">
              <OccasionButton
                occasionName = "Valentines day"
                date = "02.14"
                occasionImg = "/bayruud/valentine.png"
                link = ""
              />
              <OccasionButton
                occasionName = "цагаан сар"
                date = "03.01 - 03.05"
                occasionImg = "/bayruud/tsagaan.png"
                link = ""
              />
              <OccasionButton
                occasionName = "март 8"
                date = "03.08"
                occasionImg = "/bayruud/mart.png"
                link = ""
              />
              <OccasionButton
                occasionName = "цэргийн баяр"
                date = "03.18"
                occasionImg = "/bayruud/soldier_day.png"
                link = ""
              />
              <OccasionButton
                occasionName = "хүүхдийн баяр"
                date = "06.01"
                occasionImg = "/bayruud/kid_day.png"
                link = ""
              />
              <OccasionButton
                occasionName = "наадам"
                date = "07.11 - 07.15"
                occasionImg = "/bayruud/naadam.png"
                link = ""
              />
              <OccasionButton
                occasionName = "halloween"
                date = "10-31"
                occasionImg = "/bayruud/halloween.png"
                link = ""
              />
              <OccasionButton
                occasionName = "christmas"
                date = "12.25"
                occasionImg = "/bayruud/christmas.png"
                link = ""
              />
              <OccasionButton
                occasionName = "new year"
                date = "12.31"
                occasionImg = "/bayruud/new_year.png"
                link = ""
              />
          </div>
        </div>

        {/* Delguuruud */}
        <div className="w-screen h-[292px] flex justify-center">
          <div className="w-[1575px] h-full">
            <div className="font-bold text-[32px] w-full h-[50px] mb-[15px]">
              Онцгой дэлгүүр
            </div>
            <div className="w-full h-auto flex gap-[15px] justify-center items-center">
              <StoreButtonWithoutBorder
                storeName="Godiva"
                followerCount="6451 Дагагчтай"
                imgSrc="/Store1.svg"
              />
              <StoreButtonWithoutBorder
                storeName="Gobi Cashmere"
                followerCount="6451 Дагагчтай"
                imgSrc="/Store2.svg"
              />
              <StoreButtonWithoutBorder
                storeName="Converse"
                followerCount="6451 Дагагчтай"
                imgSrc="/Store3.svg"
              />
              <StoreButtonWithoutBorder
                storeName="ASUS"
                followerCount="6451 Дагагчтай"
                imgSrc="/Store4.svg"
              />
              <StoreButtonWithoutBorder
                storeName="Nestle"
                followerCount="6451 Дагагчтай"
                imgSrc="/Store5.svg"
              />
              <StoreButtonWithoutBorder
                storeName="NIKE"
                followerCount="6451 Дагагчтай"
                imgSrc="/Store7.svg"
              />
              <StoreButtonWithoutBorder
                storeName="Pandora"
                followerCount="6451 Дагагчтай"
                imgSrc="/Store6.svg"
              />
              <StoreButtonWithoutBorder
                storeName="Golden Gobi"
                followerCount="6451 Дагагчтай"
                imgSrc="/Store8.svg"
              />
            </div>
          </div>
        </div>

        {/* Category */}
        <div className="w-screen flex justify-center">
          <div className="w-[1575px]">
            <div className="font-bold text-[32px] w-full h-[50px] mb-[15px]">
              Category
            </div>
            <div className="flex w-full gap-[39px] flex-wrap">
              <ProductButtonLong 
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButtonLong 
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
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
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButtonSpecial 
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
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
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton 
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton 
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton 
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton 
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton 
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton 
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton 
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton 
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton 
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton 
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
              <ProductButton 
                storeName = "Store Name"
                category = "Category"
                storeImg = "Group.svg"
                productImg = "Group.svg"
                productName = "Product Name"
                productPrice = "1’000"
                ratings = "0"
                rate = {1}
              />
            </div>
          </div>
        </div>

        <Footer />
    </div>
  );
};

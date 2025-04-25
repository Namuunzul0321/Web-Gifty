"use client";
import React from "react";
import { Header } from "./Header";
import { Angilal } from "./homepage/Angilal";
import Footer from "./Footer";
import StoreButton from "./buttons/store_button";
import ProductButton from "./buttons/product_button";
import ProductButtonLong from "./buttons/product_button_long";
import ProductButtonSpecial from "./buttons/product_button_special";
import StoreButtonWithoutBorder from "./buttons/store_button_without_border";

export const StorePage = ({
  storeCoverImg = "",
  storeImg = "",
  storeName = "Store Name",
  storeTag = "storeTag",
  followers = 0,
}) => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden flex flex-col gap-[20px]">
        <Header />
        <Angilal />

        <div className="w-screen h-[90px]"></div>

        <div className="w-screen h-[315px] border-b border-b-[#6D5B67]">
          <img src="Group2.svg" className="w-full h-full object-cover"></img>
        </div>

        <div className="flex justify-center">
          <div className="w-[1575px] flex flex-col gap-[15px]">  
            <div className="flex">
              <div className="w-[167px] h-[167px] border border-[#6D5B67] rounded-full overflow-hidden flex justify-center items-center">
                {storeImg && <img src={storeImg}/>}
              </div>
              <div className="ml-[45px] flex flex-col justify-between">
                <div className="flex flex-col">
                  <div className="font-bold text-[36px] h-[50px]">{storeName}</div>
                  <div className="font-light text-[16px]">@{storeTag}</div>
                </div>
                <div className="text-[20px]">{followers} Дагагчтай</div>
                <button className="w-[107px] h-[43px] border border-[#6D5B67] rounded-full text-[16px] cursor-pointer transition duration-100 hover:bg-[rgba(0,0,0,0.1)] active:bg-[rgba(0,0,0,0.2)]">Дагах</button>
              </div>
            </div>
            <div className="w-full h-[43px] border-b border-b-[#6D5B67] flex gap-[36px]">
              <button className="w-[60px] h-[43px] text-[16px] text-[#6D5B67] text-center border-b-[3px] border-b-[rgba(109,91,103,0)] cursor-pointer transition duration-100 hover:border-b-[3px] hover:border-b-[#6D5B67]">Home</button>
              <button className="w-[94px] h-[43px] text-[16px] text-[#6D5B67] text-center border-b-[3px] border-b-[rgba(109,91,103,0)] cursor-pointer transition duration-100 hover:border-b-[3px] hover:border-b-[#6D5B67]">Product</button>
            </div>
            <div className="flex flex-col gap-[15px]">
              <div>
                <button className="w-[782px] h-[310px] border flex justify-center">
                  <img src="Group2.svg"></img>
                </button>
              </div>
            </div>
          </div>
        </div>



        {/* <Footer /> */}
    </div>
  );
};
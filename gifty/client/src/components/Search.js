"use client";
import React from "react";
import { useState } from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import StoreButton from "./buttons/store_button";
import ProductButton from "./buttons/product_button";
import CategorySidebar from "./CategorySidebar";

export const Search = ({

}) => {

  const categories = [
    {
      id: 1,
      name: "Электрон бараа",
      subcategories: ["Гар утас", "Зөөврийн компьютер", "ТВ"],
    },
    {
      id: 2,
      name: "Хувцас",
      subcategories: ["Эрэгтэй", "Эмэгтэй", "Хүүхдийн"],
    },
    {
      id: 3,
      name: "Ном",
      subcategories: ["Шинжлэх ухаан", "Уран зохиол", "Түүх"],
    },
  ];

  const [expandedId, setExpandedId] = useState(null); 
 
  const handleToggle = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <div className="overflow-x-hidden overflow-y-hidden flex flex-col gap-[20px]">
        <Header />
        <div className="w-screen h-[50px]"></div>

        <div className="flex justify-center mt-[40px] px-4">
            <div className="w-full max-w-[1575px] flex flex-col lg:flex-row gap-6">
                {/* Left */}
                <div className="w-full max-lg:flex justify-center">
                  <CategorySidebar/>
                </div>
                {/* Right */}
                <div className="w-full lg:w-[calc(100%-343px-24px)]">
                  {/* Title, Filter */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                      <div className="text-[24px] md:text-[32px] font-medium">Илэрц</div>
                      <div className="text-[14px] md:text-[16px] font-light text-[#6D5B67]">Хайлтын илэрц 999 бараа</div>
                    </div>

                    {/* Filter */}
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

                  {/* Retailers */}
                  <div className="mb-[10px]">
                    <div className="text-[24px] md:text-[32px] font-medium mb-[15px] max-sm:flex max-sm:justify-center">Дэлгүүр</div> 
                      <div className="w-full overflow-y-hidden overflow-x-auto scroll-smooth custom-scrollbar snap-x h-[260px] max-md:h-[200px] max-sm:h-[150px]">
                        <div className="flex gap-[19px] flex-nowrap">
                          {[...Array(7)].map((_, index) => (
                            <div key={index} className="snap-start">
                              <StoreButton />
                            </div>
                          ))}
                        </div>
                      </div>
                  </div>

                  {/* Products */}
                  <div>
                    <div className="text-[24px] md:text-[32px] font-medium mb-[15px] max-sm:flex max-sm:justify-center">Бүтээгдэхүүн</div>
                    <div className="flex w-full gap-[13.5px] flex-wrap justify-center max-sm:gap-[10px]">
                      {[...Array(10)].map((_, index) => (
                       <ProductButton key={index} />
                      ))}
                    </div>
                  </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  );
};
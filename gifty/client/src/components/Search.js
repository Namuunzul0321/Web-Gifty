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
        <div className="w-screen "></div>

        <div className="flex justify-center mt-[80px]">
            <div className="w-[1575px] h-auto flex justify-between">
                {/* Left */}
                <div className="w-[343px] h-auto">
                  <CategorySidebar/>
                </div>
                {/* Right */}
                <div className="w-[1200px] h-auto">
                  {/* Title, Filter */}
                  <div className="flex justify-between mb-[10px]">
                    <div>
                      <div className="text-[32px] font-medium">Илэрц</div>
                      <div className="text-[16px] font-light text-[#6D5B67]">Хайлтын илэрц 999 бараа</div>
                    </div>

                    <div className="w-[160px] h-[50px] border border-[#6D5B67] rounded-full pl-[10px] pr-[10px] flex items-center justify-center">
                      <select className="text-[16px] font-light flex items-center">
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
                    <div className="text-[32px] font-medium mb-[15px] ">Дэлгүүр</div> 
                      <div className="w-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x h-[280px]">
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
                  <div className="h-auto">
                    <div className="text-[32px] font-medium mb-[15px]">Бүтээгдэхүүн</div>
                    <div className="flex flex-wrap gap-[13.5px]">
                      {[...Array(10)].map((_, index) => (
                        <div key={index} className="snap-start">
                          <ProductButton/>
                        </div>
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
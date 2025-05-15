"use client";
import React from "react";
import { Header } from "../Header";
import { Angilal } from "../homepage/Angilal";
import Footer from "../Footer";
import { CategoryHusnegt } from "../homepage/CategoryHusnegt";

export const Valentine = () => {
  return (
    <div>
      <Header />
      <Angilal />
      <div>
        <div className="h-[300px] bg-pink-200 flex justify-center items-center">
          IMG
        </div>
        <div className="w-full flex flex-col items-center ">
          <div className="text-[30px] font-bold mb-[50px]">Valentine</div>
          <div className="w- flex gap-[20px] flex-wrap justify-center">
            <CategoryHusnegt
              storeName="Best Shop"
              category="Shoes"
              productName="Nike Air Max"
              price="$120"
              rating={4}
              image={
                <img src="/nike.png" alt="Nike" className="h-full w-[150px]" />
              }
            />
            <CategoryHusnegt
              storeName="Best Shop"
              category="Shoes"
              productName="Nike Air Max"
              price="$120"
              rating={4}
              image={
                <img src="/nike.png" alt="Nike" className="h-full w-[150px]" />
              }
            />
            <CategoryHusnegt
              storeName="Best Shop"
              category="Shoes"
              productName="Nike Air Max"
              price="$120"
              rating={4}
              image={
                <img src="/nike.png" alt="Nike" className="h-full w-[150px]" />
              }
            />
            <CategoryHusnegt
              storeName="Best Shop"
              category="Shoes"
              productName="Nike Air Max"
              price="$120"
              rating={4}
              image={
                <img src="/nike.png" alt="Nike" className="h-full w-[150px]" />
              }
            />
            <CategoryHusnegt
              storeName="Best Shop"
              category="Shoes"
              productName="Nike Air Max"
              price="$120"
              rating={4}
              image={
                <img src="/nike.png" alt="Nike" className="h-full w-[150px]" />
              }
            />
            <CategoryHusnegt
              storeName="Best Shop"
              category="Shoes"
              productName="Nike Air Max"
              price="$120"
              rating={4}
              image={
                <img src="/nike.png" alt="Nike" className="h-full w-[150px]" />
              }
            />
            <CategoryHusnegt
              storeName="Best Shop"
              category="Shoes"
              productName="Nike Air Max"
              price="$120"
              rating={4}
              image={
                <img src="/nike.png" alt="Nike" className="h-full w-[150px]" />
              }
            />
            <CategoryHusnegt
              storeName="Best Shop"
              category="Shoes"
              productName="Nike Air Max"
              price="$120"
              rating={4}
              image={
                <img src="/nike.png" alt="Nike" className="h-full w-[150px]" />
              }
            />
            <CategoryHusnegt
              storeName="Best Shop"
              category="Shoes"
              productName="Nike Air Max"
              price="$120"
              rating={4}
              image={
                <img src="/nike.png" alt="Nike" className="h-full w-[150px]" />
              }
            />
            <CategoryHusnegt
              storeName="Best Shop"
              category="Shoes"
              productName="Nike Air Max"
              price="$120"
              rating={4}
              image={
                <img src="/nike.png" alt="Nike" className="h-full w-[150px]" />
              }
            />
            <CategoryHusnegt
              storeName="Best Shop"
              category="Shoes"
              productName="Nike Air Max"
              price="$120"
              rating={4}
              image={
                <img src="/nike.png" alt="Nike" className="h-full w-[150px]" />
              }
            />
            <CategoryHusnegt
              storeName="Best Shop"
              category="Shoes"
              productName="Nike Air Max"
              price="$120"
              rating={4}
              image={
                <img src="/nike.png" alt="Nike" className="h-full w-[150px]" />
              }
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

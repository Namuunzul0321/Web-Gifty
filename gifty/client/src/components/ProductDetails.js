"use client";
import React from "react";
import { useState } from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import Comment from "./productDetails/Comment";
import SimilarProductButton from "./buttons/similar_product_button";
import SelectionGrid from "./productDetails/SelectionGrid";
import SelectionTexts from "./productDetails/SelectionTexts";
import PersonalizationForm from "./productDetails/PersonalizationForm";
import ImageDisplay from "./productDetails/imageDisplay";


export const ProductDetails = ({
    rate = 1.5,
    price = 99000,
    storeImg = "",
    followers = 0,
    ratingsAmmount = 0,
}) => {
    return (
    <div className="overflow-x-hidden overflow-y-hidden flex flex-col gap-[20px]">
        <Header />
        <div className="w-screen h-[60px]"></div>

        <div className="flex justify-center pt-[30px]">
            <div className="w-full max-w-[1575px] flex flex-col lg:flex-row justify-between">
                {/* Left side */}
                <div className="w-full lg:w-[906px] flex flex-col gap-[20px]">
                    {/* Display */}
                    <ImageDisplay/>
                    {/* Description */}
                    <div className="w-full h-auto border-t border-t-[#6D5B67] pt-[12px]">
                        {/* Title */}
                        <div className="text-[24px] font-medium mb-[15px]">Бүтээгдэхүүний тайлбар</div>
                        {/* Description */}
                        <div className="text-[18px] font-light mb-[10px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                        </div>
                    </div>
                    {/* Similar items */}
                    <div className="w-full h-auto border-t border-t-[#6D5B67] pt-[12px]">
                        {/* Title */}
                        <div className="text-[24px] font-medium mb-[15px]">Төстэй бүтээгдэхүүнүүд</div>
                        {/* Products */}
                        <div className="flex gap-[15px] flex-wrap">
                           <SimilarProductButton
                                storeName = "Store Name"
                                category = "Category"
                                storeImg = "Group.svg"
                                productImg = "Group.svg"
                                productName = "Product Name"
                                productPrice = "1’000"
                                ratings = "0"
                                 rate = {1}
                            /> 
                            <SimilarProductButton
                                 storeName = "Store Name"
                                 category = "Category"
                                 storeImg = "Group.svg"
                                 productImg = "Group.svg"
                                 productName = "Product Name"
                                 productPrice = "1’000"
                                 ratings = "0"
                                  rate = {1}
                             /> 
                             <SimilarProductButton
                                  storeName = "Store Name"
                                  category = "Category"
                                  storeImg = "Group.svg"
                                  productImg = "Group.svg"
                                  productName = "Product Name"
                                  productPrice = "1’000"
                                  ratings = "0"
                                   rate = {1}
                              /> 
                              <SimilarProductButton
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
                {/* Right Side */}
                <div className="w-full lg:w-[653px]">   
                    {/* Title */}
                    <div className="w-full h-[57px]">
                        <div className="font-medium text-[32px]">Product Title</div>
                    </div>
                    {/* Rating, Buttons */}
                    <div className="w-full h-[68px] border-b border-b-[#6D5B67] flex justify-between">
                        {/* Rating */}
                        <div className="w-[235px] h-[59px] flex items-center gap-[14px]">
                            <div className="flex">
                                {[...Array(5)].map((_, index) => {
                                    const isFull = index + 1 <= rate;
                                    const isHalf = index + 0.5 === rate;

                                    let starSrc = "star_empty.svg";
                                    if (isFull) {
                                    starSrc = "star_filled.svg";
                                    } else if (isHalf) {
                                    starSrc = "star_half.svg"; 
                                    }

                                    return (
                                    <img
                                        key={index}
                                        src={starSrc}
                                        alt="star"
                                        className="w-[35px] h-[35px]"
                                    />
                                    );
                                })}
                            </div>
                            <div className="text-[20px] font-medium text-[#6D5B67]">{rate}</div>
                        </div>
                        {/* Buttons */}
                        <div className="w-[107px] h-full flex items-center justify-between">
                            <button className="w-[48px] h-[48px] border border-[#6D5B67] rounded-full cursor-pointer transition duration-100 hover:bg-[rgba(0,0,0,0.1)] active:bg-[rgba(0,0,0,0.2)] flex justify-center items-center">
                                <img src="heart_line.svg"/>
                            </button>
                            <button className="w-[48px] h-[48px] border border-[#6D5B67] rounded-full cursor-pointer transition duration-100 hover:bg-[rgba(0,0,0,0.1)] active:bg-[rgba(0,0,0,0.2)] flex justify-center pt-[13px]">
                                <img src="share_icon.svg" className="w-[13px] h-[16px]"/>
                            </button>
                        </div>
                    </div>
                    {/* Store */}
                    <div className="w-full h-[81px] border-b border-b-[#6D5B67] flex items-center justify-between">
                        {/* Store */}
                        <div className="w-[400px] h-[50px] flex gap-[20px]">
                            <div className="w-[50px] h-[50px] border border-[#6D5B67] rounded-full">
                                <img src="{storeImg}" alt="StoreImg"/>
                            </div>
                            <div>
                                <div className="font-medium text-[18px]">Store name</div>
                                <div className="font-light text-[#6D5B67] text-[14px]">{followers} Дагагчтай</div>
                            </div>
                        </div>
                        {/* Follow Button */}
                        <button className="w-[107px] h-[43px] border border-[#6D5B67] rounded-full text-[16px] cursor-pointer transition duration-100 hover:bg-[rgba(0,0,0,0.1)] active:bg-[rgba(0,0,0,0.2)] text-[#6D5B67]">Дагах</button>
                    </div>
                    {/* Price */}
                    <div className="w-full h-[97px] border-b border-b-[#6D5B67]">
                        <div className="text-[#6D5B67] font-lighter text-[24px]">Үнэ:</div>
                        <div className="font-bold text-[32px] tracking-[1px]">{price}₮</div>
                    </div>
                    {/* Personalize */}
                    <div className="w-full h-auto">
                        {/* Type IMG */}
                        <SelectionGrid/>
                        {/* Type Texts */}
                        <SelectionTexts/>
                        {/* Personalize */}
                        <PersonalizationForm/>
                    </div>
                    {/* Checkout */}
                    <div className="w-full h-[97px] border-b border-b-[#6D5B67] flex justify-between items-center">
                        <button className="w-[300px] h-[57px] border border-[#6D5B67] rounded-full cursor-pointer transition duration-100 hover:bg-[rgba(0,0,0,0.1)] active:bg-[rgba(0,0,0,0.2)] flex justify-center items-center gap-[7px]">
                            <img src="cart.svg" className="w-[20px] h-[18px]"/>
                            <div className="text-[#6D5B67] text-[18px] font-medium">Сагслах</div>
                        </button>
                        <button className="w-[300px] h-[57px] border border-[#6D5B67] rounded-full cursor-pointer transition duration-100 bg-[#6D5B67] hover:bg-[#5f505a] active:bg-[#4d4048] flex justify-center items-center gap-[7px]">
                            <img src="creditcard_white.svg" className="w-[20px] h-[18px]"/>
                            <div className="text-white text-[18px] font-medium">Худалдан авах</div>
                        </button>
                    </div>
                    {/* Ratings */}
                    <div className="w-full h-[250px] border-b border-b-[#6D5B67] flex flex-col gap-[20px]">
                        <div className="w-full flex justify-between">
                            <div className="flex flex-col">
                                <div className="h-[113px] text-[96px] font-medium leading-none">{rate}</div>
                                <div className="flex">
                                    {[...Array(5)].map((_, index) => {
                                        const isFull = index + 1 <= rate;
                                        const isHalf = index + 0.5 === rate;

                                        let starSrc = "star_empty.svg";
                                        if (isFull) {
                                        starSrc = "star_filled.svg";
                                        } else if (isHalf) {
                                        starSrc = "star_half.svg"; 
                                        }

                                        return (
                                        <img
                                            key={index}
                                            src={starSrc}
                                            alt="star"
                                            className="w-[45px] h-[43px]"
                                        />
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="w-[278px]">
                                <div className="flex justify-center font-medium text-[20px] m-[10px]">{ratingsAmmount} Үнэлгээ</div>
                                {[5, 4, 3, 2, 1].map((star, index) => {
                                    const ratings = [1]; // DATA
                                    const total = ratings.length;
                                    const percentages = [5, 4, 3, 2, 1].map(star => {
                                        const count = ratings.filter(r => r === star).length;
                                        return Math.round((count / total) * 100); // rounded to whole number
                                    });
                                    console.log(percentages); // data
                                    return (
                                        <div key={star} className="flex items-center gap-[8px] mb-[6px]">
                                            {/* Star Label */}
                                            <div className="flex items-center gap-1 w-[30px]">
                                                <img src="star_filled.svg" className="w-[15.4px] h-[14.85px]" alt="star" />
                                                <span className="text-[10px]">{star}</span>
                                            </div>
                                            {/* Progress Bar */}
                                            <div className="relative w-[215px] h-[7px] bg-[rgb(101,101,101,0.3)] overflow-hidden rounded-full">
                                                <div
                                                className="absolute left-0 top-0 h-full bg-[#F7B900]"
                                                style={{ width: `${percentages[index]}%` }}
                                                ></div>
                                            </div>
                                            {/* Percentage Text */}
                                            <div className="w-[24px] text-[10px] text-[#6D5B67] text-right">
                                                {percentages[index]}%
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className="w-[300px] h-[57px] rounded-full cursor-pointer transition duration-100 bg-[#F7B900] hover:bg-[#ffc826] active:bg-[#ffd24d] flex justify-center items-center gap-[7px]">
                                <div className="text-white text-[18px] font-medium">Сэтгэгдэл бичих</div>
                            </button>
                        </div>
                    </div>
                    {/* Reviews */}
                    <div className="w-full h-auto pt-[10px]">
                        <Comment
                            username = "Username"
                            title =  "Comment Title"
                            rate = {0}
                            date = "Mar 6, 2025"
                            isPurchased = {true}
                            type = "Product Type"
                            comment = "I love this little guy. My first foray into mechanical keyboards. The aluminum body is super premium, the keys travel excellently. I switched the caps out for some walnut-style double shots that match my setup. And the weight of the unit really keeps it anchored well to my desk, no sliding or movement at all (and as a pianist, I’m heavy on the keys with a fairly high WPM typing speed, so I’ve really put this thing through its paces."
                            thumbsUp = {0}
                            thumbsDown = {0}
                        />
                    </div>
                    
                </div>
            </div>
        </div>

    
        <Footer />
    </div>
  );
};  
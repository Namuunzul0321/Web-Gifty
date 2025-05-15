"use client";
import Link from "next/link";

export default function ProductButtonLong({
    storeName = "Store Name",
    category = "Category",
    storeImg = "",
    productImg = "",
    productName = "Product Name",
    productPrice = "99’000",
    ratings = "99",
    rate = 0,
    link = ""
}) {
  return (
    <Link href={link}>
        <div className="w-[497px] h-[356px] border border-[#6D5B67] rounded-[10px] cursor-pointer transition duration-150ms hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] active:shadow-[0_2px_7px_rgba(0,0,0,0.2)] max-sm:w-[400px]">
            <div className="w-full h-[63.7px] flex pt-[10px] pl-[15px] pr-[15px]">
                <div className="w-[44px] h-[44px] border border-[#6D5B67] rounded-full overflow-hidden flex justify-center items-center">
                    {storeImg && <img src={storeImg}/>}
                </div>
                <div className="pl-[10px]">
                    <div className="font-medium text-[14px] mb-[6px]">
                        {storeName}
                    </div>
                    <div className="font-light text-[10px] text-[#6D5B67]">
                        {category}
                    </div>
                </div>
            </div>
            <div className="w-full h-[228.61px] border-t border-t-[#6D5B67] border-b border-b-[#6D5B67] overflow-hidden flex justify-center items-center">
                {productImg && <img src={productImg}/>}
            </div>
            <div className="w-full h-[63.7px] pt-[6px] pl-[15px] pr-[15px] pb-[6px]">
                <div className="font-light text-[15px]">{productName}</div>
                <div className="flex justify-between items-center">
                    <div className="font-bold text-[16px]">{productPrice}₮</div>
                    <div className="flex items-center">
                        <div className="font-light text-[11px] text-[#6D5B67] mr-[5px]">{ratings}</div>
                        <div className="flex">
                            {[...Array(5)].map((_, index) => (
                                <img
                                key={index}
                                src={index < rate ? "star_filled.svg" : "star_empty.svg"}
                                alt="star"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  );
}

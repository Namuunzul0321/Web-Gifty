"use client";
import Link from "next/link";

export default function ProductButtonSpecial({
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
        <div className="w-[767px] h-[443px] border border-[#6D5B67] rounded-[10px] overflow-hidden relative cursor-pointer transition duration-150ms hover:shadow-[0_5px_15px_rgba(0,0,0,0.5)] active:shadow-[0_2px_7px_rgba(0,0,0,0.2)]">
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
            <div className="w-full h-[379.3px] border-t border-t-[#6D5B67] flex justify-center items-center">
                {productImg && <img src={productImg}/>}
                <div className="w-[767px] h-[120px] pt-[45px] pl-[15px] pr-[15px] text-white self-end bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.47)_53%,rgba(0,0,0,0.8)_100%)] absolute">
                    <div className="font-light text-[21px]">{productName}</div>
                    <div className="flex justify-between items-center">
                        <div className="font-bold text-[21px]">{productPrice}₮</div>    
                        <div className="flex items-center">
                            <div className="font-light text-[11px] mr-[5px]">{ratings}</div>
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
        </div>
    </Link>  
  );
}

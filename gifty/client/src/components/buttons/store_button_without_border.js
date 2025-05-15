"use client";
import Link from "next/link";

export default function StoreButtonWithoutBorder({
  storeName = "Store Name",
  followerCount = "0 Дагагчтай",
  imgSrc = "",
  link = "/store-page",
}) {
  return (
    <Link href={link}>
      <div className="w-[184px] h-[242px] rounded-[10px] cursor-pointer transition duration-150ms hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)] active:shadow-[0_2px_7px_rgba(0,0,0,0.2)] ${className} max-md:w-[140px] max-md:h-[184.1px] max-sm:w-[100px] max-sm:h-[131.5px]">
          <div className="w-full h-[166px] flex justify-center items-center max-md:h-[120px] max-sm:h-[80px]">
              <div className="w-[136px] h-[136px] border border-[#6D5B67] rounded-full overflow-hidden flex justify-center items-center  max-md:w-[100px] max-md:h-[100px] max-sm:w-[70px] max-sm:h-[70px]">
                {imgSrc && <img src={imgSrc}/>}
              </div>
          </div>
          <div className="w-full h-[76px] flex items-center flex-col">
              <div className="font-medium text-[20px] mb-[6px] max-md:text-[16px] max-sm:text-[12px]">{storeName}</div>
              <div className="font-light text-[11px] text-[#6D5B67] max-md:text-[10px] max-sm:text-[9px]">{followerCount}</div>
          </div>
      </div>
    </Link>
  );
}

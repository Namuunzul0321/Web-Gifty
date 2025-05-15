"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="border-t-1 pt-[20px]">
      <div className="flex justify-center pl-[20px] w-screen h-[200px] gap-[37px]">
        <div className="w-[367px]">
          <img src="logo_text.png" className="w-[206px]"/>
          <div className="flex flex-start gap-[31px] mt-[20px]">
            <a href="https://instagram.com">
              <img src="ig_icon.svg" className="cursor-pointer"/>
            </a>
            <a href="https://facebook.com">
              <img src="fb_icon.svg" className="cursor-pointer"/>
            </a>
            <a href="https://x.com">
              <img src="twit_icon.svg" className="cursor-pointer"/>
            </a>
            <a href="https://youtube.com">
              <img src="yt_icon.svg" className="cursor-pointer"/>
            </a>
          </div>
        </div>
        <div className="w-[367px]">
          <div className="font-bold mb-[15px] underline text-[20px]">Үндсэн цэс</div>
          <div className="text-sm mb-[10px] text-[16px] cursor-pointer text-[#6D5B67] transition duration-100 hover:text-[#c9a7be]">Салбарууд</div>
          <div className="text-sm mb-[10px] text-[16px] cursor-pointer text-[#6D5B67] transition duration-100 hover:text-[#c9a7be]">Бидний тухай</div>
          <div className="text-sm mb-[10px] text-[16px] cursor-pointer text-[#6D5B67] transition duration-100 hover:text-[#c9a7be]">Холбоо барих</div>
        </div>
        <div className="w-[367px]">
          <div className="font-bold mb-[15px] underline text-[20px]">Туслах цэс</div>
          <div className="text-sm mb-[10px] text-[16px] cursor-pointer text-[#6D5B67] transition duration-100 hover:text-[#c9a7be]">Мэдээ, мэдээлэл</div>
          <div className="text-sm mb-[10px] text-[16px] cursor-pointer text-[#6D5B67] transition duration-100 hover:text-[#c9a7be]">Санал хүсэлт, гомдол</div>
          <div className="text-sm mb-[10px] text-[16px] cursor-pointer text-[#6D5B67] transition duration-100 hover:text-[#c9a7be]">Тусламж</div>
        </div>
        <div className="w-[367px]">
          <div className="font-bold mb-[15px] underline text-[20px]">Холбоо барих</div>
          <div className="text-sm mb-[10px] text-[16px] text-[#6D5B67]">+976 99996666</div>
          <div className="text-sm mb-[10px] text-[16px] text-[#6D5B67]">gifty_prime@mail.com</div>
          <div className="text-sm mb-[10px] text-[16px] text-[#6D5B67]">Компьютер ландын ард ХАА-н</div>
        </div>
      </div>
      <div className="pt-[10px] bg-[#292227] text-white h-[100px] w-full flex justify-center gap-[10px] text-sm">
        <div>GiFTY.MN</div>
        <div>© 2025 Зохиогчийн эрх хамгаалагдсан</div>
      </div>
    </div>
  );
}

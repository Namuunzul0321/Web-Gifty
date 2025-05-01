"use client";

const SpecialShops2 = ({ id, title, img, subtitle, negTitle, negText }) => {
  return (
    <div className="w-[800px] mt-[100px]">
      <div className="font-bold text-[40px] mt-[50px] mb-[50px]">{title}</div>
      <img src={img} alt="" className="rounded-3xl" />
      <div className="w-[800px]">
        <div className="mt-[40px] text-[18px]">{subtitle}</div>
        <div className="font-bold mt-[40px] text-[20px]">{negTitle}</div>
        <div className="mt-[20px] text-[18px]">{negText}</div>
      </div>
    </div>
  );
};

export default SpecialShops2;
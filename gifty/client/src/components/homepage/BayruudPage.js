"use client";
import Image from "next/image";
import Link from "next/link";

const BayruudPage = ({ id, title, img, subtitle, negTitle, negText, bannerColor, products }) => {
  return (
    <div className="w-full flex flex-col items-center min-h-screen" style={{ backgroundColor: bannerColor }}>
      <div className="w-full max-w-[1200px] px-4 py-10 flex flex-col items-center text-center text-white">
        <Image src={img} alt={title} width={200} height={200} className="mb-6" />
        <h1 className="text-[36px] font-bold mb-4">{title}</h1>
        <p className="text-[18px] mb-4">{subtitle}</p>

        <div className="bg-white text-black p-6 rounded-lg shadow w-full max-w-md mb-10">
          <h2 className="text-[24px] font-semibold text-[#D1495B] mb-2">{negTitle}</h2>
          <p className="text-[16px]">{negText}</p>
        </div>

        <h2 className="text-[28px] font-bold mb-6">Бүтээгдэхүүнүүд</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {products?.map((product) => (
            <div
              key={product.id}
              className="bg-white text-black rounded-lg shadow p-4 flex flex-col items-center"
            >
              <Image src={product.img} alt={product.name} width={100} height={100} className="mb-4" />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{product.price.toLocaleString()}₮</p>
            </div>
          ))}
        </div>

        <Link href="/" className="mt-12 text-blue-200 underline text-sm">
          Нүүр хуудас руу буцах
        </Link>
      </div>
    </div>
  );
};

export default BayruudPage;

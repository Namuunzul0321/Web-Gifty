import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

export default function Confirmation() {
  const router = useRouter();
  const [orderNumber, setOrderNumber] = useState("0000000001");

  useEffect(() => {
    let currentOrder = localStorage.getItem("lastOrderNumber");
    if (!currentOrder) currentOrder = "0000000000";
    const nextOrder = (parseInt(currentOrder) + 1).toString().padStart(10, "0");
    localStorage.setItem("lastOrderNumber", nextOrder);
    setOrderNumber(nextOrder);
  }, []);

  const handleContinue = () => {
    router.push("/ ");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 text-center px-4 py-12">
        <img
          src="/your-product.jpg"
          alt="Product"
          className="w-[150px] h-[150px] object-cover rounded-lg mx-auto mb-6"
        />
        <h2 className="text-xl font-bold mb-2">ХУДАЛДАН АВАЛТ ХИЙСЭНД БАЯРЛАЛАА.</h2>
        <p className="text-base mb-1">
          Таны захиалгын дугаар: <strong>{orderNumber}</strong>
        </p>
        <p className="text-sm text-gray-600">
          Бид захиалгын баталгаа болон хяналтын мэдээлэл бүхий имэйлийг илгээнэ.
        </p>
        <button
          onClick={handleContinue}
          className="mt-6 px-6 py-3 bg-gray-300 text-black rounded-lg font-bold text-base hover:bg-gray-400 transition"
        >
          Үргэлжлүүлэн худалдан авалт хийх
        </button>
      </div>
      <Footer />
    </div>
  );
}

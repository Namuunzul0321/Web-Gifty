"use client";
import { useState } from "react";

export default function CategorySidebar() {
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

  const [minBudget, setMinBudget] = useState('');
  const [maxBudget, setMaxBudget] = useState('');

  const handleToggle = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    
    <div className="max-lg:w-[80%]">
      <div className="h-[53px] text-[24px] font-medium">Бүтээгдэхүүний ангилал</div>

      {categories.map((category) => (
        <div key={category.id}>
          {/* Header */}
          <div
            className="flex justify-between items-center cursor-pointer transition duration-150ms hover:bg-gray-100 rounded "
            onClick={() => handleToggle(category.id)}
          >
            <span className="text-[18px] text-[#6D5B67] font-light h-[45px] flex items-center">{category.name}</span>
             <svg
              className={`w-4 h-4 transition-transform duration-300 ease-in-out ${
                expandedId === category.id ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              stroke="#6D5B67"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Subcategories */}
          {expandedId === category.id && (
            <div className="pl-3 mt-1 space-y-1">
              {category.subcategories.map((sub, index) => (
                <div key={index} className="text-[16px] text-[#6D5B67] font-light cursor-pointer transition duration-150ms hover:bg-gray-100 rounded">
                  {sub}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <div className="mt-5 pt-5 border-t border-t-[#6d5b676e]">
        <div className="h-[53px] text-[24px] font-medium">Төсөв</div>
        {/* Budget */}
        <div className="flex items-center justify-between mb-[28px]">
          <span className="font-light text-[#6D5B67]">Үнийн дүн:</span>
          {/* Inputs */}
          <div className="flex gap-[6px] items-center">
            <span className="font-bold">₮</span>
            <input
              type="number"
              value={minBudget}
              onChange={(e) => setMinBudget(e.target.value)}
              placeholder="Min"
              className="w-[100px] max-lg:w-[200px] border border-[#6D5B67] rounded px-2 py-1 text-[16px]"
            />
            <span className="font-bold">-</span>
            <span className="font-bold">₮</span>
            <input
              type="number"
              value={maxBudget}
              onChange={(e) => setMaxBudget(e.target.value)}
              placeholder="Max"
              className="w-[100px] max-lg:w-[200px] border border-[#6D5B67] rounded px-2 py-1 text-[16px]"
            />
          </div>
        </div>
        {/* Button */}
        <div className="w-full flex justify-center">
          <button className="w-[107px] h-[43px] font-light border border-[#6D5B67] rounded-full text-[16px] cursor-pointer transition duration-100 hover:bg-[rgba(0,0,0,0.1)] active:bg-[rgba(0,0,0,0.2)]">Шинэчлэх</button>
        </div>
      </div> 

    </div>

    
  );
}

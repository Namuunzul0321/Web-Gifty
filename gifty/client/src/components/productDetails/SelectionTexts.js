"use client";
import { useState } from "react";

export default function TextSelectionGrid() {
  const options = [
    { id: 1, label: "Option-1" },
    { id: 2, label: "Option-2" },
    { id: 3, label: "Option-3" },
    { id: 4, label: "Option-4" },
    { id: 5, label: "Option-5" },
    { id: 6, label: "Option-6" },
  ];

  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="h-auto border-b border-b-[#6D5B67] pb-[15px]">
      {/* Header */}
      <div className="flex gap-[5px] text-[15px] mt-[10px] mb-[10px]">
        <div className="font-light text-[#6D5B67]">Select:</div>
        <div className="font-medium text-black">
          {selectedId
            ? options.find((o) => o.id === selectedId)?.label
            : "None"}
        </div>
      </div>

      {/* Text Options */}
      <div className="flex gap-[12px] flex-wrap">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => setSelectedId(option.id)}
            className={`w-[121px] h-[40px] flex items-center justify-center text-[14px] rounded-[6px] cursor-pointer border transition-all duration-200 ${
              selectedId === option.id
                ? "border-[#F7B900] text-[#F7B900] font-semibold border-2 shadow-[0_0_10px_#F7B900]"
                : "border-[#6D5B67] text-[#6D5B67] hover:border-[#F7B900] hover:text-[#F7B900] hover:shadow-[0_0_5px_#F7B900]"
            }`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}

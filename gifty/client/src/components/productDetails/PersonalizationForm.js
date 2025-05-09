"use client";
import { useState } from "react";

export default function PersonalizationForm() {
  const [selectedId, setSelectedId] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    message: "",
  });

  const options = [
    { id: 1, label: "Option A" },
    { id: 2, label: "Option B" },
    { id: 3, label: "Option C" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-4 border-b border-b-[#6D5B67] pb-[15px]">
        <div className="flex gap-[5px] text-[15px] mt-[10px] mb-[10px]">
            <div className="font-light text-[#6D5B67]">Personalize:</div>
        </div>
      {/* Selection */}
      <div>
        <div className="mb-2 text-[15px]">
          <span className="text-[#6D5B67] font-light">Selected:</span>{" "}
          <span className="text-black font-medium">
            {selectedId
              ? options.find((o) => o.id === selectedId)?.label
              : "None"}
          </span>
        </div>
        <div className="flex gap-3 flex-wrap">
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

      {/* Input Fields */}
      <div className="space-y-4">
        <div>
          <label className="text-[14px] font-medium text-[#000000] block mb-1">Нэр:</label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            className="w-full border border-[#6D5B67] rounded-[6px] px-3 py-2 text-[14px] focus:outline-none focus:border-[#F7B900]"
          />
        </div>

        <div>
          <label className="text-[14px] font-medium text-[#000000] block mb-1">Үгс:</label>
          <input
            type="text"
            name="message"
            value={inputs.message}
            onChange={handleInputChange}
            placeholder="Enter a short message"
            className="w-full border border-[#6D5B67] rounded-[6px] px-3 py-2 text-[14px] focus:outline-none focus:border-[#F7B900]"
          />
        </div>
      </div>
    </div>
  );
}

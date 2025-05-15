"use client";
import { useState } from "react";

export default function SelectionGrid() {
  const options = [
    { id: 1, img: "img1.jpg", option: "Option-1"  },
    { id: 2, img: "img2.jpg", option: "Option-2"  },
    { id: 3, img: "img3.jpg", option: "Option-3"  },
    { id: 4, img: "img4.jpg", option: "Option-4"  },
    { id: 5, img: "img5.jpg", option: "Option-5"  },
    { id: 6, img: "img6.jpg", option: "Option-6"  },
  ];

  const [selectedId, setSelectedId] = useState(null);
  const selectedOption = options.find((opt) => opt.id === selectedId);

  return (
    <div className="h-auto border-b border-b-[#6D5B67] pb-[15px]">
        <div className="flex gap-[5px] text-[15px] mt-[10px] mb-[10px]">
          <div className="font-light text-[#6D5B67]">Select:</div>
          <div className="font-medium text-black">
            {selectedId ? selectedOption.option : "None"}
          </div>
        </div>
        <div className="flex gap-[12px] flex-wrap">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => setSelectedId(option.id)}
              className={`w-[121px] h-[121px] border rounded-[6px] cursor-pointer transition duration-200 ${
                selectedId === option.id
                  ? "border-[#F7B900] border-2 shadow-[0_0_10px_#F7B900]"
                  : "border-[#6D5B67] hover:border-[#F7B900] hover:shadow-[0_0_5px_#F7B900]"
              }`}
            >
              <img
                src={option.img}
                alt={`Option ${option.id}`}
                className="w-full h-full object-cover rounded-[6px]"
              />
            </div>
          ))}
        </div>
    </div>

  );
}

"use client";
import { useState } from "react";

export default function ImageDisplay() {
  const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full h-[725px] flex justify-between overflow-hidden">
      {/* Mini pictures */}
      <div className="w-[113px] h-auto overflow-x-hidden flex flex-col gap-[9.5px]">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedImage(img)}
            className={`w-[113px] h-[113px] border cursor-pointer rounded-[4px] overflow-hidden ${
              selectedImage === img ? "border-[#F7B900] border-2" : "border-[#6D5B67]"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Big picture */}
      <div className="w-[777px] h-[725px] border border-[#6D5B67] rounded-[6px] overflow-hidden">
        <img
          src={selectedImage}
          alt="Main Display"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

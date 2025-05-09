"use client";
import { useState } from "react";
import Link from "next/link";

export default function Comment({
    username = "Username",
    title =  "Comment Title",
    rate = 0,
    date = "Mar 6, 2025",
    isPurchased = true,
    type = "Product Type",
    comment = "I love this little guy. My first foray into mechanical keyboards. The aluminum body is super premium, the keys travel excellently. I switched the caps out for some walnut-style double shots that match my setup. And the weight of the unit really keeps it anchored well to my desk, no sliding or movement at all (and as a pianist, I’m heavy on the keys with a fairly high WPM typing speed, so I’ve really put this thing through its paces.",
    thumbsUp = 0,
    thumbsDown = 0,
}) {
    const [upCount, setUpCount] = useState(thumbsUp);
    const [downCount, setDownCount] = useState(thumbsDown);
    const [voted, setVoted] = useState(null);
  
    const handleUp = () => {
        if (voted === "up") {
            setUpCount(upCount - 1);
            setVoted(null);
        } else {
            if (voted === "down") setDownCount(downCount - 1);
            setUpCount(upCount + 1);
            setVoted("up");
        }
    };
    
    const handleDown = () => {
        if (voted === "down") {
            setDownCount(downCount - 1);
            setVoted(null);
        } else {
            if (voted === "up") setUpCount(upCount - 1);
            setDownCount(downCount + 1);
            setVoted("down");
        }
    };

    
    return (
        <div className="w-[653px] h-auto flex flex-col border-b border-b-[#6D5B67]">
            {/* Username */}
            <div className="text-[16px] font-light text-[#6D5B67]">{username}</div>
            {/* Rating, Comment Title */}
            <div className="flex items-center gap-[15px]">
                <div className="flex">
                    {[...Array(5)].map((_, index) => {
                        const isFull = index + 1 <= rate;
                        const isHalf = index + 0.5 === rate;

                        let starSrc = "star_empty.svg";
                        if (isFull) {
                        starSrc = "star_filled.svg";
                        } else if (isHalf) {
                        starSrc = "star_half.svg"; 
                        }
                        return (
                        <img
                            key={index}
                            src={starSrc}
                            alt="star"
                            className="w-[16px] h-[15px]"
                        />
                        );
                    })}
                </div>
                <div className="font-bold text-black text-[18px] uppercase">{title}</div>
            </div>
            {/* Date */}
            <div className="text-[11px] text-[#6D5B67]">{date}</div>
            {/* Purchased Product Type */}
            { isPurchased && (
                <div className="flex gap-[15px]">
                    <div className="font-medium text-[14px] text-[#6D5B67]">{type}</div>
                    <div className="font-medium text-[14px] text-[#F7B900]">(Батлагдсан худалдан авалт)</div>
                </div>
            )}
            {/* Comment */}
            <div className="text-[16px] text-black pt-[10px] pb-[20px]">{comment}</div>
            {/* Votings */}
            <div className="h-[54px] flex gap-[25px]">
                {/* Thumbs Up */}
                <button className="w-[55px] h-[32px] flex items-center gap-[15px] cursor-pointer" onClick={handleUp}>
                    <img src={voted === "up" ? "hand.thumbsup.fill.svg" : "hand.thumbsup.svg"}/>
                    <div className="text-[16px] font-light text-[#6D5B67]">{upCount}</div>
                </button>
                {/* Thumbs Down */}
                <button className="w-[55px] h-[32px] flex items-center gap-[15px] cursor-pointer" onClick={handleDown}>
                    <img src={voted === "down" ? "hand.thumbsdown.fill.svg" : "hand.thumbsdown.svg"}/>
                    <div className="text-[16px] font-light text-[#6D5B67]">{downCount}</div>
                </button>
            </div>
        </div>
    );
}

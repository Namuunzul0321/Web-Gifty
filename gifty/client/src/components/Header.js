"use client";
import Link from "next/link";

export const Header = () => {
  return (
    <div
      style={{
        width: "full",
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <img
          src="WebLogo.png"
          alt="Website Logo"
          style={{ marginLeft: "20px" }}
        />
      </div>
      <div>
        <input
          style={{
            width: "300px",
            height: "40px",
            border: "1px solid black",
            backgroundColor: "white",
            borderRadius: "40px",
            paddingLeft: "20px",
          }}
          placeholder="Эндээс бэлгээ хайна уу"
        />
      </div>
      <div>
        <Link href="/sags">
          <button
            style={{
              width: "150px",
              height: "40px",
              border: "1px solid black",
              backgroundColor: "white",
              borderRadius: "40px",
            }}
          >
            Сагс
          </button>
        </Link>
        <Link href="/sign-in">
          <button
            style={{
              width: "150px",
              height: "40px",
              border: "1px solid black",
              backgroundColor: "white",
              borderRadius: "40px",
              marginRight: "20px",
              marginLeft: "10px",
            }}
          >
            Нэвтрэх
          </button>
        </Link>
      </div>
    </div>
  );
};

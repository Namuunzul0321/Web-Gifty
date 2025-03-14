"use client";
import Link from "next/link";

export const SignIn = () => {
  return (
    <div
      style={{
        width: "full",
        height: "full",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "600px",
          display: "flex",
          paddingLeft: "200px",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ fontSize: "30px" }}>Welcome back</div>
        <div
          style={{
            color: "gray",
            marginTop: "30px",
          }}
        >
          Цахим хаяг
        </div>
        <input
          style={{
            width: "300px",
            height: "40px",
            backgroundColor: "#e3e3e3",
            borderRadius: "40px",
            border: "none",
            marginTop: "10px",
            paddingLeft: "30px",
          }}
        ></input>
        <div
          style={{
            color: "gray",
            marginTop: "30px",
          }}
        >
          Нууц үг
        </div>
        <input
          style={{
            width: "300px",
            height: "40px",
            backgroundColor: "#e3e3e3",
            borderRadius: "40px",
            border: "none",
            marginTop: "10px",
            paddingLeft: "30px",
          }}
        ></input>
        <button
          style={{
            width: "300px",
            height: "40px",
            color: "white",
            backgroundColor: "black",
            borderRadius: "40px",
            marginTop: "30px",
          }}
        >
          НЭВТРЭХ
        </button>
        <div style={{ marginLeft: "50px", marginTop: "20px" }}>
          Бүртгэлгүй юу?
          <Link href="/sign-up">Бүртгүүлэх</Link>
        </div>
      </div>
      <div
        style={{
          background: "#e3e3e3",
          width: "1000px",
          height: "830px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="Group.svg" style={{ width: "700px" }}></img>
      </div>
    </div>
  );
};

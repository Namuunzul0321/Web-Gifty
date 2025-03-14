"use client";

export const SignUp = () => {
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
        <div style={{ fontSize: "30px" }}>Welcome</div>
        <div
          style={{
            color: "gray",
            marginTop: "30px",
          }}
        >
          Хэрэглэгчийн нэр
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
        <div
          style={{
            color: "gray",
            marginTop: "30px",
          }}
        >
          Нууц үг баталгаажуулах
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
          БҮРТГҮҮЛЭХ
        </button>
      </div>
      <div
        style={{
          background: "#e3e3e3",
          backgroundColor: "rgb(117 190 218 / 50%)",
          width: "1000px",
          height: "830px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="Group2.svg" style={{ width: "700px" }}></img>
      </div>
    </div>
  );
};

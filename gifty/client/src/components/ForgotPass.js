"use client";
import Link from "next/link";
import { useState } from "react";
import "../styles/forgotPass.css";

export const ForgotPass = () => {
  return (
    <div className="content">
      <img src="logo_text_white.png" alt="Logo" className="logo"/>
      <div className="container"> 
        <div className="fillOut">
          <div className="fillOut2"> 
            <div className="header">Нууц үг сэргээх</div>
            <div className="inputs">
              <div className="text">Нууц үг шинэчлэх мэдээллийг илгээхийг хүсэж буй цахим хаягаа оруулна уу</div>
              <input></input>
            </div>
            <button className="requestButton">Хүсэлт илгээх</button>
            <div className="backButton">
              <a href="/sign-in">Буцах</a>
            </div>
          </div>
        </div>
        <div className="illustration">
          <img src="Group.svg"/> 
        </div>
      </div>
    </div>
  );
};

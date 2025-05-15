"use client";
import Link from "next/link";
import { useState } from "react";
import "../styles/emailConfirm.css";

export const EmailConfirm = () => {
  return (
    <div className="content">
      <img src="logo_text_white.png" alt="Logo" className="logo"/>
      <div className="container"> 
        <div className="fillOut">
          <div className="fillOut2"> 
            <div className="header">Баталгаажуулалт</div>
            <div className="inputs">
              <div className="text">Таны цахим хаяг руу илгээсэн баталгаажуулах кодыг оруулна уу.
                <a href=""> Дахин код илгээх</a>
              </div>
              <input></input>
            </div>
            <button className="confirmButton">БАТАЛГААЖУУЛАХ</button>
            <div className="backButton">  
              <a href="/sign-up">Буцах</a>
            </div>
          </div>
        </div>
        <div className="illustration">
          <img src="Group3.svg"/> 
        </div>
      </div>
    </div>
  );
};

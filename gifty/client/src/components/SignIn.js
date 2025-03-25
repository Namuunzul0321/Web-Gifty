"use client";
import Link from "next/link";
import { useState } from "react";
import "../styles/signIn.css";
import eyeOpen from "../../public/eye.png";
import eyeClosed from "../../public/eye.slash.png";

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="content">
      <img src="logo_text_white.png" alt="Logo" className="logo"/>
      <div className="container"> 
        <div className="fillOut">
          <div className="fillOut2"> 
            <div className="header">Welcome back</div>
            <div className="inputs">
              <div className="text">Цахим хаяг</div>
              <input></input>
            </div>
            <div className="inputs">
              <div className="text">Нууц үг</div>
              <img src={showPassword ? "/eye.svg" : "/eye.slash.svg"} alt="Toggle Password" className="hidePassword" onClick={() => setShowPassword(!showPassword)} />
              <input type={showPassword ? "text" : "password"}/>
            </div>
            <div className="container-2">
              <div className="rememberMe">
                <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} id="remember-Me" />
                <label htmlFor="remember-Me">Намайг сана</label>
              </div>
              <a href="/">Нууц үг сэргээх</a>
            </div>
            <Link href="/">
              <button className="loginButton">Нэвтрэх</button>
            </Link>
            <div className="registerButton">
              Бүртгэлгүй юу?
              <a href="/">Бүртгүүлэх</a>
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

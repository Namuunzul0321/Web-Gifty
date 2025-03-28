"use client";
import Link from "next/link";
import { useState } from "react";
import "../styles/signUp.css";
import eyeOpen from "../../public/eye.png";
import eyeClosed from "../../public/eye.slash.png";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termCondition, setTermCondition] = useState(false);

  return (
    <div className="content">
      <img src="logo_text_white.png" alt="Logo" className="logo"/>
      <div className="container"> 
        <div className="fillOut">
          <div className="fillOut2"> 
            <div className="header">Welcome</div>
            <div className="inputs">
              <div className="text">Хэрэглэгчийн нэр</div>
              <input></input>
            </div>
            <div className="inputs">
              <div className="text">Цахим хаяг</div>
              <input></input>
            </div>
            <div className="inputs">
              <div className="text">Нууц үг</div>
              <img src={showPassword ? "/eye.svg" : "/eye.slash.svg"} alt="Toggle Password" className="hidePassword" onClick={() => setShowPassword(!showPassword)} />
              <input type={showPassword ? "text" : "password"}/>
            </div>
            <div className="inputs">
              <div className="text">Нууц үг баталгаажуулах</div>
              <img src={showConfirmPassword ? "/eye.svg" : "/eye.slash.svg"} alt="Toggle Password" className="hidePassword" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
              <input type={showConfirmPassword ? "text" : "password"}/>
            </div>
            <div className="container-2">
              <div className="termCondition">
                <input type="checkbox" checked={termCondition} onChange={() => setTermCondition(!termCondition)}  />
                <label>
                  <a href="">Үйлчилгээний нөхцөл</a>
                  зөвшөөрөх 
                </label>
              </div>
            </div>
            <Link href="/">
              <button className="registerButton">Бүртгүүлэх</button>
            </Link>
            <div className="loginButton">
              Бүртгэлтэй юу?
              <a href="/sign-in">Нэвтрэх</a>
            </div>
          </div>
        </div>
        <div className="illustration">
          <img src="Group2.svg"/> 
        </div>
      </div>
    </div>
  );
};

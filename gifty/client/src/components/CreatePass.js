"use client";
import Link from "next/link";
import { useState } from "react";
import "../styles/createPass.css";
import eyeOpen from "../../public/eye.png";
import eyeClosed from "../../public/eye.slash.png";

export const CreatePass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [termCondition, setTermCondition] = useState(false);

  return (
    <div className="content">
      <img src="logo_text_white.png" alt="Logo" className="logo"/>
      <div className="container"> 
        <div className="fillOut">
          <div className="fillOut2"> 
            <div className="header">Шинэ нууц үг үүсгэх</div>
            <div className="inputs">
              <div className="text">Таны шинэ нууц үг өмнөх ашигласан нууц үгээсээ өөр байх ёстой.</div>
              <img src={showPassword ? "/eye.svg" : "/eye.slash.svg"} alt="Toggle Password" className="hidePassword" onClick={() => setShowPassword(!showPassword)} />
              <input type={showPassword ? "text" : "password"}/>
            </div>
            <div className="inputs">
              <div className="text">Шинэ нууц үг баталгаажуулах</div>
              <img src={showConfirmPassword ? "/eye.svg" : "/eye.slash.svg"} alt="Toggle Password" className="hidePassword2" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
              <input type={showConfirmPassword ? "text" : "password"}/>
            </div>
            <Link href="/">
              <button className="createPassButton">Нууц үг шинэчлэх</button>
            </Link>
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

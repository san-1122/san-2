import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import "./cookie.css"

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(["cookieConsent"]);
  const giveCookieConsent = () => {
    setCookie("cookieConsent", true, { path: "/" });
  };

  return (
    <div className="cookie-consent">
      <div class="container mt-2">
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <p>เว็บไซต์นี้ใช้คุกกี้ เราใช้คุกกี้เพื่อให้ท่านได้รับประสบการณ์การใช้งานที่ดีที่สุดบน
              เว็บไซต์ของเรา โปรดศึกษาเพิ่มเติมที่
              นโยบายความเป็นส่วนตัว และ นโยบายคุกกี้ {" "}</p>
          </div>
          <div className="col-sm-12">
            <button onClick={giveCookieConsent} className='but'>
              ตกลง
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CookieConsent;
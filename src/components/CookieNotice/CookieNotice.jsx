import React, { useEffect } from 'react'
import "../../css/global.50446185a1d427c87a62.css"

const CookieNotice = () => {
    useEffect(()=>{
        // Cookie notice
const cookieNotice = () => {
    const cookieNotice = document.querySelector('.js-cookie-notice');
    const acceptCookie = document.querySelector('.js-cookie-accept');
    const declineCookie = document.querySelector('.js-cookie-decline');
  
    // Utility functions for cookies management
    const setCookie = (name, value, days) => {
        const d = new Date();
        d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
        let expires = 'expires=' + d.toUTCString();
        document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
    };
  
    const getCookie = (name) => {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let c of ca) {
            while (c.charAt(0) === ' ') c = c.substring(1);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    };
  
    const checkCookieConsent = () => {
        // Check if the cookie consent has been set
        const consent = getCookie('cookiePreference');
        cookieNotice.style.display = consent ? 'none' : 'block';
    };
  
    const handleConsent = (accepted = false) => {
        // Set cookie based on user acceptance, valid for 365 days
        setCookie('cookiePreference', accepted ? 'accepted' : 'declined', 30);
        cookieNotice.style.display = 'none';
    };
  
    checkCookieConsent();
    acceptCookie.addEventListener('click', () => handleConsent(true));
    declineCookie.addEventListener('click', () => handleConsent(false));
  };
cookieNotice()  
    })
  return (
    <div>
      <div class="cookie-notice js-cookie-notice">
        <p class="paragraph">We use cookies to enhance your experience. By clicking “Accept Cookies” you agree to our use of cookies.</p>
        <div class="buttons">
            <button type="button" class="btn js-cookie-decline">Decline</button>
            <button type="button" class="btn btn-primary js-cookie-accept">Accept</button>
        </div>
    </div>
    </div>
  )
}

export default CookieNotice

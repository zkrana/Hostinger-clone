import React from 'react'
import './claimdomain.css'
export default function Claimdomain() {
  return (
    <div className="container">
        <div className="box-wrapper">
            <div className="regular-heading title text-center md:text-left">
                <svg width="39" height="36" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18C3 9.72 9.72 3 18 3C24.9311 3 30.769 7.70877 32.4872 14.0997C32.0009 14.0339 31.5044 14 31 14C30.4414 14 29.8926 14.0416 29.3564 14.122C28.2289 10.8336 25.7081 8.18796 22.5 6.885V7.5C22.5 9.15 21.15 10.5 19.5 10.5H16.5V13.5C16.5 14.325 15.825 15 15 15H12V18H21C21.4445 18 21.8455 18.1959 22.1208 18.5057C20.7873 20.3257 20 22.5709 20 25C20 27.7732 21.0262 30.3067 22.7197 32.2415C21.2354 32.7336 19.6486 33 18 33C9.72 33 3 26.28 3 18ZM6 18C6 24.12 10.575 29.16 16.5 29.895V27C14.85 27 13.5 25.65 13.5 24V22.5L6.315 15.315C6.12 16.185 6 17.07 6 18Z" fill="#673DE6"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31 17C26.584 17 23 20.584 23 25C23 29.416 26.584 33 31 33C35.416 33 39 29.416 39 25C39 20.584 35.416 17 31 17Z" fill="#00B090"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M35 25.8H31.8V29H30.2V25.8H27V24.2H30.2V21H31.8V24.2H35V25.8Z" fill="white"/>
                </svg>
                <div className="content-box">
                    <h3> Claim your free domain </h3>
                    <p> 
                        Get your free domain anytime for purchasing <a href='#'>Business Web Hosting</a>, up until your hosting account is active.
                    </p>
                </div>
            </div>
            <div className="action flexbox">
                <button type='button' className='btn btn-font' >Claim domain</button>
            </div>
        </div>
    </div>
  )
}

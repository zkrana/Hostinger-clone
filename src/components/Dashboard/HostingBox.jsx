import React from 'react'
import './hosting.css'
export default function Hostingbox() {
  return (
    <div className="main-box-wrapper">
        <div className=" regular-heading title text-center md:text-left">
            <div className="icon-box">
            <svg width="36px" height="36px" viewBox="0 0 36 36">
                <g id="hosting" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M21,3 C22.6568542,3 24,4.34314575 24,6 L24,30 C24,31.6568542 22.6568542,33 21,33 L6,33 C4.34314575,33 3,31.6568542 3,30 L3,6 C3,4.34314575 4.34314575,3 6,3 L21,3 Z M30,3 C31.6568542,3 33,4.34314575 33,6 L33,30 C33,31.6568542 31.6568542,33 30,33 L27,33 L27,24 L30,24 L30,21 L27,21 L27,15 L30,15 L30,12 L27,12 L27,9 L30,9 L30,6 L27,6 L27,3 L30,3 Z M21,27 L10.5,27 L10.5,30 L21,30 L21,27 Z M7.5,27 C6.67157288,27 6,27.6715729 6,28.5 C6,29.3284271 6.67157288,30 7.5,30 C8.32842712,30 9,29.3284271 9,28.5 C9,27.6715729 8.32842712,27 7.5,27 Z M21,21 L10.5,21 L10.5,24 L21,24 L21,21 Z M7.5,21 C6.67157288,21 6,21.6715729 6,22.5 C6,23.3284271 6.67157288,24 7.5,24 C8.32842712,24 9,23.3284271 9,22.5 C9,21.6715729 8.32842712,21 7.5,21 Z M21,12 L6,12 L6,15 L21,15 L21,12 Z M21,6 L6,6 L6,9 L21,9 L21,6 Z" fill="#673DE6"></path>
                </g>
            </svg>

            <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="icon-neutral" focusable="false" viewBox="0 0 24 24" class="indicator" width="18" height="18" dataV2d50d136=""><g><circle cx="12" cy="12" r="10"></circle></g></svg>
            </div>

            <div className="content-box">
                <h3> Business Web Hosting </h3>
                <p> 
                Expires on 2024-03-16 | <a className='text-light' href='#'>9 websites</a>
                </p>
            </div>
        </div>
        <div className="action flexbox">
            <button type='button' className='btn btn-font' >Manage</button>
        </div>
    </div>
  )
}
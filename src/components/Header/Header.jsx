import React, { useState } from 'react'
import './header.css'
import mainlogo from '../../images/main-logo.svg'

import { NavLink } from 'react-router-dom';
export default function Header() {

  const [userprofile, setUserProfile] = useState(false)

  const userProfile = () =>{

    if(userprofile === false){
      setUserProfile(true)
    }else{
      setUserProfile(false)
    }
  }

  let profileShow = userprofile ? 'profile' : 'profilehide';

  const [mbMenu, setMbMenu] = useState(false)

  const mbMenuCon = () =>{
    if(mbMenu === false){
      setMbMenu(true)
    }
  }

  const hideMbNavPanel = ()=>{
    setMbMenu(false)
  }

  let MobileNav = mbMenu ? 'navMB' : null;



  return (
    <header>
        <div className="header-wrapper">
            <div className="company-logo">
                <NavLink to='/index'>
                  <img src={mainlogo} alt='Main Logo' />
                  <span className='for767Device text-[20px] uppercase text-[white] font-semibold'>Hostinger</span>
                </NavLink>
            </div>
            <div className="main-menu">
                <nav>
                  <ul>
                    <li>
                      <NavLink to='/index'>
                        Home
                      </NavLink> 
                  </li>

                  <li>
                      <NavLink to='/websites'>
                        Websites
                      </NavLink> 
                  </li>

                  <li>
                      <NavLink to='/hostings'>
                        Hosting
                      </NavLink> 
                  </li>

                  <li>
                      <NavLink to='/index'>
                        Emails
                      </NavLink> 
                  </li>

                  <li>
                      <NavLink to='/index'>
                        Domains
                      </NavLink> 
                  </li>

                  <li>
                      <NavLink to='/index'>
                        VPS
                      </NavLink> 
                  </li>

                  <li>
                      <NavLink to='/index'>
                        SSL
                      </NavLink> 
                  </li>

                  <li>
                      <NavLink to='/index'>
                        Billing
                      </NavLink> 
                  </li>
                  </ul>
                </nav>
            </div>
            <div className="user-menu">
                <div className="user-manage">
                  <ul>
                    <li>
                      <a href='#' title="Language Selection">
                      <svg width="32" title="Language Selection" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_18230_194153)">
                        <path d="M38 0H0V20H38V0Z" fill="#B22234"/>
                        <path d="M0 2.30768H38H0ZM38 5.3846H0H38ZM0 8.46152H38H0ZM38 11.5384H0H38ZM0 14.6154H38H0ZM38 17.6923H0H38Z" fill="black"/>
                        <path d="M0 2.30768H38M38 5.3846H0M0 8.46152H38M38 11.5384H0M0 14.6154H38M38 17.6923H0" stroke="white" stroke-width="1.53846"/>
                        <path d="M15.2 0H0V10.7692H15.2V0Z" fill="#3C3B6E"/>
                        <path d="M1.26666 0.461548L1.62838 1.57479L0.681396 0.886768H1.85193L0.904948 1.57479L1.26666 0.461548Z" fill="white"/>
                        <path d="M1.26666 2.61539L1.62838 3.72864L0.681396 3.04061H1.85193L0.904948 3.72864L1.26666 2.61539Z" fill="white"/>
                        <path d="M1.26666 4.76924L1.62838 5.88248L0.681396 5.19446H1.85193L0.904948 5.88248L1.26666 4.76924Z" fill="white"/>
                        <path d="M1.26666 6.92309L1.62838 8.03633L0.681396 7.34831H1.85193L0.904948 8.03633L1.26666 6.92309Z" fill="white"/>
                        <path d="M1.26666 9.07693L1.62838 10.1902L0.681396 9.50215H1.85193L0.904948 10.1902L1.26666 9.07693Z" fill="white"/>
                        <path d="M2.53333 1.53847L2.89505 2.65171L1.94807 1.96369H3.1186L2.17162 2.65171L2.53333 1.53847Z" fill="white"/>
                        <path d="M2.53333 3.69232L2.89505 4.80556L1.94807 4.11754H3.1186L2.17162 4.80556L2.53333 3.69232Z" fill="white"/>
                        <path d="M2.53333 5.84616L2.89505 6.9594L1.94807 6.27138H3.1186L2.17162 6.9594L2.53333 5.84616Z" fill="white"/>
                        <path d="M2.53333 8.00001L2.89505 9.11325L1.94807 8.42523H3.1186L2.17162 9.11325L2.53333 8.00001Z" fill="white"/>
                        <path d="M3.79999 0.461548L4.16171 1.57479L3.21473 0.886768H4.38526L3.43828 1.57479L3.79999 0.461548Z" fill="white"/>
                        <path d="M3.79999 2.61539L4.16171 3.72864L3.21473 3.04061H4.38526L3.43828 3.72864L3.79999 2.61539Z" fill="white"/>
                        <path d="M3.79999 4.76924L4.16171 5.88248L3.21473 5.19446H4.38526L3.43828 5.88248L3.79999 4.76924Z" fill="white"/>
                        <path d="M3.79999 6.92309L4.16171 8.03633L3.21473 7.34831H4.38526L3.43828 8.03633L3.79999 6.92309Z" fill="white"/>
                        <path d="M3.79999 9.07693L4.16171 10.1902L3.21473 9.50215H4.38526L3.43828 10.1902L3.79999 9.07693Z" fill="white"/>
                        <path d="M5.06666 1.53847L5.42838 2.65171L4.4814 1.96369H5.65193L4.70495 2.65171L5.06666 1.53847Z" fill="white"/>
                        <path d="M5.06666 3.69232L5.42838 4.80556L4.4814 4.11754H5.65193L4.70495 4.80556L5.06666 3.69232Z" fill="white"/>
                        <path d="M5.06666 5.84616L5.42838 6.9594L4.4814 6.27138H5.65193L4.70495 6.9594L5.06666 5.84616Z" fill="white"/>
                        <path d="M5.06666 8.00001L5.42838 9.11325L4.4814 8.42523H5.65193L4.70495 9.11325L5.06666 8.00001Z" fill="white"/>
                        <path d="M6.33333 0.461548L6.69505 1.57479L5.74807 0.886768H6.9186L5.97162 1.57479L6.33333 0.461548Z" fill="white"/>
                        <path d="M6.33333 2.61539L6.69505 3.72864L5.74807 3.04061H6.9186L5.97162 3.72864L6.33333 2.61539Z" fill="white"/>
                        <path d="M6.33333 4.76924L6.69505 5.88248L5.74807 5.19446H6.9186L5.97162 5.88248L6.33333 4.76924Z" fill="white"/>
                        <path d="M6.33333 6.92309L6.69505 8.03633L5.74807 7.34831H6.9186L5.97162 8.03633L6.33333 6.92309Z" fill="white"/>
                        <path d="M6.33333 9.07693L6.69505 10.1902L5.74807 9.50215H6.9186L5.97162 10.1902L6.33333 9.07693Z" fill="white"/>
                        <path d="M7.59999 1.53847L7.96171 2.65171L7.01473 1.96369H8.18526L7.23828 2.65171L7.59999 1.53847Z" fill="white"/>
                        <path d="M7.59999 3.69232L7.96171 4.80556L7.01473 4.11754H8.18526L7.23828 4.80556L7.59999 3.69232Z" fill="white"/>
                        <path d="M7.59999 5.84616L7.96171 6.9594L7.01473 6.27138H8.18526L7.23828 6.9594L7.59999 5.84616Z" fill="white"/>
                        <path d="M7.59999 8.00001L7.96171 9.11325L7.01473 8.42523H8.18526L7.23828 9.11325L7.59999 8.00001Z" fill="white"/>
                        <path d="M8.86666 0.461548L9.22838 1.57479L8.2814 0.886768H9.45193L8.50495 1.57479L8.86666 0.461548Z" fill="white"/>
                        <path d="M8.86666 2.61539L9.22838 3.72864L8.2814 3.04061H9.45193L8.50495 3.72864L8.86666 2.61539Z" fill="white"/>
                        <path d="M8.86666 4.76924L9.22838 5.88248L8.2814 5.19446H9.45193L8.50495 5.88248L8.86666 4.76924Z" fill="white"/>
                        <path d="M8.86666 6.92309L9.22838 8.03633L8.2814 7.34831H9.45193L8.50495 8.03633L8.86666 6.92309Z" fill="white"/>
                        <path d="M8.86666 9.07693L9.22838 10.1902L8.2814 9.50215H9.45193L8.50495 10.1902L8.86666 9.07693Z" fill="white"/>
                        <path d="M10.1333 1.53847L10.495 2.65171L9.54807 1.96369H10.7186L9.77162 2.65171L10.1333 1.53847Z" fill="white"/>
                        <path d="M10.1333 3.69232L10.495 4.80556L9.54807 4.11754H10.7186L9.77162 4.80556L10.1333 3.69232Z" fill="white"/>
                        <path d="M10.1333 5.84616L10.495 6.9594L9.54807 6.27138H10.7186L9.77162 6.9594L10.1333 5.84616Z" fill="white"/>
                        <path d="M10.1333 8.00001L10.495 9.11325L9.54807 8.42523H10.7186L9.77162 9.11325L10.1333 8.00001Z" fill="white"/>
                        <path d="M11.4 0.461548L11.7617 1.57479L10.8147 0.886768H11.9853L11.0383 1.57479L11.4 0.461548Z" fill="white"/>
                        <path d="M11.4 2.61539L11.7617 3.72864L10.8147 3.04061H11.9853L11.0383 3.72864L11.4 2.61539Z" fill="white"/>
                        <path d="M11.4 4.76924L11.7617 5.88248L10.8147 5.19446H11.9853L11.0383 5.88248L11.4 4.76924Z" fill="white"/>
                        <path d="M11.4 6.92309L11.7617 8.03633L10.8147 7.34831H11.9853L11.0383 8.03633L11.4 6.92309Z" fill="white"/>
                        <path d="M11.4 9.07693L11.7617 10.1902L10.8147 9.50215H11.9853L11.0383 10.1902L11.4 9.07693Z" fill="white"/>
                        <path d="M12.6667 1.53847L13.0284 2.65171L12.0814 1.96369H13.2519L12.3049 2.65171L12.6667 1.53847Z" fill="white"/>
                        <path d="M12.6667 3.69232L13.0284 4.80556L12.0814 4.11754H13.2519L12.3049 4.80556L12.6667 3.69232Z" fill="white"/>
                        <path d="M12.6667 5.84616L13.0284 6.9594L12.0814 6.27138H13.2519L12.3049 6.9594L12.6667 5.84616Z" fill="white"/>
                        <path d="M12.6667 8.00001L13.0284 9.11325L12.0814 8.42523H13.2519L12.3049 9.11325L12.6667 8.00001Z" fill="white"/>
                        <path d="M13.9333 0.461548L14.295 1.57479L13.3481 0.886768H14.5186L13.5716 1.57479L13.9333 0.461548Z" fill="white"/>
                        <path d="M13.9333 2.61539L14.295 3.72864L13.3481 3.04061H14.5186L13.5716 3.72864L13.9333 2.61539Z" fill="white"/>
                        <path d="M13.9333 4.76924L14.295 5.88248L13.3481 5.19446H14.5186L13.5716 5.88248L13.9333 4.76924Z" fill="white"/>
                        <path d="M13.9333 6.92309L14.295 8.03633L13.3481 7.34831H14.5186L13.5716 8.03633L13.9333 6.92309Z" fill="white"/>
                        <path d="M13.9333 9.07693L14.295 10.1902L13.3481 9.50215H14.5186L13.5716 10.1902L13.9333 9.07693Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_18230_194153">
                        <rect width="32" height="20" fill="white" transform="translate(0 0.00390625)"/>
                        </clipPath>
                        </defs>
                      </svg>
                      </a>
                    </li>

                    <li>
                      <a href='#' title='Whats New'>
                      <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="ic-commercial1" focusable="false" viewBox="0 0 24 24" class="h-icon icon-static-view-box header__icon" width="32" height="32"><g><g><path id='icon' d="M18.525 4.05C18.3 4.65 16.575 5.7 14.7 6.375L11.25 7.725V12V16.275L14.7 17.625C16.575 18.3 18.3 19.35 18.525 19.95C18.75 20.55 19.35 21 19.875 21C20.475 21 20.925 19.5 21.15 16.5C21.6 9.75 21 3 19.875 3C19.35 3 18.75 3.45 18.525 4.05Z"></path><path id='icon' d="M3.3 9.3C3.075 9.9 3 11.475 3.15 12.9C3.3 14.775 3.75 15.45 5.1 15.6C6.45 15.825 6.75 16.35 6.75 18.45C6.75 20.25 7.125 21 7.875 21C8.775 21 9 19.8 9 14.625V8.25H6.375C4.8 8.25 3.525 8.7 3.3 9.3Z"></path></g></g></svg>
                      </a>
                    </li>

                    <li>
                        <NavLink to='/help' title='Help'>
                          <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="ic-help" focusable="false" viewBox="0 0 24 24" class="h-icon icon-static-view-box h-icon--no-custom-width"><g><path id='icon' fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z"></path></g></svg>
                        </NavLink>
                    </li>

                    <li className='user-pro' onClick={userProfile}>
                      <a href='#' title='Account'>
                      <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="ic-person" focusable="false" viewBox="0 0 24 24" class="h-icon prevent-select icon-static-view-box h-icon--no-custom-width" dataVE69fac64=""><g><path id='icon' fill-rule="evenodd" clip-rule="evenodd" d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"></path></g></svg>
                      <div className={profileShow}>
                          <div className="profile-box-wrapper">
                            <div className="profile-header">
                              <h4> Zk Rana </h4>
                              <p> shuvoit10@gmail.com </p>
                            </div>
                            <div className="profile-item">
                                <ul>
                                  <li> 
                                  <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="IcPerson" focusable="false" viewBox="0 0 24 24" class="h-icon icon-static-view-box h-icon--no-custom-width h-nav__icon" dataV883aad70=""><g><path fill-rule="evenodd" clip-rule="evenodd" d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"></path></g></svg>
                                    <span> Account Information </span>
                                  </li>

                                  <li> 
                                  <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="icon-lock-locked" focusable="false" viewBox="0 0 24 24" class="h-icon icon-static-view-box h-icon--no-custom-width h-nav__icon" dataV883aad70=""><g><path fill-rule="evenodd" clip-rule="evenodd" d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9C13.71 2.9 15.1 4.29 15.1 6V8Z"></path></g></svg>
                                    <span> Security </span>
                                  </li>

                                  <li> 
                                  <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="icon-share" focusable="false" viewBox="0 0 24 24" class="h-icon icon-static-view-box h-icon--no-custom-width h-nav__icon" dataV883aad70=""><g><path fill-rule="evenodd" clip-rule="evenodd" d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z"></path></g></svg>
                                    <span> Account Sharing </span>
                                  </li>

                                  <li> 
                                  <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="icon-list" focusable="false" viewBox="0 0 24 24" class="h-icon icon-static-view-box h-icon--no-custom-width h-nav__icon" dataV883aad70=""><g><path fill-rule="evenodd" clip-rule="evenodd" d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z"></path></g></svg>
                                    <span> Account Activity </span>
                                  </li>

                                  <li> 
                                  <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="icon-compare-arrows" focusable="false" viewBox="0 0 24 24" class="h-icon h-icon--no-custom-width h-nav__icon" dataV883aad70=""><g><path fill-rule="evenodd" clip-rule="evenodd" d="M9.01 14H2V16H9.01V19L13 15L9.01 11V14ZM14.99 13V10H22V8H14.99V5L11 9L14.99 13Z"></path></g></svg>
                                    <span> Migrate Website </span>
                                  </li>

                                  <li> 
                                  <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="IcMoneyBillMenu" focusable="false" viewBox="0 0 24 24" class="h-icon icon-static-view-box h-icon--no-custom-width h-nav__icon" dataV883aad70=""><g><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.41 18.09V20H10.74V18.07C9.03 17.71 7.58 16.61 7.47 14.67H9.43C9.53 15.72 10.25 16.54 12.08 16.54C14.04 16.54 14.48 15.56 14.48 14.95C14.48 14.12 14.04 13.34 11.81 12.81C9.33 12.21 7.63 11.19 7.63 9.14C7.63 7.42 9.02 6.3 10.74 5.93V4H13.41V5.95C15.27 6.4 16.2 7.81 16.26 9.34H14.3C14.25 8.23 13.66 7.47 12.08 7.47C10.58 7.47 9.68 8.15 9.68 9.11C9.68 9.95 10.33 10.5 12.35 11.02C14.37 11.54 16.53 12.41 16.53 14.93C16.52 16.76 15.15 17.76 13.41 18.09Z"></path></g></svg>
                                    <span> Earn with us </span>
                                  </li>

                                  <li> 
                                  <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="icon-help" focusable="false" viewBox="0 0 24 24" class="h-icon icon-static-view-box h-icon--no-custom-width h-nav__icon" dataV883aad70=""><g><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z"></path></g></svg>
                                    <span> Get Help </span>
                                  </li>

                                </ul>
                            </div>
                            <div className="profile-footer">
                                <NavLink to='/'>
                                  <button type='submit' className='logout'> Logout </button>
                                </NavLink>
                            </div>
                          </div>
                      </div>
                      </a>
                    </li>
                    <li className='mobileMenu' onClick={mbMenuCon}>
                      <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="ic-menu" focusable="false" viewBox="0 0 24 24" class="h-icon icon-static-view-box h-icon--no-custom-width"><g><path id='icon' fill-rule="evenodd" clip-rule="evenodd" d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"></path></g></svg>
                    <div id='hideMbColumn' className={MobileNav}>
                      <div className="header-close">
                        <div className="closed" onClick={hideMbNavPanel}>
                          <span>Close</span> 
                          <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="ic-close" focusable="false" viewBox="0 0 24 24" class="h-icon icon-primary icon-static-view-box h-icon--no-custom-width header-menu__icon"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"></path></g></svg>
                        </div>
                      </div>
                        <nav>
                          <ul className="mb-nav-wrapper">
                            <li>
                                <NavLink to='/index'>
                                  Home
                                </NavLink> 
                            </li>

                            <li>
                                <NavLink to='/websites'>
                                  Websites
                                </NavLink> 
                            </li>

                            <li>
                                <NavLink to='/hostings'>
                                  Hosting
                                </NavLink> 
                            </li>

                            <li>
                                <NavLink to='/index'>
                                  Emails
                                </NavLink> 
                            </li>

                            <li>
                                <NavLink to='/index'>
                                  Domains
                                </NavLink> 
                            </li>

                            <li>
                                <NavLink to='/index'>
                                  VPS
                                </NavLink> 
                            </li>

                            <li>
                                <NavLink to='/index'>
                                  SSL
                                </NavLink> 
                            </li>

                            <li>
                                <NavLink to='/index'>
                                  Billing
                                </NavLink> 
                            </li>
                          </ul>
                        </nav>
                    </div>                      
                    </li>
                  </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

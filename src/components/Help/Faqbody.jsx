import React, { useState } from 'react'
import './faq.css'
export default function Faqbody() {

    const [show, setHide] = useState(true)
    const showHide = () =>{
        if( show == true ){
            setHide(false)
        }else{
            setHide(true)
        }
    }

    let iconRotate = show ? 'rotate' : 'hideRotate';

  return (

    <div className="container">
        <div className="content-body">
            <div className="faq-item">
                <div className="panel-controller">
                    <div className="faq-title">
                        <h5>  Transfer, setup or restore your site </h5>
                    </div>
                    <div className="panel-on-off" onClick={showHide}>
                        <svg className={iconRotate} part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="ic-keyboard-arrow-down" focusable="false" viewBox="0 0 24 24" class="h-icon icon-primary h-icon--no-custom-width align-baseline cursor-pointer"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M7.91 8.83984L12.5 13.4198L17.09 8.83984L18.5 10.2498L12.5 16.2498L6.5 10.2498L7.91 8.83984Z"></path></g></svg>
                    </div>
                </div>
            </div>
            <div className="faq-item">
                <div className="panel-controller">
                    <div className="faq-title">
                        <h5>  Site is down, slow, or displaying an error </h5>
                    </div>
                    <div className="panel-on-off" onClick={showHide}>
                        <svg className={iconRotate} part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="ic-keyboard-arrow-down" focusable="false" viewBox="0 0 24 24" class="h-icon icon-primary h-icon--no-custom-width align-baseline cursor-pointer"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M7.91 8.83984L12.5 13.4198L17.09 8.83984L18.5 10.2498L12.5 16.2498L6.5 10.2498L7.91 8.83984Z"></path></g></svg>
                    </div>
                </div>
            </div>
            <div className="faq-item">
                <div className="panel-controller">
                    <div className="faq-title">
                        <h5>  Site is down, slow, or displaying an error </h5>
                    </div>
                    <div className="panel-on-off" onClick={showHide}>
                        <svg className={iconRotate} part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="ic-keyboard-arrow-down" focusable="false" viewBox="0 0 24 24" class="h-icon icon-primary h-icon--no-custom-width align-baseline cursor-pointer"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M7.91 8.83984L12.5 13.4198L17.09 8.83984L18.5 10.2498L12.5 16.2498L6.5 10.2498L7.91 8.83984Z"></path></g></svg>
                    </div>
                </div>
            </div>
            <div className="faq-item">
                <div className="panel-controller">
                    <div className="faq-title">
                        <h5>  Domain </h5>
                    </div>
                    <div className="panel-on-off" onClick={showHide}>
                        <svg className={iconRotate} part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="ic-keyboard-arrow-down" focusable="false" viewBox="0 0 24 24" class="h-icon icon-primary h-icon--no-custom-width align-baseline cursor-pointer"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M7.91 8.83984L12.5 13.4198L17.09 8.83984L18.5 10.2498L12.5 16.2498L6.5 10.2498L7.91 8.83984Z"></path></g></svg>
                    </div>
                </div>
            </div>
        </div>
        <div className="chat-now">
            <div className="main-box-wrapper">
                <div className=" regular-heading title text-center md:text-left">
                    <div className="icon-box">
                    <svg data-v-1364a54b="" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="support-notification__icon"><circle cx="24" cy="24" r="20" fill="#673DE6"></circle><path d="M33.3334 34.6667C33.3334 34.6667 30.191 33.4301 27.6486 32.4395H16.9584C15.6929 32.4395 14.6667 31.3515 14.6667 30.0096V15.7632C14.6667 14.4213 15.6929 13.3333 16.9584 13.3333H31.0411C32.3066 13.3333 33.3327 14.4213 33.3327 15.7632V28.0327H33.3334V34.6667ZM30.5744 26.6788C30.354 26.407 29.9695 26.3756 29.7129 26.6084C29.6929 26.6261 27.7026 28.3961 23.9994 28.3961C20.3422 28.3961 18.3213 26.6389 18.2853 26.6069C18.0287 26.3753 17.6452 26.407 17.4251 26.6781C17.3195 26.8083 17.267 26.9782 17.2794 27.15C17.2918 27.3217 17.3681 27.481 17.4912 27.5925C17.5858 27.6779 19.8495 29.6925 23.9994 29.6925C28.15 29.6925 30.4137 27.6779 30.5083 27.5925C30.6312 27.4811 30.7073 27.3219 30.7197 27.1503C30.7321 26.9788 30.6798 26.809 30.5744 26.6788Z" fill="white"></path></svg>
                    </div>

                    <div className="content-box">
                        <h3> Chat Now </h3>
                        <p> 
                        Continue your previous conversation with our live specialists
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

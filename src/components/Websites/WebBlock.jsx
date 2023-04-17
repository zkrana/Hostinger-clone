import React, { useState } from 'react'
import './website.css'
import Renew from './Renew'

export default function WebBlock() {
    const [show, setHide] = useState(false)
    const showHide = () =>{
        if( show == false ){
            setHide(true)
        }else{
            setHide(false)
        }
    }

    let actionPanel = show ? 'webActionPanel' : 'hidewebActionPanel';

    const [showbuilder, setBuilder] = useState(false);
    const showHostingerBuilder = () => {
        if( showbuilder == false ){
            setBuilder(true)
        }else{
            setBuilder(false)
        }
    }
    let builderShow = showbuilder ? 'changeBuilderPanel' : 'changeBuilderPanelHide';

    const builderHide = () =>{
        setBuilder(false)
    }

    
    const [renew, setRenew] = useState(false);
    const showRenewPrompt = () => {
        if( renew === false ){
            setRenew(true)
        }else{
            setRenew(false)
        }
    }
    let renewShow = renew ? 'openRenew' : 'hideRenewPrompt';


  return (
    <div className="container w-full sm:w-[49%]">
        <div className="content-body w-full">
            <div className="panel-controller">
                <div className="main-box-wrapper">
                    <div className=" regular-heading title text-center md:text-left">
                        <div className="icon-box">
                            <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="icon-order-website" focusable="false" viewBox="0 0 24 24" class="h-icon" width="48" height="48" dataV735aeef5="" block="" grayDark=""><g><path fill-rule="evenodd" clip-rule="evenodd" d="M5.93245 14L6.5234 11.4933L7.11436 14H8.17926L9.29681 10H8.1617L7.5766 12.6687L6.90957 10H6.13723L5.47021 12.6687L4.87926 10H3.75L4.86755 14H5.93245ZM11.409 14L12 11.4933L12.5909 14H13.6558L14.7734 10H13.6383L13.0532 12.6687L12.3861 10H11.6138L10.9468 12.6687L10.3558 10H9.22656L10.3441 14H11.409ZM16.8857 14L17.4767 11.4933L18.0676 14H19.1325L20.2501 10H19.1149L18.5298 12.6687L17.8628 10H17.0905L16.4235 12.6687L15.8325 10H14.7032L15.8208 14H16.8857Z"></path></g></svg>

                            <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="icon-neutral" focusable="false" viewBox="0 0 24 24" class="indicator" width="18" height="18" dataV2d50d136=""><g><circle cx="12" cy="12" r="10"></circle></g></svg>
                        </div>

                        <div className="content-box">
                            <h3> suvoseo.com </h3>
                            <p> 
                            Hosting plan: | <a href='#'>Business Web Hosting</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="websites-action">
                    <div className="web-action-icon" onClick={showHide}>
                            <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="actionDots" focusable="false" viewBox="0 0 24 24" class="h-icon icon-primary cursor-pointer horizontal" width="32" height="32" dataV73710d93="" block=""><g><g><circle cx="12.1091" cy="4" r="2"></circle><circle cx="12.1091" cy="20" r="2"></circle><circle cx="12.1091" cy="12" r="2"></circle></g></g></svg>
                        <div className={actionPanel}>
                            <ul>
                                <li onClick={showHostingerBuilder}> <span>Change to <br></br>hostinger builder</span> </li>
                                <li onClick={showRenewPrompt}> <span>Renew</span> </li>
                                <li> <span>Upgrade</span> </li>
                                <li> <span>Delete website</span> </li>
                            </ul>
                        </div>
                    </div>
                    <div className={builderShow}>
                        <div className="overlay">
                            <div className="builder-main">
                                <div className="pageBuilderHeader">
                                <h3> What Is Hostinger Builder? </h3>
                                </div>
                                <div className="builderVideoIntro">
                                    <video src='https://hpanel-main.hostinger.com/assets/media/HostingerBuiler_Animation.9b69ae0d.mp4' autoPlay="true"></video>
                                </div>
                                <div className="builder-details">
                                    <p><span data-msgid="Simplified alternative to WordPress">Simplified alternative to WordPress</span></p>
                                    <p><span data-msgid="Easy drag &amp; drop interface">Easy drag &amp; drop interface</span></p>
                                    <p><span data-msgid="Included e-commerce solution">Included e-commerce solution</span></p>
                                    <p><span data-msgid="Dedicated live support team">Dedicated live support team</span></p>
                                    <p><span data-msgid="You can restore the previous website within 14 days"><strong>You can restore the previous website within 14 days</strong></span></p>
                                </div>
                                <div className="builderActionBtn">
                                    <div onClick={builderHide} className="close-btn mr-3 cursor-pointer py-2 px-3 mb-3 sm:-mb-[2px] hover:bg-[#ebe4ff] hover:rounded">
                                        <span> Close </span>
                                    </div>
                                    <button className='btn btn-font textBase'> Change to Hostinger Builder </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Renew Component */}
                    <div className={renewShow}>
                        <Renew />
                    </div>
                </div>
            </div>
            <div className="manage-btn">
                <div className="action flexbox">
                    <button type='button' className='web-btn btn-font' >Manage</button>
                </div>
            </div>
        </div>
    </div>
  )
}

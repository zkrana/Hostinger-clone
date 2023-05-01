import React, { useState } from 'react'
import  './search.css'
import Renew from '../Websites/Renew'

export default function Hostingblock() {
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
        setRenew(!renew);
    }
    let renewShow = renew ? 'openRenew' : 'hideRenewPrompt';


  return (
    <div className="w-full sm:w-[48%]">
        <div className="content-body w-full">
            <div className="panel-controller">
                <div className="main-box-wrapper fixweb-block-p full-width">
                    <div className=" regular-heading title full-width text-center md:text-left">
                        <div className="content-box full-width">
                            <div className="hosting-package-details">
                                <h3 className='flex'> Business Web Hosting <span className='edit-host'> 
                                <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="icon-border-color" focusable="false" viewBox="0 0 24 24" class="h-icon icon-primary hosting-card__customize-plan" width="20" height="20" dataV65a7cfc4=""><g><path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.07959L17.75 7.67922L7.75 17.2782H4V13.6786L14 4.07959ZM20.71 3.48446C21.1 3.85882 21.1 4.46355 20.71 4.83792L18.75 6.71932L15 3.11969L16.96 1.23829C17.35 0.863929 17.98 0.863929 18.37 1.23829L20.71 3.48446ZM24 20.1579H0V23.9975H24V20.1579Z"></path></g></svg>
                                    </span> </h3>
                                <p className='active-hosting-p'> 
                                Active  | North America (USA, AZ) | <a href='#' className='text-light'>3 websites</a>
                                </p>
                            </div>
                            <div className="hosting-usage">
                                <p>
                                    5% of resources used
                                </p>
                                <div className="usages-bar"></div>
                            </div>
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
                        <Renew renewOpen={setRenew} />
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

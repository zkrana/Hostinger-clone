import React, { useState } from 'react'
import './renew.css'
export default function Renew() {
    const [renew, setRenew] = useState(true);

    const renewBlockHide = () =>{
        if(renew === true){
            setRenew(false)
        }else{
            setRenew(true)
        }
       
    }
  return (
    <div className='overlay'>
        <div className="renew-wrapper">
            <div className="renew-header">
                <h2 className='block-heading'> Renew your Business Web Hosting </h2>
                <p className='block-desc'> Review your selected invoice and proceed to checkout </p>
            </div>
            <div className="purchase-deatils">
                <div className="subscription-id">
                    <h4> Subscription ID </h4>
                    <p> <span className='dynamic-value'> AzZcopTYf5wP41KWW </span> </p>
                </div>
                <div className="package-name">
                    <h4> Service </h4>
                    <p> <span className='dynamic-value'> Business Web Hosting </span> </p>
                </div>
            </div>
            <div className="renew-details">
                <div className="table">
                    <table className='tbale'>
                        <tr>
                            <td> Payment method <a href='#'>Edit</a> </td>
                            <td> biz***vo@gmail.com <span>  <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="ic-paypal" focusable="false" viewBox="0 0 24 24" class="h-icon icon-static-view-box h-icon--no-custom-width payment-method__type" dataVC3b5a7b6=""><g><g><path d="M18.2274 8.90082L8.12506 18.2904H4.41965C4.16233 18.2904 3.95647 18.0712 4.00794 17.852L6.47821 4.52603C6.52968 4.21918 6.83846 4 7.19871 4H13.4773C17.8003 4.13151 18.984 6.01644 18.212 8.90958L18.2274 8.90082Z" fill="#002C8A"></path><path d="M18.3914 8.03271C19.9353 8.73408 20.2955 10.0492 19.7809 11.8026C19.1119 14.3889 17.1048 15.4848 14.1713 15.5286L13.3479 15.5724C13.0391 15.5724 12.8333 15.7478 12.7818 16.0108L12.1128 19.4738C12.0613 19.7806 11.7525 19.9998 11.3923 19.9998H8.30442C8.0471 19.9998 7.84124 19.7806 7.8927 19.5615L9.02491 13.293C9.07638 13.0738 18.3914 8.03271 18.3914 8.03271Z" fill="#009BE1"></path><path d="M8.95898 13.6001L9.98826 8.03297C10.022 7.90113 10.1059 7.78244 10.2268 7.69527C10.3478 7.6081 10.4991 7.55732 10.6573 7.55078H15.5978C16.7815 7.55078 17.6564 7.72612 18.3769 8.03297C18.1196 9.96174 17.0388 13.0741 11.7895 13.1617H9.52509C9.26777 13.1617 9.01045 13.3371 8.95898 13.6001Z" fill="#001F6B"></path></g></g></svg> </span> </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="builderActionBtn">
                <div onClick={renewBlockHide} className="close-btn mr-3 cursor-pointer py-2 px-3 mb-3 sm:-mb-[2px] hover:bg-[#ebe4ff] hover:rounded">
                    <span> Close </span>
                </div>
                <button className='btn btn-font textBase'> Change to Hostinger Builder </button>
            </div>
        </div>
    </div>
  )
}

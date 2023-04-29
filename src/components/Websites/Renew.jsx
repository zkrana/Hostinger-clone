import React, { useState } from 'react'
import './renew.css'
export default function Renew() {
    const [renews, setRenews] = useState(true);

    const renewBlockHide = () =>{
        if(renews == true){
            setRenews(false)
        }else{
            setRenews(true)
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
                            <td className='font-semibold'> Taxes & Fees </td>
                            <td> $14.35 </td>
                        </tr>
                        <tr>
                            <td className=' font-semibold'> Expiration Date </td>
                            <td> 2025-03-16</td>
                        </tr>
                        <tr>
                            <td className=' font-semibold'> Total </td>
                            <td> $157.84</td>
                        </tr>
                    </table>
                    <div className="privacy-renew">
                        <p className=' text-justify'>
                            By checking out, you agree with our <a href='#'>Terms of Service</a> and confirm that you have read our <a href='#'>Privacy Policy</a>. You can cancel recurring payments at any time.
                        </p>
                    </div>
                </div>
            </div>
            <div className="builderActionBtn mt-5">
                <div onClick={renewBlockHide} className="close-btn mr-3 cursor-pointer py-2 px-3 mb-3 sm:-mb-[2px] hover:bg-[#ebe4ff] hover:rounded">
                    <span> Close </span>
                </div>
                <button className='btn btn-font textBase'> Change to Hostinger Builder </button>
            </div>
        </div>
    </div>
  )
}

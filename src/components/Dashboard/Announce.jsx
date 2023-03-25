import React, { useState } from 'react'
import './announce.css'
export default function Announce() {
  const [announce, setAnnounce] = useState(false);

  const closeAnnounce = () =>{
    setAnnounce(true);
  }
  let popClose = announce ? 'disNone' : null;

  return (
    <div className={popClose}>
        <div className="container">
          <div className="announce-wrapper">
              <div className="announce-title text-center md:text-left">
                <h3> Earn with us! </h3>
                <p> 
                    You can earn money by recommending Hostinger to your friends, network, and family  
                </p>
              </div>
              <div className="announce-action flexbox">
                <button type='button' className='btn btn-font' >Find out more</button>
                <span onClick={closeAnnounce}>
                  <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="ic-close" focusable="false" viewBox="0 0 24 24" class="h-icon icon-gray icon-static-view-box h-icon--no-custom-width referral-banner__close-icon" dataV21f970be=""><g><path fill-rule="evenodd" clip-rule="evenodd" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"></path></g></svg>
                </span>
              </div>
          </div>
        </div>
    </div>
  )
}

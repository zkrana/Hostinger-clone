import React, { useState } from 'react'
import './livechat.css'
import chatagent from '../../images/chat.png'

export default function Livechat() {
    
    const [panel, showPanel] = useState(false);

    const liveChat = () =>{
        if(panel === false){
            showPanel(true)
        }else{
            showPanel(false)
        }
    }

    let liveChatwrap = panel ? 'showChatPanel' : 'hideChatPanel';

  return (
    <div className='relative'>
        <div className="py-[20px] md:py-[40px] absolute right-[40px]">
          <div className="chat" onClick={liveChat}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="30" fill="#5025D1"/>
                <path d="M44 46C44 46 39.2863 44.1451 35.4728 42.6592H19.4375C17.5392 42.6592 16 41.0272 16 39.0144V17.6448C16 15.632 17.5392 14 19.4375 14H40.5615C42.4598 14 43.999 15.632 43.999 17.6448V36.0491H44V46ZM39.8614 34.0181C39.5309 33.6105 38.9541 33.5634 38.5692 33.9125C38.5392 33.9392 35.5538 36.5941 29.999 36.5941C24.5132 36.5941 21.4818 33.9584 21.4278 33.9104C21.043 33.5629 20.4676 33.6105 20.1376 34.0171C19.9791 34.2125 19.9004 34.4673 19.919 34.7249C19.9376 34.9825 20.052 35.2215 20.2366 35.3888C20.3786 35.5168 23.7741 38.5387 29.999 38.5387C36.2249 38.5387 39.6204 35.5168 39.7624 35.3888C39.9467 35.2216 40.0609 34.9828 40.0795 34.7255C40.098 34.4681 40.0196 34.2135 39.8614 34.0181Z" fill="white"/>
              </svg>
          </div>
          <div className={liveChatwrap}>
              <div className="chatPanel-body">
                  <div className="agent">
                    <img src={chatagent} alt='Agent' />
                    <img src={chatagent} alt='Agent' />
                    <img src={chatagent} alt='Agent' />
                  </div>
                  <div className="welcome-note">
                    <h1 class="greet">Hi 👋</h1>
                    <h2 class="greet-para">How can we help?</h2>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

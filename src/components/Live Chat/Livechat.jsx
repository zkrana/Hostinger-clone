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
    <div>
        <div className="py-[20px] md:py-[40px] fixed right-[40px] bottom-0">
          <div className="chat" onClick={liveChat}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="30" fill="#5025D1"/>
                <path d="M44 46C44 46 39.2863 44.1451 35.4728 42.6592H19.4375C17.5392 42.6592 16 41.0272 16 39.0144V17.6448C16 15.632 17.5392 14 19.4375 14H40.5615C42.4598 14 43.999 15.632 43.999 17.6448V36.0491H44V46ZM39.8614 34.0181C39.5309 33.6105 38.9541 33.5634 38.5692 33.9125C38.5392 33.9392 35.5538 36.5941 29.999 36.5941C24.5132 36.5941 21.4818 33.9584 21.4278 33.9104C21.043 33.5629 20.4676 33.6105 20.1376 34.0171C19.9791 34.2125 19.9004 34.4673 19.919 34.7249C19.9376 34.9825 20.052 35.2215 20.2366 35.3888C20.3786 35.5168 23.7741 38.5387 29.999 38.5387C36.2249 38.5387 39.6204 35.5168 39.7624 35.3888C39.9467 35.2216 40.0609 34.9828 40.0795 34.7255C40.098 34.4681 40.0196 34.2135 39.8614 34.0181Z" fill="white"/>
              </svg>
          </div>
          <div className={liveChatwrap}>
              <div className="chatPanel-body">
                  <div className="greet-body">

                    <div className="agent">
                      <img src={chatagent} alt='Agent' />
                      <img src={chatagent} alt='Agent' />
                      <img src={chatagent} alt='Agent' />
                    </div>
                    <div className="welcome-note">
                      <h1 class="greet">Hi 👋</h1>
                      <h2 class="greet-para">How can we help?</h2>
                    </div>

                    <div className="send-message">
                    <div className="message-head">
                      <h5>Send us a message</h5>
                      <p> We typically reply in under 10 minutes </p>
                    </div>
                    <div className="action-icon cursor-pointer">
                      <svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" color="linkColor"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.563 14.605l9.356-5.402c1-.577 1-2.02 0-2.598L4.563 1.203a1.5 1.5 0 00-2.25 1.3v10.803a1.5 1.5 0 002.25 1.3zM6.51 8.387L2.313 9.512V6.297L6.51 7.42c.494.133.494.834 0 .966z" fill="#334BFA"></path></svg>
                    </div>
                  </div>

                  </div>

                  <div className="chat-footer">
                    <div className="chat-footer-item">
                      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="home-active_svg__a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2.335L3 7.51c-.625.437-1 1.116-1 1.84V19.7C2 20.965 3.125 22 4.5 22h15c1.375 0 2.5-1.035 2.5-2.3V9.35c0-.724-.375-1.403-1-1.84l-7.5-5.175a2.69 2.69 0 00-3 0zM7.316 14.366a.85.85 0 10-1.132 1.268A8.704 8.704 0 0012 17.852c2.233 0 4.272-.84 5.816-2.218a.85.85 0 10-1.132-1.268A7.005 7.005 0 0112 16.152c-1.8 0-3.44-.675-4.684-1.786z"></path></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2.335L3 7.51c-.625.437-1 1.116-1 1.84V19.7C2 20.965 3.125 22 4.5 22h15c1.375 0 2.5-1.035 2.5-2.3V9.35c0-.724-.375-1.403-1-1.84l-7.5-5.175a2.69 2.69 0 00-3 0zM7.316 14.366a.85.85 0 10-1.132 1.268A8.704 8.704 0 0012 17.852c2.233 0 4.272-.84 5.816-2.218a.85.85 0 10-1.132-1.268A7.005 7.005 0 0112 16.152c-1.8 0-3.44-.675-4.684-1.786z" fill="#0057FF"></path><path d="M3 7.51l-.965-1.4-.01.007L3 7.51zm7.5-5.175L9.538.934l-.003.002.965 1.399zM21 7.51l.974-1.393-.009-.006L21 7.51zm-7.5-5.175l.966-1.4-.004-.001-.962 1.401zM6.116 14.434l1.268 1.132-1.268-1.132zm1.2-.068l1.133-1.268-1.133 1.268zm-1.132 1.268L5.05 16.902l1.133-1.268zm11.632 0l1.133 1.268-1.133-1.268zm.068-1.2l-1.268 1.132 1.268-1.132zm-1.2-.068l-1.133-1.268 1.133 1.268zM3.965 8.91l7.5-5.175L9.536.936l-7.5 5.175 1.93 2.798zM3.7 9.35c0-.12.063-.299.274-.447L2.026 6.117C.987 6.843.3 8.022.3 9.35h3.4zm0 10.35V9.35H.3V19.7h3.4zm.8.6a.906.906 0 01-.615-.227.509.509 0 01-.185-.373H.3c0 2.335 2.022 4 4.2 4v-3.4zm15 0h-15v3.4h15v-3.4zm.8-.6c0 .11-.047.246-.185.373a.906.906 0 01-.615.227v3.4c2.178 0 4.2-1.665 4.2-4h-3.4zm0-10.35V19.7h3.4V9.35h-3.4zm-.274-.447c.211.148.274.326.274.447h3.4c0-1.328-.687-2.507-1.726-3.233l-1.948 2.786zm-7.492-5.169l7.5 5.175 1.931-2.798-7.5-5.175-1.93 2.798zm-1.072.002a.991.991 0 011.076 0L14.462.934a4.39 4.39 0 00-4.924 0l1.924 2.802zm-4.078 11.83a.85.85 0 01-1.2.068l2.265-2.536a2.55 2.55 0 00-3.6.203l2.535 2.265zm-.068-1.2c.35.313.38.85.068 1.2l-2.536-2.265a2.55 2.55 0 00.203 3.6l2.265-2.535zM12 16.152c-1.8 0-3.44-.675-4.684-1.786l-2.265 2.536A10.405 10.405 0 0012 19.552v-3.4zm4.684-1.786A7.005 7.005 0 0112 16.152v3.4c2.667 0 5.105-1.004 6.949-2.65l-2.265-2.536zm-.068 1.2a.85.85 0 01.068-1.2l2.265 2.536a2.55 2.55 0 00.203-3.6l-2.536 2.264zm1.2.068a.85.85 0 01-1.2-.068l2.536-2.265a2.55 2.55 0 00-3.6-.203l2.264 2.536zM12 17.852c2.233 0 4.272-.839 5.816-2.218l-2.265-2.536A5.305 5.305 0 0112 14.452v3.4zm-5.816-2.218A8.704 8.704 0 0012 17.852v-3.4a5.305 5.305 0 01-3.551-1.354l-2.265 2.536z" fill="#0057FF" mask="url(#home-active_svg__a)"></path></svg>
                          <h4>Home</h4>
                    </div>
                    <div className="chat-footer-item">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="messages_svg__a" fill="#fff"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 2a3 3 0 013 3V20.806c0 1.335-1.613 2.005-2.559 1.062L15.56 18H5a3 3 0 01-3-3V5a3 3 0 013-3h14z"></path></mask><path class="messages_svg__fill" d="M19.441 21.868l1.2-1.204-1.2 1.204zM15.56 18v-1.7h.702l.498.496-1.2 1.204zM20.3 5A1.3 1.3 0 0019 3.7V.3A4.7 4.7 0 0123.7 5h-3.4zm0 8.956V5h3.4v8.956h-3.4zm0 2.544v-2.544h3.4V16.5h-3.4zm0 4.306V16.5h3.4v4.306h-3.4zm.341-.142a.23.23 0 00-.218-.043.228.228 0 00-.123.185h3.4c0 2.848-3.441 4.277-5.459 2.267l2.4-2.409zm-3.882-3.868l3.882 3.868-2.4 2.409-3.882-3.869 2.4-2.408zM5 16.3h10.559v3.4H5v-3.4zM3.7 15A1.3 1.3 0 005 16.3v3.4A4.7 4.7 0 01.3 15h3.4zm0-10v10H.3V5h3.4zM5 3.7A1.3 1.3 0 003.7 5H.3A4.7 4.7 0 015 .3v3.4zm14 0H5V.3h14v3.4z" fill="#1A1A1A" mask="url(#messages_svg__a)"></path><path class="messages_svg__fill" fill-rule="evenodd" clip-rule="evenodd" d="M17 7a.85.85 0 010 1.7H7A.85.85 0 117 7h10zm-5 4a.85.85 0 010 1.7H7A.85.85 0 017 11h5z" fill="#1A1A1A"></path></svg>
                          <h4>Messages</h4>
                    </div>
                    <div className="chat-footer-item">
                    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="help_svg__stroke help_svg__circle" cx="12" cy="12" r="9.65" stroke="#1A1A1A" stroke-width="1.7"></circle><path class="help_svg__stroke help_svg__negative" d="M9.664 8.576a2.41 2.41 0 114.102 2.39l-1.075 1.104c-.326.322-.765.76-.765 1.544v.364" stroke="#1A1A1A" stroke-width="1.7" stroke-linecap="round"></path><circle class="help_svg__fill help_svg__negative" cx="11.927" cy="16.884" r="0.884" fill="#1A1A1A"></circle></svg>
                          <h4>Help</h4>
                    </div>
                  </div>
              </div>

          </div>
        </div>
    </div>
  )
}

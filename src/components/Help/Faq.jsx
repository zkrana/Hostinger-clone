import React from 'react'
import './faq.css'
import Faqbody from './Faqbody'
import Livechat from '../Live Chat/Livechat'
export default function Faq() {
  return (
    <div>
        <div className='container faq'>
            <div className="header">
                <h2> Can't find an answer? </h2>
                <p> Select a topic and get in touch with our Success team </p>
            </div>
            <div className="faq-body">
                <Faqbody />
            </div>
        </div>
        <Livechat />
    </div>
  )
}

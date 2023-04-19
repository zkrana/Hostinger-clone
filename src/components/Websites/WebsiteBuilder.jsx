import React, { useState } from 'react'
import './websitebuilder.css'

export default function WebsiteBuilder() {
    const [builderpop, setBuilderPop] = useState(true)
    const builderPromoHide = () =>{
        if(builderpop == true){
            setBuilderPop(false)
        }else{
            setBuilderPop(true)
        }
    }

    const PromoCssControll = builderpop? '' : 'builderPromoBannerHide'

  return (
    <div className={(PromoCssControll ) + ' w-full sm:w-[49%]' }>
        <div className="website-builder">
            <div className="builder-content">
                <h2>Easy Building with Hostinger Website Builder</h2>
                <p>
                Try out a demo of our new and free website builder solution. No coding or design skills are required.
                </p>
            </div>
            <div className="manage-btn">
                <div className="action flexbox">
                    <button type='button' className='close' onClick={builderPromoHide}> Close </button>
                    <button type='button' className='btn btn-font' >Try Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import './hosting.css'
import EmailLayer1 from './EmailLayer1'
import EmailLayer2 from './EmailLayer2'
import EmailLayer3 from './EmailLayer3'

export default function Email() {

    const [show, setHide] = useState(true)
    const showHide = () =>{
        if( show === true ){
            setHide(false)
        }else{
            setHide(true)
        }
    }
    let panelControl = show ? 'showPanel' : 'HidePnael';
    let iconRotate = show ? 'rotate' : 'hideRotate';

  return (

    <div className="container">
        <div className="content-body">
            <div className="panel-controller">
                <div className="title text-[18px]">
                    <h3>  Email </h3>
                </div>
                <div className="panel-on-off" onClick={showHide}>
                    <svg className={iconRotate} part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="ic-keyboard-arrow-down" focusable="false" viewBox="0 0 24 24" class="h-icon icon-primary h-icon--no-custom-width align-baseline cursor-pointer"><g><path  fill-rule="evenodd" clip-rule="evenodd" d="M7.91 8.83984L12.5 13.4198L17.09 8.83984L18.5 10.2498L12.5 16.2498L6.5 10.2498L7.91 8.83984Z"></path></g></svg>
                </div>
            </div>
            <div className={panelControl}>
                <EmailLayer1 />
                <hr className=' border-dashed border-[#dad9da]'></hr>
                <EmailLayer2 />
                <hr className=' border-dashed border-[#dad9da]'></hr>
                <EmailLayer3 />
                <hr className=' border-dashed border-[#dad9da]'></hr>
                <div className="manage-all">
                    <div className="flex justify-center items-center ">
                        <button type='button' className='manage' >
                            Manage all 
                        <svg part="svg" className=' fill-light' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="icon-arrow-forward" focusable="false" viewBox="0 0 24 24" class="h-icon icon-primary" width="18" height="18" dataVEf2cbd2e=""><g><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"></path></g></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

import React, { useState } from 'react'
import './hosting.css'
import HostingPiece from './HostingBox'
export default function Hosting() {

    const [show, setHide] = useState(true)
    const showHide = () =>{
        if( show == true ){
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
                    <h3>  Hosting </h3>
                </div>
                <div className="panel-on-off" onClick={showHide}>
                    <svg className={iconRotate} part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="ic-keyboard-arrow-down" focusable="false" viewBox="0 0 24 24" class="h-icon icon-primary h-icon--no-custom-width align-baseline cursor-pointer"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M7.91 8.83984L12.5 13.4198L17.09 8.83984L18.5 10.2498L12.5 16.2498L6.5 10.2498L7.91 8.83984Z"></path></g></svg>
                </div>
            </div>
            <div className={panelControl}>
                <HostingPiece />
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import './helpstatus.css'
import Content from './Content'

export default function Helpstatus() {
  return (
    <div className='container status'>
        <div className="content-body">
            <div className="panel-controller">
                <div className="successStatus text-[16px] text-successText font-semibold">
                    <h3>  All Systems Operational </h3>
                </div>

            </div>
            <div>
                <Content />
            </div>
        </div>
    </div>
  )
}

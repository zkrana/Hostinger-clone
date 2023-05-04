import React from 'react'
import './upgrade.css'
import Header from '../../Header/Header'
import { NavLink } from 'react-router-dom'

export default function Upgrade() {
  return (
    <div>
        <Header />
        <div className='container'>
            <div className="page-thumbnail">
                <div className="page-back">
                    <NavLink className='page-anchor' to='/websites'>
                        <svg part="svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" aria-labelledby="ic-arrow-left" focusable="false" viewBox="0 0 24 24" class="h-icon h-icon--no-custom-width cursor-pointer" dataV30100e3d=""><g><path fill-rule="evenodd" clip-rule="evenodd" d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"></path></g></svg>
                        <span> Back </span>
                    </NavLink>
                </div>
                <div className="page-tittle">
                    <h1 className='page-heading'> Upgrade your plan </h1>
                    <p className='page-title-desc'>
                    More features and resources to boost your hosting performance
                    </p>
                </div>
            </div>
            <div className="web-package-upgrade">
                <div className="web-package-details">
                    
                </div>
                <div className="web-package-pricing-toggle">

                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import Header from '../Header/Header'
import WebsiteSearch from './WebsiteSearch'
import WebBlock from './WebBlock'
export default function Websites() {
  return (
    <div>
        <Header />
        <WebsiteSearch />
        <div className="container">
            <div className="websites-wrapper">
                <WebBlock />
                <WebBlock />
                
            </div>
        </div>
    </div>
  )
}

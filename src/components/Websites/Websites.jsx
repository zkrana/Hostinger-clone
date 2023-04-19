import React from 'react'
import Header from '../Header/Header'
import WebsiteSearch from './WebsiteSearch'
import WebBlock from './WebBlock'
import WebsiteBuilder from './WebsiteBuilder'
import MigrateWebsite from './MigrateWebsite'
export default function Websites() {
  return (
    <div>
        <Header />
        <WebsiteSearch />
        <div className="container">
            <div className="websites-wrapper">
                <WebBlock />
                <WebBlock />
                <WebBlock />
                <WebsiteBuilder />
                <MigrateWebsite />
            </div>
        </div>
    </div>
  )
}

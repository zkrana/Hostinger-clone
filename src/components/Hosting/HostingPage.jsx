import React from 'react'
import Header from '../Header/Header'
import Hostingblock from './Hostingblock'
import Search from './Search'
import MigrateWebsite from '../Websites/MigrateWebsite'
export default function Hostingpage() {
  return (
    <div>
        <Header />
        <Search />
        <div className="container">
            <div className="websites-wrapper">
                <Hostingblock />
                <MigrateWebsite />
            </div>
        </div>
    </div>
  )
}

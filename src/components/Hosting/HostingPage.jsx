import React from 'react'
import Header from '../Header/Header'
import Hostingblock from './Hostingblock'
import Search from './Search'
import Hostingadd from './Hostingadd'
export default function Hostingpage() {
  return (
    <div>
        <Header />
        <Search />
        <div className="container">
            <div className="websites-wrapper">
                <Hostingblock />
                <Hostingadd />
            </div>
        </div>
    </div>
  )
}

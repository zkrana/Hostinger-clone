import React from 'react'
import Header from '../Header/Header'
import HelpSearch from './HelpSearch'
import Status from './Helpstatus'
import Faq from './Faq'
export default function help() {
  return (
    <div>
        <Header />
        <HelpSearch />
        <Status />
        <Faq />
    </div>
  )
}

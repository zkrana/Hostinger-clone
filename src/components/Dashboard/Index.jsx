import React from 'react'
import Header from '../Header/Header'
import SearchBar from './SearchBar'
import Announce from './Announce'
import Claimdomain from './Claimdomain'
import Hosting from './Hosting'
import Email from './Email'
import Livechat from '../Live Chat/Livechat'


export default function Index() {
  return (
    <div>
        <Header />
        <SearchBar />
        <Announce />
        <Claimdomain />
        <Hosting />
        <Email />
        <Livechat />
    </div>
  )
}

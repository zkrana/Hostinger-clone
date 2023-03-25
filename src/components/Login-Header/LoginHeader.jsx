import React from 'react'
import './loginheader.css'
import logo from '../../images/logo.svg'
export default function LoginHeader() {
  return (
    <div className='header-container'>
      <img src={logo} alt='Logo' width={147} height={50} />
    </div>
  )
}

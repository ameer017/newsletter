import React from 'react'
import reactLogo from '../assets/icon-success.svg'
import './SuccStyle.scss'

const DesktopS = () => {
  return (
    <div className='container'>
        <img src={reactLogo} />
        <h1>Thanks for subscribing!</h1>
        <small>A confirmation email has been sent to {e.target.value}. Please open it and click the button inside to confirm your subscription.</small>
        <button>Dismiss message</button>
    </div>
  )
}

export default DesktopS
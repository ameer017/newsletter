import React from 'react'
import reactLogo from '../assets/icon-success.svg'
import './SuccStyle.scss'
import { useNavigate, useParams } from 'react-router-dom';


const DesktopS = () => {
  const navigate = useNavigate();
  // const {value} = useParams()

  const handleDismiss = () => {
    navigate('/');
  }
  return (
    <div className='container'>
        <img src={reactLogo} />
        <h1>Thanks for subscribing!</h1>
        <small>A confirmation email has been sent to . Please open it and click the button inside to confirm your subscription.</small>
        <button onClick={handleDismiss}>Dismiss message</button>
    </div>
  )
}

export default DesktopS
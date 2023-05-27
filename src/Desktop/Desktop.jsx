import React, {useState} from 'react'
import './Desktop.scss'
import {AiFillCheckCircle} from 'react-icons/ai'
import reactLogo from '../assets/illustration-sign-up-desktop.svg'
import reactLogotwo from '../assets/illustration-sign-up-mobile.svg'
import reactLogothree from '../assets/icon-list.svg'

const Desktop = (props) => {

    const [email, setEmail] = useState('')
    const [isValid, setIsValid] = useState(false)

    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(regex.test(email))

    }

    const handleInputChange = (e) => {
        setEmail(props.e.target.value)
    }
  return (
    <div className='desktop'>

        <div className='phone'>
            <img src={reactLogotwo} alt='image'/>
        </div>
        
        <div className='text'>
            <h1>Stay updated!</h1>
            <p>join 60,000+ product managers receiving monthly updates on:</p>

            <div className='checked'>
                <img src={reactLogothree} />
                <p>Product discovery and building what matters</p>
            </div>
            <div className='checked'>
                <img src={reactLogothree} />
                <p>
                    Measuring to ensure updates are a success
                </p>
            </div>
            <div className='checked'>
                <img src={reactLogothree} />
                <p>And much more!</p>
            </div>

            <div className='contain'>
                <small>Email address</small>
                <div className='error'>
                    {
                        isValid ? 
                    <small style={{color: 'green'}}>Email is valid.</small> 
                            :
                    <small style={{color: 'red'}}>Valid email required.</small>
                    }
                </div>
            </div>

            <input type='email' placeholder='email@company.com' onChange={handleInputChange}/>

            <button type='submit' onClick={validateEmail}>Subscribe to monthly newsletter</button>
        </div>
        <div className='image'>
            <img src={reactLogo} alt='image'/>
        </div>
    </div>
  )
}

export default Desktop
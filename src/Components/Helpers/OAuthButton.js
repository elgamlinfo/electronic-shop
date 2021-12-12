import React from 'react'
import './helpers.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faGoogle} from "@fortawesome/free-brands-svg-icons"

const O_Auth_Button = () => {
    return (
        <div className='auth_btn'>
            <button className='fb_btn'><FontAwesomeIcon  icon={faFacebookF}/></button>
            <button className='g_btn'><FontAwesomeIcon icon={faGoogle}/></button>
        </div>
    )
}

export default O_Auth_Button

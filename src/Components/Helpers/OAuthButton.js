import React from 'react'
import './oauthbtn.scss'
const O_Auth_Button = () => {
    return (
        <div className='auth_btn'>
            <button className='fb_btn'><i className='fab fa-facebook-f'></i></button>
            <button className='g_btn'><i className='fab fa-google'></i></button>
        </div>
    )
}

export default O_Auth_Button

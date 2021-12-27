import React from 'react'
import { Link } from 'react-router-dom'
import './authform.scss'
import OAuthButton from '../Helpers/OAuthButton'
import FormValid from './FormValid'
const AuthForm = (props) => {
    
    return (
        <div className='form'>
            <form className='form_cont'>
                <h2 className='form_title'>welcome to our app</h2>
                <OAuthButton />
                <div className='or_line'>OR</div>
                <input 
                    type='text' 
                    name='name'
                    placeholder='your name here'
                />
                <input 
                    type='email' 
                    name='email'
                    placeholder='your email here'
                />
                <input 
                    type='password' 
                    name='password'
                    placeholder='your password here'
                />
                <button className='submit'>signup</button>
                <p className='redir'>have an account ? <Link to="/login">login</Link></p>
            </form>
            <FormValid />
        </div>
    )
}

export default AuthForm

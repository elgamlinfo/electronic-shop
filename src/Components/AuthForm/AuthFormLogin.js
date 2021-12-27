import React, {useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import './authform.scss'
import {userSliceActions} from '../../Store/UserSlice'
import OAuthButton from '../Helpers/OAuthButton'
import FormValid from './FormValid'
const AuthFormLogin = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    function submitHandler (e) {
        e.preventDefault();
        let data = {
            email,
            password
        }
        axios.post(`${process.env.REACT_APP_API_LINK}/user/login`,data)
        .then(response => {
            dispatch(userSliceActions.setIsAuth())
            dispatch(userSliceActions.setUserData(response.data))
            localStorage.setItem("user", JSON.stringify(response.data))
            response.data.admin?
            navigate('/dashboard'):
            navigate('/')
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className='form'>
            <form className='form_cont'>
                <h2 className='form_title'>welcome to our app</h2>
                <OAuthButton />
                <div className='or_line'>OR</div>
                <input 
                    type='email' 
                    name='email'
                    placeholder='your email here'
                    value={email}
                    onChange = {e => setEmail(e.target.value)}
                />
                <input 
                    type='password' 
                    name='password'
                    placeholder='your password here'
                    value={password}
                    onChange = {e => setPassword(e.target.value)}
                />
                <button className='submit' onClick={(e) => submitHandler(e)}>Login</button>
                <p className='redir'>have an account ? <Link to="/login">login</Link></p>
            </form>
            <FormValid />
        </div>
    )
}

export default AuthFormLogin

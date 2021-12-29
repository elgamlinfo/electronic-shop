import React, {useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import axios from 'axios'
import './authform.scss'
import OAuthButton from '../Helpers/OAuthButton'
import FormValid from './FormValid'
import ReqLoading from '../Loading/ReqLoading'
const AuthForm = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [reqloading, setReqLoading] = useState(false)
    
    function submitHandler (e) {
        e.preventDefault();
        setReqLoading(true)
        let data = {
            name,
            email,
            password
        }
        axios.post(`${process.env.REACT_APP_API_LINK_DEV}/user/register`,data)
        .then(response => {
            setReqLoading(false)
            navigate('/login')
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    
    return (
        <div className='form'>
            <ReqLoading loading={reqloading}/>
            <form className='form_cont'>
                <h2 className='form_title'>welcome to our app</h2>
                <OAuthButton />
                <div className='or_line'>OR</div>
                <input 
                    type='text' 
                    name='name'
                    placeholder='your name here'
                    value={name}
                    onChange = {e => setName(e.target.value)}
                />
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
                <button className='submit' onClick={(e) => submitHandler(e)}>signup</button>
                <p className='redir'>have an account ? <Link to="/login">login</Link></p>
            </form>
            <FormValid />
        </div>
    )
}

export default AuthForm

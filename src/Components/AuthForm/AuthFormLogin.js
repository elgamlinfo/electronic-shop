import React, {useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import './authform.scss'
import ReqLoading from '../Loading/ReqLoading'
import {userSliceActions} from '../../Store/UserSlice'
import OAuthButton from '../Helpers/OAuthButton'
import FormValid from './FormValid'
import { ToastContainer, toast } from 'react-toastify';
import {getCart} from '../../Store/cartSlice'


const AuthFormLogin = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [reqloading, setReqLoading] = useState(false)
    let errors = []

    function formValidation (data) {
        let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
        errors = []
        for(let key in data) {
            if(data[key] === '') {
                errors.push(`${key} is empty!😊`)
            }
            if(key === "email" && data[key] !== '' && !reg.test(data[key])){
                errors.push(`${key} is not valid!😊`)
            }
            if(key === "password" && data[key] !== '' && !passReg.test(data[key])){
                errors.push(`${key} must contains numbers, lowercase and uppercase letters😊`)
            }
        }
    }
    
    function submitHandler (e) {
        e.preventDefault();
        let data = {
            email,
            password
        }
        formValidation(data);
        if(errors.length !== 0) {
            errors.forEach((error, i) => {
                toast.error(error);
            })
            return;
        }
        setReqLoading(true)
        axios.post(`${process.env.REACT_APP_API_LINK_DEV}/user/login`,data)
        .then(response => {
            dispatch(userSliceActions.setUserData(response.data.user))
            localStorage.setItem("token", response.data.token)
            dispatch(getCart())
            localStorage.setItem("cart", response.data.user.cartId)
            
            dispatch(userSliceActions.setIsAuth())
            setReqLoading(false)
            response.data.user.admin?
            navigate('/dashboard'):
            navigate('/')
        })
        .catch((res) => {
            setReqLoading(false)
            console.clear();
            toast.error('email or password not valid check it and try again😊');
        })
    }
    return (
        <div className='form'>
            <ReqLoading loading={reqloading} />
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
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
                <p className='redir'>don't have an account? <Link to="/signup">signup</Link></p>
            </form>
            <FormValid />
        </div>
    )
}

export default AuthFormLogin

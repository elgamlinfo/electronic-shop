import React, {useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import axios from 'axios'
import './authform.scss'
import OAuthButton from '../Helpers/OAuthButton'
import FormValid from './FormValid'
import ReqLoading from '../Loading/ReqLoading'
import { ToastContainer, toast } from 'react-toastify';








const AuthForm = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
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
            name,
            email,
            password
        }
        formValidation(data);
        if(errors.length !== 0) {
            errors.forEach((error, i) => {
                toast.error(error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            return;
        }
        setReqLoading(true)
        axios.post(`${process.env.REACT_APP_API_LINK_DEV}/user/register`,data)
        .then(response => {
            setReqLoading(false)
            navigate('/login')
        })
        .catch(error => {
            setReqLoading(false)
            console.clear();
            toast.error('email is used, please try another one😊', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
            <FormValid/>
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
        </div>
    )
}

export default AuthForm

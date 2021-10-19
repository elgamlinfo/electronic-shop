import React from 'react'
import AuthForm from '../../Components/AuthForm/AuthForm'

const Login = () => {
    let inputsData = [
        {
            type: 'email',
            name: 'email',
            placeholder:'your email here'
        },
        {
            type: 'password',
            name: 'password',
            placeholder:'your password here'
        }
    ]
    return (
        <div>
            <AuthForm inputsData={inputsData} text='login'/>
        </div>
    )
}

export default Login

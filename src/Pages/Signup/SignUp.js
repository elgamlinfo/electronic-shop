import React from 'react'
import AuthForm from '../../Components/AuthForm/AuthForm'

const SignUp = () => {
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
        },
        {
            type: 'password',
            name: 'confirm-password',
            placeholder:'confirm password here'
        }
    ]
    return (
        <>
            <AuthForm inputsData={inputsData} text='sign up'/>  
        </>
    )
}

export default SignUp

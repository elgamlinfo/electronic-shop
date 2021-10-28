import React, {useState,useEffect} from 'react'
import Loading from '../../Components/Loading/Loading';
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
    const [loading, setLoading] = useState(true);
    useEffect(_=> {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        },2000)
    },[])
    return (
        <>
            <Loading loading ={loading}/>
            <AuthForm inputsData={inputsData} text='sign up'/>  
        </>
    )
}

export default SignUp

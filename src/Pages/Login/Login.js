import React, {useState,useEffect} from 'react'
import Loading from '../../Components/Loading/Loading';
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
    const [loading, setLoading] = useState(true);
    useEffect(_=> {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        },2000)
    },[])
    return (
        <div>
            <Loading loading ={loading}/>
            <AuthForm inputsData={inputsData} text='login'/>
        </div>
    )
}

export default Login

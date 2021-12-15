import React, {useState,useEffect} from 'react'
import Loading from '../../Components/Loading/Loading';
import AuthForm from '../../Components/AuthForm/AuthForm'
import {useDispatch} from 'react-redux'
import {footerActions} from '../../Store/FooterSlice'
const Login = () => {
    const dispatch = useDispatch();
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
        dispatch(footerActions.setFooterColor({color: "#f1f1f1"}))
        setTimeout(() => {
            setLoading(false);
        },2000)
    },[dispatch])
    return (
        <div>
            <Loading loading ={loading}/>
            <AuthForm inputsData={inputsData} text='login'/>
        </div>
    )
}

export default Login

import React, {useState,useEffect} from 'react'
import Loading from '../../Components/Loading/Loading';
import AuthForm from '../../Components/AuthForm/AuthForm'
import {useDispatch} from 'react-redux'
import {footerActions} from '../../Store/FooterSlice'
const SignUp = () => {
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
        dispatch(footerActions.setFooterColor({color: "#f1f1f1"}))
        setTimeout(() => {
            setLoading(false);
        },2000)
    },[dispatch])
    return (
        <>
            <Loading loading ={loading}/>
            <AuthForm inputsData={inputsData} text='sign up'/>  
        </>
    )
}

export default SignUp

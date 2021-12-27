import React, {useState,useEffect} from 'react'
import Loading from '../../Components/Loading/Loading';
import AuthForm from '../../Components/AuthForm/AuthForm'
import {useDispatch} from 'react-redux'
import {footerActions} from '../../Store/FooterSlice'


const SignUp = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(_=> {
        setLoading(true);
        dispatch(footerActions.setFooterColor({color: "#f1f1f1"}))
        setTimeout(() => {
            setLoading(false);
        },500)
    },[dispatch])




    return (
        <>
            <Loading loading ={loading}/>
            <AuthForm />  
        </>
    )
}

export default SignUp

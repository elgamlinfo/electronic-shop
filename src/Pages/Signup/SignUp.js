import React, {useEffect} from 'react'
import AuthForm from '../../Components/AuthForm/AuthForm'
import {useDispatch} from 'react-redux'
import {footerActions} from '../../Store/FooterSlice'


const SignUp = () => {
    const dispatch = useDispatch();
    useEffect(_=> {
        dispatch(footerActions.setFooterColor({color: "#f1f1f1"}))
    },[dispatch])

    return (
        <AuthForm />  
    )
}

export default SignUp

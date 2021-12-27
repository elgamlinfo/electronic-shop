import React, {useState,useEffect} from 'react'
import Loading from '../../Components/Loading/Loading';
import {useDispatch} from 'react-redux'
import {footerActions} from '../../Store/FooterSlice'
import AuthFormLogin from '../../Components/AuthForm/AuthFormLogin';
const Login = () => {
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
        <div>
            <Loading loading ={loading}/>
            <AuthFormLogin />
        </div>
    )
}

export default Login

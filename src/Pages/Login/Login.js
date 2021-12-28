import React, {useState,useEffect} from 'react'
//eslint-disable-next-line
import Loading from '../../Components/Loading/Loading';
import {useDispatch, useSelector} from 'react-redux'
import {footerActions} from '../../Store/FooterSlice'
import AuthFormLogin from '../../Components/AuthForm/AuthFormLogin';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const isAuth = useSelector(state => state.user.isAuth);
    const loadingPage = useSelector(state => state.user.loading);
    //eslint-disable-next-line
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()


    useEffect(_=> {
        if(isAuth && !loadingPage){
            user.admin?navigate('/dashboard'):navigate('/') 
        }
        dispatch(footerActions.setFooterColor({color: "#f1f1f1"}))       
    })


    return (
        <div>
            {/* <Loading loading ={loading}/> */}
            <AuthFormLogin />
        </div>
    )
}

export default Login

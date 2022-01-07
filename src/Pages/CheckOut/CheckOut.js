import React,{useEffect} from 'react'
import CheckOutProdSide from "../../Components/CheckOutProdSide/CheckOutProdSide"
import CardSide from '../../Components/CardSide/CardSide';
import Loading from '../../Components/Loading/Loading';
import './checkout.scss'; 
import {useDispatch, useSelector} from 'react-redux'
import {footerActions} from '../../Store/FooterSlice'  
import { useNavigate } from 'react-router-dom';
const CheckOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector((state) => state.user.user);
    const loading = useSelector((state) => state.user.loading);
    useEffect(_=> {
        dispatch(footerActions.setFooterColor({color: "#ffffff"}))
        if (!user&&!loading) {
            navigate("/login");
        }
    },[dispatch, loading, user, navigate])


    return (
        <>
            {
                !user?<Loading loading ={loading}/>:
                <div className='check_out'>
                    <div className='container'>
                        <div className='check_wrapper'>
                            <CheckOutProdSide />
                            <CardSide />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CheckOut

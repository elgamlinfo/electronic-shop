import React,{useState,useEffect} from 'react'
import CheckOutProdSide from "../../Components/CheckOutProdSide/CheckOutProdSide"
import CardSide from '../../Components/CardSide/CardSide';
import Loading from '../../Components/Loading/Loading';
import './checkout.scss'; 
import {useDispatch} from 'react-redux'
import {footerActions} from '../../Store/FooterSlice'  
const CheckOut = () => {
    const dispatch = useDispatch();
    
    const [loading, setLoading] = useState(true);

    useEffect(_=> {
        setLoading(true);
        dispatch(footerActions.setFooterColor({color: "#ffffff"}))
        setTimeout(() => {
            setLoading(false);
        },500)
    },[dispatch])


    return (
        <>
            <Loading loading ={loading}/>
            <div className='check_out'>
                <div className='container'>
                    <div className='check_wrapper'>
                        <CheckOutProdSide />
                        <CardSide />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOut

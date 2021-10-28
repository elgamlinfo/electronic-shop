import React,{useState,useEffect} from 'react'
import CheckOutProdSide from "../../Components/CheckOutProdSide/CheckOutProdSide"
import CardSide from '../../Components/CardSide/CardSide';
import Loading from '../../Components/Loading/Loading';
import './checkout.scss';   
const CheckOut = () => {
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

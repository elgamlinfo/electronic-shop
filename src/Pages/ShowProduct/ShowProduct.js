import React, {useState,useEffect} from 'react'
import Loading from '../../Components/Loading/Loading';
import './showproduct.scss'
import ProductInfo from '../../Components/ProductInfo/ProductInfo'
import ProductThumb from '../../Components/ProductThumb/ProductThumb'
import {useDispatch} from 'react-redux'
import {footerActions} from '../../Store/FooterSlice'



const ShowProduct = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(_=> {
        setLoading(true);
        dispatch(footerActions.setFooterColor({color: "#ffffff"}))
        setTimeout(() => {
            setLoading(false);
        },2000)
    },[dispatch])
    return (
        <>
            <Loading loading ={loading}/>
            <div className='show_product'>
                <div className='container'>
                    <div className='wrapper'>
                        <ProductThumb />
                        <ProductInfo />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShowProduct
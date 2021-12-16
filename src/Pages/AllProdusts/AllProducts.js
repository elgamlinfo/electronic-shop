import React, {useState,useEffect} from 'react'
import Loading from '../../Components/Loading/Loading';
import AsideFilter from '../../Components/AsideFilter/AsideFilter';
import ProductsSide from '../../Components/ProductsSide/ProductsSide';
import './allproducts.scss';
import {useDispatch} from 'react-redux'
import {footerActions} from '../../Store/FooterSlice'

const AllProducts = () => {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
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
        <div className='all_products'>
            <div className='container'>
                <div className='wrapper'>
                    <AsideFilter />
                    <ProductsSide />
                </div>
            </div>
        </div>
        </>
    )
}

export default AllProducts

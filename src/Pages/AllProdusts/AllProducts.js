import React, {useState,useEffect} from 'react'
import Loading from '../../Components/Loading/Loading';
import AsideFilter from '../../Components/AsideFilter/AsideFilter';
import ProductsSide from '../../Components/ProductsSide/ProductsSide';
import './allproducts.scss';


const AllProducts = () => {
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

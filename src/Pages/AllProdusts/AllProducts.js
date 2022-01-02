import React, {useState,useEffect} from 'react'
import Loading from '../../Components/Loading/Loading';
import AsideFilter from '../../Components/AsideFilter/AsideFilter';
import ProductsSide from '../../Components/ProductsSide/ProductsSide';
import './allproducts.scss';
import {useDispatch} from 'react-redux'
import {footerActions} from '../../Store/FooterSlice'
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const AllProducts = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])
    const dispatch = useDispatch();
    let query = useQuery();
    useEffect(_=> {
        setLoading(true);
        dispatch(footerActions.setFooterColor({color: "#ffffff"}))
        axios.get(`${process.env.REACT_APP_API_LINK_DEV}/product/all?search=${query.get("search")||''}`)
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
    },[dispatch,query]) 
    
    return (
        <>
            {data === []?<Loading loading ={loading}/>:
            <div className='all_products'>
                <div className='container'>
                    <div className='wrapper'>
                        <AsideFilter />
                        <ProductsSide data={data}/>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default AllProducts

import React, {useState,useEffect} from 'react'
import Loading from '../../Components/Loading/Loading';
import './showproduct.scss'
import ProductInfo from '../../Components/ProductInfo/ProductInfo'
import ProductThumb from '../../Components/ProductThumb/ProductThumb'
import {useDispatch} from 'react-redux'
import {footerActions} from '../../Store/FooterSlice'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}



const ShowProduct = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState()
    let query = useQuery();
    const navigate = useNavigate();
    useEffect(_=> {
        setLoading(true);
        dispatch(footerActions.setFooterColor({color: "#ffffff"}))
        if(!query.get("id")) {
            setLoading(false)
            navigate('/')
            return;
        }
        axios.get(`${process.env.REACT_APP_API_LINK_DEV}/product/${query.get("id")}`)
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
    },[dispatch, query, navigate])
    
    
    return (
        <>
            {!data?<Loading loading ={loading}/>:
            <div className='show_product'>
                <div className='container'>
                    <div className='wrapper'>
                        <ProductThumb images={data.images}/>
                        <ProductInfo data={data}/>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default ShowProduct
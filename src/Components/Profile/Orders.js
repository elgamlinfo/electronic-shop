import React, {useState, useEffect} from 'react'
import OrderCard from './OrderCard'
import './orders.scss'
import axios from 'axios'
import Loading from '../Loading/Loading'
import ReqLoading from '../Loading/ReqLoading'
import { toast } from 'react-toastify'


const Orders = () => {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(false)
    let [reqLoading, setReqLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.REACT_APP_API_LINK_DEV}/order`,{
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        })
        .then((res) => {
            setData(res.data)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error);
        });

    }, [])

    
    function canselOrder (id) {
        setReqLoading(true)
        axios.delete(`${process.env.REACT_APP_API_LINK_DEV}/order/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        })
        .then((res) => {
            setData(data => data.filter(order => order._id !== id))
            setReqLoading(false)
            toast.success("order canceled successfully😊")
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='orders_content'>
            <ReqLoading loading={reqLoading} />
            <Loading loading={loading} />
            <h2 className='titl'>Orders</h2>
            <div className='order_card_wrapper'>
                {data.map(order => <OrderCard key={order._id} canselOrder={canselOrder} order={order}/>)}
            </div>
        </div>
    )
}

export default Orders

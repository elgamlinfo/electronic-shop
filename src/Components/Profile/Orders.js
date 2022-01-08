import React, {useState, useEffect} from 'react'
import OrderCard from './OrderCard'
import './orders.scss'
import axios from 'axios'
import Loading from '../Loading/Loading'



const Orders = () => {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(false)

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

    return (
        <div className='orders_content'>
            <Loading loading={loading} />
            <h2 className='titl'>Orders</h2>
            <div className='order_card_wrapper'>
                {data.map(order => <OrderCard key={order._id} order={order}/>)}
            </div>
        </div>
    )
}

export default Orders

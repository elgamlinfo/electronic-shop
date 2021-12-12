import React from 'react'
import OrderCard from './OrderCard'
import './orders.scss'





const Orders = () => {
    return (
        <div className='orders_content'>
            <h2 className='titl'>Orders</h2>
            <div className='order_card_wrapper'>
                <OrderCard />
            </div>
        </div>
    )
}

export default Orders

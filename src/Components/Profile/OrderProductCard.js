import React from 'react'
import ProdImg from '../../images/product.png'
import './order-product-card.scss'
const OrderProductCard = () => {
    return (
        <div className='order_product_card'>
            <div className='img_cont'>
                <img src={ProdImg} alt=''/>
            </div>
            <div className='info_cont'>
                <p className='order_name'>MacBook Pro 16 Inch</p>
                <p className='amount'>
                    1
                    <span>items</span>
                </p>
                <p className='total_price'>2,000,00 $</p>
            </div>
        </div>
    )
}

export default OrderProductCard

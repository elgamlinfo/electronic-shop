import React from 'react'
import './order-product-card.scss'

let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const OrderProductCard = (props) => {
    let prod = props.prod
    return (
        <div className='order_product_card'>
            <div className='img_cont'>
                <img src={prod.image} alt=''/>
            </div>
            <div className='info_cont'>
                <p className='order_name' title={prod.title}>{prod.title.slice(0,18)+"..."}</p>
                <p className='amount'>
                    {prod.qnt}
                    <span>items</span>
                </p>
                <p className='total_price'>{formatter.format(prod.price)}</p>
            </div>
        </div>
    )
}

export default OrderProductCard

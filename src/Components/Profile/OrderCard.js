import React from 'react'
import './order-card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faCheck, faTruck } from '@fortawesome/free-solid-svg-icons'
import OrderProductCard from './OrderProductCard'

const OrderCard = (props) => {
    let order = props.order;
    return (
        <div className='order_card'>
            <div className='order_progress'>
                <span className={`prog ${order.transit?'active':''}`}></span>
                <span className={`prog ${order.completed?'active':''}`}></span>
                <div className='prog_point active'>
                    <span>
                        <FontAwesomeIcon icon={faBox}/>
                    </span>
                </div>
                <div className={`prog_point ${order.transit?'active':''}`}>
                    <span>
                        <FontAwesomeIcon icon={faTruck}/>
                    </span>
                </div>
                <div className={`prog_point ${order.completed?'active':''}`}>
                    <span>
                        <FontAwesomeIcon icon={faCheck}/>
                    </span>
                </div>
            </div>
            <div className='order_products_cont'>
                {order.products.map(prod => <OrderProductCard key={prod.prodId} prod={prod}/>)}
            </div>
            <button className="cansel_btn">cansel</button>
        </div>
    )
}

export default OrderCard

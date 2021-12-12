import React from 'react'
import './order-card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faCheck, faTruck } from '@fortawesome/free-solid-svg-icons'
import OrderProductCard from './OrderProductCard'

const OrderCard = () => {
    return (
        <div className='order_card'>
            <div className='order_progress'>
                <span className='prog active'></span>
                <span className='prog'></span>
                <div className='prog_point active'>
                    <span>
                        <FontAwesomeIcon icon={faBox}/>
                    </span>
                </div>
                <div className='prog_point active'>
                    <span>
                        <FontAwesomeIcon icon={faTruck}/>
                    </span>
                </div>
                <div className='prog_point'>
                    <span>
                        <FontAwesomeIcon icon={faCheck}/>
                    </span>
                </div>
            </div>
            <div className='order_products_cont'>
                <OrderProductCard />
                <OrderProductCard />
                <OrderProductCard />
            </div>
            <button className="cansel_btn">cansel</button>
        </div>
    )
}

export default OrderCard
import React from 'react'
import AsideProductCart from '../Helpers/AsideProductCart'
import './aside-cart.scss'
import { useSelector } from 'react-redux'


const AsideCart = (props) => {
    const cart = useSelector(state => state.cart.cart)
    return (
        <div className={`aside-cart-container ${props.clicked?'active':''}`} >
            <div className='aside-cart'>
                <div className='close-btn'><i className='fas fa-times' onClick={ () => props.cartClickHunler() }></i></div>
                <div className='cart-products'>
                    {
                        cart.products !== []? cart.products.map(prod =><AsideProductCart key={prod.prodId} cartClickHunler={props.cartClickHunler} prod={prod}/>):
                        null    
                    }
                </div>
                <div className='checkout'>
                    <button>checkout</button>
                </div>
            </div>
        </div>
    )
}

export default AsideCart

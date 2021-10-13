import React from 'react'
import './aside-cart.scss'

const AsideCart = (props) => {
    return (
        <div className={`aside-cart-container ${props.clicked?'active':'active'}`} >
            <div className='aside-cart'>
                <div className='close-btn'><i className='fas fa-times' onClick={ () => props.cartClickHunler() }></i></div>
                <div className='cart-products'>
                </div>
                <div className='checkout'>
                    <button>checkout</button>
                </div>
            </div>
        </div>
    )
}

export default AsideCart

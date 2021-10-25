import React from 'react'
import './helpers.scss'
import ProductImg from '../../images/product.png'
const AsideProductCart = () => {
    return (
        <div className='aside-product'>
            <div className='img-box'>
                <img  src={ProductImg} alt=''/>
            </div>
            <div className='product-info'>
                <h2 className='product-name'>MacBook Pro 16 Inch</h2>
                <p className='product-price'>2,000,000$</p>
                <button className='read-more'>read more</button>
            </div>
        </div>
    )
}

export default AsideProductCart

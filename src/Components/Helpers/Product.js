import React from 'react'
import productImg from '../../images/product.png'
import './helpers.scss'
const Product = () => {
    return (
        <div className='product'>
            <div className='img-box'>
                <img src={productImg} alt=''/>
                <div className='options'>
                    <span><i className='fas fa-eye'></i></span>
                    <span><i className='fas fa-cart-plus'></i></span>
                    <span><i className='far fa-heart'></i></span>
                </div>
            </div>
            <div className='product-info'>
                <p className='product-price'>2,000,000$</p>
                <p className='product-name'>MacBook Pro Model 16 Inch</p>
            </div>
        </div>
    )
}

export default Product

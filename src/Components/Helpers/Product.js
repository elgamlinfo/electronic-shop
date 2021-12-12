import React from 'react'
import productImg from '../../images/product.png'
import './helpers.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEye, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    return (
        <div className='product'>
            <div className='img-box'>
                <img src={productImg} alt=''/>
                <div className='options'>
                    <span><FontAwesomeIcon icon={faEye}/></span>
                    <span><FontAwesomeIcon icon={faCartPlus}/></span>
                    {props.fav? 
                        <span><FontAwesomeIcon icon={faHeartBroken}/></span>: 
                        <span><FontAwesomeIcon icon={faHeart}/></span>
                    }
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

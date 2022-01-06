import React from 'react'
import './helpers.scss'
import { Link } from 'react-router-dom';

let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});


const AsideProductCart = (props) => {
    return (
        <div className='aside-product'>
            <div className='img-box'>
                <img  src={props.prod.image} alt=''/>
            </div>
            <div className='product-info'>
                <h2 className='product-name'>{props.prod.title}</h2>
                <p className='product-price'>{formatter.format(props.prod.price)}</p>
                <Link className='read-more' onClick={() => props.cartClickHunler()} to={`/product?id=${props.prod.prodId}`}>read more</Link>
            </div>
        </div>
    )
}

export default AsideProductCart

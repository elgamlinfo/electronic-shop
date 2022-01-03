import React from 'react'
import './helpers.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEye, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Product = (props) => {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div className='product'>
            <div className='img-box'>
                <img src={props.img} alt=''/>
                <div className='options'>
                    <Link to={`/product?id=${props.id}`}><FontAwesomeIcon icon={faEye}/></Link>
                    <Link to=''><FontAwesomeIcon icon={faCartPlus}/></Link>
                    {props.fav? 
                        <Link to=''><FontAwesomeIcon icon={faHeartBroken}/></Link>: 
                        <Link to=''><FontAwesomeIcon icon={faHeart}/></Link>
                    }
                </div>
            </div>
            <div className='product-info'>
                <p className='product-price'>{formatter.format(props.price)}</p>
                <p className='product-name'>{props.title}</p>
            </div>
        </div>
    )
}

export default Product

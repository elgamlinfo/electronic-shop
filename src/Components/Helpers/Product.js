import React from 'react'
import './helpers.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEye, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux'


const Product = (props) => {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const isAuth = useSelector(state => state.user.isAuth)

    function addToFav(e) {
        e.preventDefault();
        if(!isAuth) return toast.warning("login or register please😊")
        axios
        .post(
            `${process.env.REACT_APP_API_LINK_DEV}/fav/add`,
            {prodId: e.currentTarget.id},
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                },
            }
        )
        .then(res => {
            toast.success("product added to favourite successfully😊")
        })
        .catch(error => {
            console.log(error);
        })
    }

    function deleteFromFav(e) {
        e.preventDefault();
        if(!isAuth) return toast.warning("login or register please😊")
        props.removeFav(e.currentTarget.id)
        axios
        .delete(
            `${process.env.REACT_APP_API_LINK_DEV}/fav/${e.currentTarget.id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                },
            }
        )
        .then(res => {
            toast.success("product removed favourite successfully😊")
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='product'>
            <div className='img-box'>
                <img src={props.img} alt=''/>
                <div className='options'>
                    <Link to={`/product?id=${props.id}`}><FontAwesomeIcon icon={faEye}/></Link>
                    <Link to=''><FontAwesomeIcon icon={faCartPlus}/></Link>
                    {props.fav? 
                        <a href='*' id={props.id}  onClick={e => deleteFromFav(e)}><FontAwesomeIcon icon={faHeartBroken}/></a>: 
                        <a href='*' id={props.id}  onClick={e => addToFav(e)}><FontAwesomeIcon icon={faHeart}/></a>
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

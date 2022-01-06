import React from "react";
import "./helpers.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartPlus,
    faEye,
    faHeart,
    faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import  { cartActions } from "../../Store/cartSlice";
// import { createAction } from "@reduxjs/toolkit";

let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});


const Product = (props) => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.user.isAuth);
    const cart = useSelector((state) => state.cart.cart);
    
    let data = {
        prodId: props.id,
        title: props.title,
        company: props.company,
        image: props.img,
        price: parseInt(props.price),
    };

    function addToFav(e) {
        e.preventDefault();
        if (!isAuth) return toast.warning("login or register please😊");
        axios
            .post(
                `${process.env.REACT_APP_API_LINK_DEV}/fav/add`,
                { prodId: e.currentTarget.id },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            )
            .then((res) => {
                toast.success("product added to favourite successfully😊");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function deleteFromFav(e) {
        e.preventDefault();
        if (!isAuth) return toast.warning("login or register please😊");
        props.removeFav(e.currentTarget.id);
        axios
            .delete(
                `${process.env.REACT_APP_API_LINK_DEV}/fav/${e.currentTarget.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            )
            .then((res) => {
                toast.success("product removed favourite successfully😊");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function addCart(e) {
        e.preventDefault();
        if (!isAuth) return toast.warning("login or register please😊");
        
        let isValid = cart.products.find(prod => prod.prodId === data.prodId)
        let postData = {
            qnt: cart.qnt + 1,
            totalPrice: cart.totalPrice + data.price,
            products: null,
        };
        if (!isValid){
            postData.products = cart.products.concat({...data, qnt: 1, totalPrice: data.price})
        }else {
            let products = cart.products.map((prod) => {
                if (prod.prodId === data.prodId){
                    return Object.assign({}, prod, {qnt: prod.qnt+1, totalPrice: prod.totalPrice + data.price})
                }
                return prod;
            });
            postData.products = products;
        }

        axios
            .post(`${process.env.REACT_APP_API_LINK_DEV}/cart/add`, postData, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            })
            .then((res) => {
                console.log(res.data);
                dispatch(cartActions.addToCart(data));
            })
            .catch((error) => {
                console.log(error);
            });
    }


    
    return (
        <div className="product">
            <div className="img-box">
                <img src={props.img} alt="" />
                <div className="options">
                    <Link to={`/product?id=${props.id}`}>
                        <FontAwesomeIcon icon={faEye} />
                    </Link>
                    <a href="*" onClick={(e) => addCart(e)}>
                        <FontAwesomeIcon icon={faCartPlus} />
                    </a>
                    {props.fav ? (
                        <a
                            href="*"
                            id={props.id}
                            onClick={(e) => deleteFromFav(e)}
                        >
                            <FontAwesomeIcon icon={faHeartBroken} />
                        </a>
                    ) : (
                        <a href="*" id={props.id} onClick={(e) => addToFav(e)}>
                            <FontAwesomeIcon icon={faHeart} />
                        </a>
                    )}
                </div>
            </div>
            <div className="product-info">
                <p className="product-price">{formatter.format(props.price)}</p>
                <p className="product-name">{props.title}</p>
            </div>
        </div>
    );
};

export default Product;

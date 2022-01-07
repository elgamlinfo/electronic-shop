import React from 'react'
import CheckOutProduct from '../Helpers/CheckOutProduct';
import './checkoutprodside.scss';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../Store/cartSlice';
import axios from 'axios'


const CheckOutProdSide = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)

    function addToCart(data) {
        let postData = {
            qnt: cart.qnt + 1,
            totalPrice: cart.totalPrice + data.price,
            products: null,
        };
        let products = cart.products.map((prod) => {
            if (prod.prodId === data.prodId){
                return Object.assign({}, prod, {qnt: prod.qnt+1, totalPrice: prod.totalPrice + data.price})
            }
            return prod;
        });
        postData.products = products;
        dispatch(cartActions.addToCart(data))
        axios.post(`${process.env.REACT_APP_API_LINK_DEV}/cart/add`, postData, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        })
        .then((res) => {
            
        })
        .catch((error) => {
            console.log(error);
        });
    }

    function removeOneItem(data) {
        let postData = {
            qnt: cart.qnt - 1,
            totalPrice: cart.totalPrice - data.price,
            products: null,
        };
        let isExist = cart.products.find(prod => prod.prodId === data.prodId)

        if(isExist.qnt === 1) {
            postData.products = cart.products.filter(prod => prod.prodId !== data.prodId)
        }else{
            let products = cart.products.map((prod) => {
                if (prod.prodId === data.prodId){
                    return Object.assign({}, prod, {qnt: prod.qnt-1, totalPrice: prod.totalPrice - data.price})
                }
                return prod;
            });
            postData.products = products;
        }
        dispatch(cartActions.removeOneItem(data))
        
        axios.post(`${process.env.REACT_APP_API_LINK_DEV}/cart/add`, postData, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        })
        .then((res) => {
            
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='product_side'>
            {/* start head */}
            <div className='product_side_head'>
                <div className='product_side_title'>
                    <h3>Shopping Cart</h3>
                    <p>you have {cart.qnt} items in your cart</p>
                </div>
                <div className='sort'>
                    <p>Sort by: </p>
                    <select>
                        <option value='price'>price</option>
                        <option value='name'>name</option>
                        <option value='popular'>popular</option>
                    </select>
                </div>
            </div>
            {/* end head */}

            {/* start product container */}
            <div className='checkout_product_wrapper'>
                {
                    cart.products.map(prod => <CheckOutProduct key={prod.prodId} removeOneItem={removeOneItem} addToCart={addToCart} prod={prod}/>)
                }
            </div>
            {/* end  product container */}
        </div>
    )
}

export default CheckOutProdSide

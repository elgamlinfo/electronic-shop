import React, { useReducer } from 'react'
import ProductImg from '../../images/product.png'

function reducer(state, action) {
    switch (action.type) {
        case 'inc':
            return state+1;
        case 'dec':
            return state === 1?state:state-1;
        default:
            return state;
    }
}

const CheckOutProduct = () => {
    const [count, dispatch] = useReducer(reducer, 1);
    
    return (
        <div className='Checkout_product'>
            <div className='img_cont'>
                <img src={ProductImg} alt=''/>
            </div>
            <div className='info_cont'>
                <h3>MacBook Pro 16 Inch</h3>
                <p>BY PC <span>COMPANY</span></p>
            </div>
            <div className='counter_cont'>
                <button className='dec' onClick={_ => dispatch({type: "dec"})}><i className='fas fa-minus'></i></button>
                <span>{count}</span>
                <button className='inc' onClick={_ => dispatch({type: "inc"})}><i className='fas fa-plus'></i></button>
            </div>
            <div className='price_cont'>
                <p>2.000.000 $</p>
            </div>
            <button className='delete_btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CheckOutProduct

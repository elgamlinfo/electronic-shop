import React from 'react'
import CheckOutProduct from '../Helpers/CheckOutProduct';
import './checkoutprodside.scss';
const CheckOutProdSide = () => {
    return (
        <div className='product_side'>
            {/* start head */}
            <div className='product_side_head'>
                <div className='product_side_title'>
                    <h3>Shopping Cart</h3>
                    <p>you have 4 items in your cart</p>
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
                <CheckOutProduct />
                <CheckOutProduct />
                <CheckOutProduct />
                <CheckOutProduct />
                <CheckOutProduct />
            </div>
            {/* end  product container */}
        </div>
    )
}

export default CheckOutProdSide

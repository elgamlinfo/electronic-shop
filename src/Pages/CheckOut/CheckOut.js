import React from 'react'
import CheckOutProdSide from "../../Components/CheckOutProdSide/CheckOutProdSide"
import CardSide from '../../Components/CardSide/CardSide';
import './checkout.scss';   
const CheckOut = () => {
    return (
        <div className='check_out'>
            <div className='container'>
                <div className='check_wrapper'>
                    <CheckOutProdSide />
                    <CardSide />
                </div>
            </div>
        </div>
    )
}

export default CheckOut

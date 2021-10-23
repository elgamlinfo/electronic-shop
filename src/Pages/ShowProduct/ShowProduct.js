import React from 'react'
import './showproduct.scss'
import ProductInfo from '../../Components/ProductInfo/ProductInfo'
import ProductThumb from '../../Components/ProductThumb/ProductThumb'

const ShowProduct = () => {
    return (
        <div className='show_product'>
            <div className='container'>
                <div className='wrapper'>
                    <ProductThumb />
                    <ProductInfo />
                </div>
            </div>
        </div>
    )
}

export default ShowProduct
import React from 'react'
import TitleWithFilter from '../Helpers/TitleWithFilter'
import Product from "../Helpers/Product"
import './ProductsSide.scss'
import Data from '../../Data.js'
const ProductsSide = () => {
    return (
        <div className='products_aside'>
            <TitleWithFilter title="category name"/>
            <div className='products_wrapper'>
                {Data.map(d => <Product key={d.id}/>)}
            </div>
        </div>
    )
}

export default ProductsSide

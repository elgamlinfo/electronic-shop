import React from 'react'
import TitleWithFilter from '../Helpers/TitleWithFilter'
import Product from "../Helpers/Product"
import './ProductsSide.scss'
const ProductsSide = (props) => {
    return (
        <div className='products_aside'>
            <TitleWithFilter title="category name"/>
            <div className='products_wrapper'>
                {props.data.map(prod => {
                    return(
                        <Product 
                            key={prod._id}
                            title={prod.title}
                            img={prod.images[0]}
                            id={prod._id}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ProductsSide

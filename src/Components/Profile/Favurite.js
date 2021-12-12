import React from 'react'
import Product from '../Helpers/Product'
import './favourite.scss'
const Favurite = () => {
    return (
        <div className='favourite_content'>
            <h2 className='titl'>Favourite</h2>
            <div className='favourite_card_wrapper'>
                <Product fav={true}/>
                <Product fav={true}/>
                <Product fav={true}/>
                <Product fav={true}/>
                <Product fav={true}/>
            </div>
        </div>
    )
}

export default Favurite

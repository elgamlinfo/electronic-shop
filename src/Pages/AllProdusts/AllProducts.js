import React from 'react'
import AsideFilter from '../../Components/AsideFilter/AsideFilter';
import ProductsSide from '../../Components/ProductsSide/ProductsSide';
import './allproducts.scss';


const AllProducts = () => {
    return (
        <div className='all_products'>
            <div className='container'>
                <div className='wrapper'>
                    <AsideFilter />
                    <ProductsSide />
                </div>
            </div>
        </div>
    )
}

export default AllProducts

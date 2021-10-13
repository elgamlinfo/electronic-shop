import React from 'react'
import './ads.scss'
const Ads = () => {
    return (
        <div className='container'>
            <div className='ads'>
                <div className='ads-info'>
                    <h2 className='product-name'>iPhone 12</h2>
                    <p>Lorem Ipsum is simply dummy text</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                    <button className='read-more'><span>read more</span> <span><i className='fas fa-long-arrow-alt-right'></i></span></button>
                </div>
            </div>
        </div>
    )
}

export default Ads

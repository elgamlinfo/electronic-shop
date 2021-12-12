import React from 'react'
import './ads.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
const Ads = () => {
    return (
        <div className='container'>
            <div className='ads'>
                <div className='ads-info'>
                    <h2 className='product-name'>iPhone 12</h2>
                    <p>Lorem Ipsum is simply dummy text</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                    <button className='read-more'>
                        <span>read more</span> 
                        <span><FontAwesomeIcon icon={faLongArrowAltRight}/></span>
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Ads

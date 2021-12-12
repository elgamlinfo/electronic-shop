import React from 'react'
import './slidercontent.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
const SliderContent = () => {
    return (
        <div className='content'>
            <p className='model'>model 16 inch</p>
            <h2>macBook pro</h2>
            <p className='book-now'>book it now</p>
            <button className='read-more'>
                <span>read more</span> 
                <span><FontAwesomeIcon icon={faLongArrowAltRight}/></span>
                </button>
        </div>
    )
}

export default SliderContent

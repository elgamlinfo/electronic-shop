import React from 'react'
import ThumbImg1 from '../Helpers/ThumbImg1'
import './productthumb.scss'


const ProductThumb = () => {
    return (
        <div className='product_thumb'>
            <div className='thumb_1'>
                <ThumbImg1 />
                <ThumbImg1 />
                <ThumbImg1 />
                <ThumbImg1 />
            </div>
            <div className='thumb_2'>
                <ThumbImg1 width='90%' height='90%'/>
            </div>
        </div>
    )
}

export default ProductThumb

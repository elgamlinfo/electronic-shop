import React, {useState } from 'react'
import ThumbImg1 from '../Helpers/ThumbImg1'
import './productthumb.scss'


const ProductThumb = (props) => {
    let [imgSrc, setImgSrc]= useState(props.images[0]);

    let clickHundler = (e) => {
        setImgSrc(e.target.src) 
    }
    return (
        <div className='product_thumb'>
            <div className='thumb_1'>
                {props.images.map(img => <ThumbImg1 key={img} height='70px' clickHundler={clickHundler} PorductImg={img}/>)}
            </div>
            <div className='thumb_2'>
                <ThumbImg1 width='90%' height='90%' PorductImg={imgSrc}/>
            </div>
        </div>
    )
}

export default ProductThumb

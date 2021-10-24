import React, { useState } from 'react'
import ThumbImg1 from '../Helpers/ThumbImg1'
import PorductImg from '../../images/product.png'
import './productthumb.scss'


const ProductThumb = () => {
    let [imgSrc, setImgSrc]= useState();

    let clickHundler = (e) => {
        console.log(e.target.src);
        setImgSrc(e.target.src) 
    }
    return (
        <div className='product_thumb'>
            <div className='thumb_1'>
                <ThumbImg1 clickHundler={clickHundler} PorductImg={PorductImg}/>
                <ThumbImg1 clickHundler={clickHundler} PorductImg={PorductImg}/>
                <ThumbImg1 clickHundler={clickHundler} PorductImg={PorductImg}/>
                <ThumbImg1 clickHundler={clickHundler} PorductImg={PorductImg}/>
            </div>
            <div className='thumb_2'>
                <ThumbImg1 width='90%' height='90%' PorductImg={PorductImg}/>
            </div>
        </div>
    )
}

export default ProductThumb

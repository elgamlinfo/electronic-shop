import React from 'react'
import PorductImg from '../../images/product.png'
import './thumbimg1.scss'

const ThumbImg1 = (props) => {
    return (
        <div className='thumb_img' style={{
                width: props.width? props.width:'70%',
                height: props.height? props.height:'auto',
            }}>
            <img src={PorductImg} alt=''/>
        </div>
    )
}

export default ThumbImg1

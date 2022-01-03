import React from 'react'
import './helpers.scss'

const ThumbImg1 = (props) => {
    return (
        <div 
        className='thumb_img' 
        style={{
            width: props.width? props.width:'80%',
            height: props.height? props.height:'auto',
        }} 
        >
        {props.clickHundler?
        <img src={props.PorductImg} alt='' onClick= {(e) => props.clickHundler(e)}/>:
        <img src={props.PorductImg} alt=''/>}
        </div>
    )
}

export default ThumbImg1

import React from 'react'
import './thumbimg1.scss'

const ThumbImg1 = (props) => {
    return (
        <div 
        className='thumb_img' 
        style={{
            width: props.width? props.width:'70%',
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
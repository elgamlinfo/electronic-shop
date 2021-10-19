import React from 'react'
import './validationtxt.scss'
const ValidationTxt = (props) => {
    return (
        <div className='valid-txt'>
            <span className={props.valid?'':'invalid'}><i className={`fas fa-${props.valid?'check':'times'}`}></i></span>
            {props.text}
        </div>
    )
}

export default ValidationTxt

import React from 'react'
import './input.scss'


const Input = (props) => {
    return (
        <input 
        type={props.data.type} 
        name={props.data.name} 
        placeholder={props.data.placeholder}
        className='input_fld'
        />
    )
}

export default Input

import React from 'react'
import './title.scss'
const Title = (props) => {
    return (
        <div className='dash_title'>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Title

import React from 'react'
import './helpers.scss'
const SectionTitle = (props) => {
    return (
        <div className='title'>
            <h3>{props.title}</h3>
            <p>show more</p>
        </div>
    )
}

export default SectionTitle

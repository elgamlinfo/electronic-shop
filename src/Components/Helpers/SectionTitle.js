import React from 'react'
import { Link } from 'react-router-dom'
import './helpers.scss'
const SectionTitle = (props) => {
    return (
        <div className='title'>
            <h3>{props.title}</h3>
            <Link to={`${props.link}`}>show more</Link>
        </div>
    )
}

export default SectionTitle

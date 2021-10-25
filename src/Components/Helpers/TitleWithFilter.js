import React from 'react'
import './helpers.scss'
const TitleWithFilter = (props) => {
    return (
        <div className="title_with_filter">
            <h3>{props.title}</h3>
            <div className='sort'>
                <p>sort: </p>
                <select>
                    <option value='price'>price</option>
                    <option value='name'>name</option>
                    <option value='popular'>popular</option>
                </select>
            </div>
        </div>
    )
}

export default TitleWithFilter

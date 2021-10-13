import React from 'react'
import './categorycard.scss'
const CategoryCard = (props) => {
    return (
        <div className='card'>
            <div className="card-info">
                <span><i className={`fas fa-${props.icon}`}></i></span>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default CategoryCard

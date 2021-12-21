import React from 'react'
import './page-not-found.scss'
import NotFoundImg from '../../images/404.svg'

const PageNotFound = () => {
    return (
        <div className='page_not_found'>
            <img src={NotFoundImg} alt='404 not found'/>
        </div>
    )
}

export default PageNotFound

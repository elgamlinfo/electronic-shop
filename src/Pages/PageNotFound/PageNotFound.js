import React from 'react'
import './page-not-found.scss'
import NotFoundImg from '../../images/404.svg'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='page_not_found'>
            <div className='container'>
                <img src={NotFoundImg} alt='404 not found'/>
                <Link to='/'>Home Page</Link>
            </div>
        </div>
    )
}

export default PageNotFound

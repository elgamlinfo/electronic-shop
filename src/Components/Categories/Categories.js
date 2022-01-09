import React from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from '../Helpers/CategoryCard'
import SectionTitle from '../Helpers/SectionTitle'
import './categories.scss'

const Categories = (props) => {
    return (
        <div className='category'>
            <div className='container'>
                <SectionTitle title="Categories" link="/categories"/>
                <div className='cards-container'>
                    {props.data.map(categ => <Link key={categ._id} to={`/products?search=${categ.name}`}><CategoryCard  name={categ.name}   icon={categ.icon}/></Link>)}
                </div>
            </div>
        </div>
    )
}

export default Categories

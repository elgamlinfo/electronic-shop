import React from 'react'
import CategoryCard from '../Helpers/CategoryCard'
import SectionTitle from '../Helpers/SectionTitle'
import './categories.scss'

const Categories = () => {
    return (
        <div className='category'>
            <div className='container'>
                <SectionTitle title="Categories"/>
                <div className='cards-container'>
                    <CategoryCard name="labtop"   icon="laptop"/>
                    <CategoryCard name="mobile"   icon="mobile"/>
                    <CategoryCard name="storage"  icon="sd-card"/>
                    <CategoryCard name="camera"   icon="camera"/>
                    <CategoryCard name="keyboard" icon="keyboard"/>
                    <CategoryCard name="PC" icon="desktop"/>
                </div>
            </div>
        </div>
    )
}

export default Categories

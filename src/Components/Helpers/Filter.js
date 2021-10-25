import React from 'react'
import FilterCheckBox from './FilterCheckBox'

const Filter = (props) => {
    return (
        <div className='filter'>
            <p>{props.title}:</p>
            <div className='check_boxes'>
                <FilterCheckBox />
                <FilterCheckBox />
                <FilterCheckBox />
                <FilterCheckBox />
                <FilterCheckBox />
                <FilterCheckBox />
                <FilterCheckBox />
                <FilterCheckBox />
                <FilterCheckBox />
                <FilterCheckBox />
                <FilterCheckBox />
                <FilterCheckBox />
                <FilterCheckBox />
                <FilterCheckBox />
                <FilterCheckBox />
            </div>
        </div>
    )
}

export default Filter

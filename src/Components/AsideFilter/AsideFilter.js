import React from 'react'
import Filter from '../Helpers/Filter'
import './AsideFilter.scss'
const AsideFilter = () => {
    return (
        <div className='aside_filter'>
            <div className='filter_wrapper'>
                <Filter title='screen size'/>
                <Filter title='color'/>
                <Filter title='ram'/>
            </div>
        </div>
    )
}

export default AsideFilter

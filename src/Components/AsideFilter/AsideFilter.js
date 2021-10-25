import React, { useState } from 'react'
import Filter from '../Helpers/Filter'
import './AsideFilter.scss'
const AsideFilter = () => {
    const [active, setActive] = useState('');

    let toggleHundel = (e) => {
        active === ''?setActive("active"):setActive("");
    }
    return (
        <div className={`aside_filter ${active}`}>
            <button className='toggle_btn' onClick={(e) => toggleHundel(e)}>
                <i className='fas fa-cog'></i>
            </button>
            <div className='filter_wrapper'>
                <Filter title='screen size'/>
                <Filter title='color'/>
                <Filter title='ram'/>
            </div>
        </div>
    )
}

export default AsideFilter

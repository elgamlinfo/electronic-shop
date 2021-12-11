import React from 'react'
import ProfieAside from '../../Components/Profile/ProfieAside'
import {Outlet} from 'react-router-dom'
import './profile.scss'
const Profile = () => {
    return (
        <div className='profile'>
            <ProfieAside />
            <div className='content'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Profile

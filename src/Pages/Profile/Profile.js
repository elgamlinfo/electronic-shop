import React, {useEffect} from 'react'
import ProfieAside from '../../Components/Profile/ProfieAside'
import {Outlet} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {footerActions} from '../../Store/FooterSlice'
import './profile.scss'
const Profile = () => {
    const dispatch = useDispatch();

    useEffect(_=> {
        dispatch(footerActions.setFooterColor({color: "#000000"}))
    },[dispatch])

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

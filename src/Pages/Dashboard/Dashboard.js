import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import DashAside from '../../Components/Dashboard/DashAside'
import './dashboard.scss'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()
    const user = useSelector(state => state.user)
    useEffect(() => {
        if(!user.isAuth) {
            navigate('/login')
        }
    }, [navigate,user.isAuth])
    
    return (
        <div className='dash_container'>
            <div className='dash_aside'>
                <DashAside user={user.user}/>
            </div>
            <div className="dash_content">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard

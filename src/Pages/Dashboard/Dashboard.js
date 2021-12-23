import React from 'react'
import DashAside from '../../Components/Dashboard/DashAside'
import './dashboard.scss'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className='dash_container'>
            <div className='dash_aside'>
                <DashAside />
            </div>
            <div className="dash_content">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard

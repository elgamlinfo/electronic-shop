import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import DashAside from '../../Components/Dashboard/DashAside'
import './dashboard.scss'
import { Outlet, useNavigate } from 'react-router-dom'
import Loading from '../../Components/Loading/Loading'
const Dashboard = () => {
    //eslint-disable-next-line
    const navigate = useNavigate()
    const user = useSelector(state => state.user.user)
    const loading = useSelector(state => state.user.loading)
    const isAuth = useSelector(state => state.user.isAuth)
    
    useEffect(() => {
        if(!isAuth&&loading) {
            navigate('/login')
        }
    }, [navigate,isAuth, loading])
    
    return (
        <>
            {loading?<Loading loading={loading}/>:
        <div className='dash_container'>
            <div className='dash_aside'>
                <DashAside user={user}/>
            </div>
            <div className="dash_content">
                <Outlet />
            </div>
        </div>}
        </>
    )
}

export default Dashboard

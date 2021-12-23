import React from 'react'
import './dashboard-content.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faShoppingBag, faUsers, faUsersCog } from '@fortawesome/free-solid-svg-icons'
import Title from './Title'


const DashboardContent = () => {
    return (
        <div className='dashboard'>
            <Title title="dashboard"/>
            <div className='dash_info'>
                <div className='dash_card'>
                    <span><FontAwesomeIcon icon={faUsersCog}/></span>
                    <h3>admins</h3>
                    <p>3</p>
                </div>
                <div className='dash_card'>
                    <span><FontAwesomeIcon icon={faUsers}/></span>
                    <h3>users</h3>
                    <p>50</p>
                </div>
                <div className='dash_card'>
                    <span><FontAwesomeIcon icon={faShoppingBag}/></span>
                    <h3>products</h3>
                    <p>200</p>
                </div>
                <div className='dash_card'>
                    <span><FontAwesomeIcon icon={faShippingFast}/></span>
                    <h3>orders</h3>
                    <p>80</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardContent

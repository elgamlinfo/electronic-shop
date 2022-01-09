import React, { useEffect, useState } from 'react'
import './dashboard-content.scss'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faShoppingBag, faUsers, faUsersCog } from '@fortawesome/free-solid-svg-icons'
import Title from './Title'
import Loading from '../Loading/Loading'


const DashboardContent = () => {
    const [loading, setLoading] = useState(false)
    const [admins, setAdmins] = useState(0)
    const [users, setUsers] = useState(0)
    const [products, setProducts] = useState(0)
    const [orders, setOrders] = useState(0)

    function getAdmins() {
        return axios.get(`${process.env.REACT_APP_API_LINK_DEV}/admins`,{
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            },
        })   
    }
    function getUsers() {
        return axios.get(`${process.env.REACT_APP_API_LINK_DEV}/users`,{
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            },
        })     
    }
    
    function getProducts() {
        return axios.get(`${process.env.REACT_APP_API_LINK_DEV}/product/count`,{
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            },
        })     
    }
    function getOrders() {
        return axios.get(`${process.env.REACT_APP_API_LINK_DEV}/order/all`,{
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            },
        })     
    }
    
    useEffect(() => {
        setLoading(true)
        axios.all([getAdmins(), getUsers(),getProducts(),getOrders()])
        .then(axios.spread((...responses) => {
            setAdmins(responses[0].data.length+1)
            setUsers(responses[1].data.length)
            setProducts(responses[2].data.count)
            setOrders(responses[3].data.length)
            setLoading(false)
        }))
        .catch(error => {
            console.log(error);
        })
    }, [])
    return (
        <div className='dashboard'>
            <Loading loading={loading} />
            <Title title="dashboard"/>
            <div className='dash_info'>
                <div className='dash_card'>
                    <span><FontAwesomeIcon icon={faUsersCog}/></span>
                    <h3>admins</h3>
                    <p>{admins}</p>
                </div>
                <div className='dash_card'>
                    <span><FontAwesomeIcon icon={faUsers}/></span>
                    <h3>users</h3>
                    <p>{users}</p>
                </div>
                <div className='dash_card'>
                    <span><FontAwesomeIcon icon={faShoppingBag}/></span>
                    <h3>products</h3>
                    <p>{products}</p>
                </div>
                <div className='dash_card'>
                    <span><FontAwesomeIcon icon={faShippingFast}/></span>
                    <h3>orders</h3>
                    <p>{orders}</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardContent

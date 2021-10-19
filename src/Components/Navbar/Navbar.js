import React from 'react'
import './navbar.scss'
import Image from '../../images/person.jpg'
const Navbar = (props) => {
    return (
        <div className='navbar' 
        style={
            window.location.pathname === "/login"?{background:"#f1f1f1"}:
            window.location.pathname === "/signup"?{background:"#f1f1f1"}:
            {background:"#fff"}   }>
            <div className='container'>
                <h1 className='logo'>shop logo</h1>
                <div className="search-box">
                    <input type='text' name='search' className='search' placeholder='Laptops, cameras, phones.....'/>
                    <button className='search-btn'><i className='fas fa-search'></i></button>
                </div>
                <div className='options'>
                    <button className='shop-cart' onClick={() => props.cartClickHunler()}><i className='fas fa-shopping-bag'></i></button>
                    <button className='shop-fav'><i className='far fa-heart'></i></button>
                    <img src={Image} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Navbar

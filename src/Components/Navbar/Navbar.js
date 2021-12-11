import React, { useState } from 'react'
import './navbar.scss'
import Image from '../../images/person.webp'
const Navbar = (props) => {
    const [active, setActive] = useState('');

    let toggleHundel = (e) => {
        active === ''?setActive("active"):setActive("");
    }
    return (
        <div className='navbar' 
        style={
            window.location.pathname === "/login"?{background:"#f1f1f1"}:
            window.location.pathname === "/signup"?{background:"#f1f1f1"}:
            {background:"#fff"}   }>
            <div className='container'>
                <h1 className='logo'>shop logo</h1>
                <div className={`search_over ${active}`}>
                    <button className='toggle-close' onClick={_ => toggleHundel()}><i className='fas fa-times'></i></button>
                    <div className="search-box">
                        <input type='text' name='search' className='search' placeholder='Laptops, cameras, phones.....'/>
                        <button className='search-btn' aria-label='search-btn'><i className='fas fa-search'></i></button>
                    </div>
                </div>
                <div className='options'>
                    <button className='search-tog' aria-label='search-tog' onClick={_ => toggleHundel()}><i className='fas fa-search'></i></button>
                    <button className='shop-cart' aria-label='cart-btn' onClick={() => props.cartClickHunler()}><i className='fas fa-shopping-bag'></i></button>
                    <button className='shop-fav' aria-label='fav-btn' ><i className='far fa-heart'></i></button>
                    <img src={Image} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Navbar

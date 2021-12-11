import React, { useState } from 'react'
import './navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faHeart,faSearch,faShoppingBag } from '@fortawesome/free-solid-svg-icons'
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
                    <button className='toggle-close' onClick={_ => toggleHundel()}><FontAwesomeIcon icon={faSearch}/></button>
                    <div className="search-box">
                        <input type='text' name='search' className='search' placeholder='Laptops, cameras, phones.....'/>
                        <button className='search-btn' aria-label='search-btn'><FontAwesomeIcon icon={faSearch}/></button>
                    </div>
                </div>
                <div className='options'>
                    <button className='search-tog' aria-label='search-tog' onClick={_ => toggleHundel()}><FontAwesomeIcon icon={faSearch}/></button>
                    <button className='shop-cart' aria-label='cart-btn' onClick={() => props.cartClickHunler()}><FontAwesomeIcon icon={faShoppingBag}/></button>
                    <button className='shop-fav' aria-label='fav-btn' ><FontAwesomeIcon icon={faHeart}/></button>
                    <img src={Image} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Navbar

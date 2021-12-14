import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faSearch,faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons'
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
                <h1 className='logo'><Link to="/">shop logo</Link></h1>
                <div className={`search_over ${active}`}>
                    <button className='toggle-close' onClick={_ => toggleHundel()}><FontAwesomeIcon icon={faTimes}/></button>
                    <div className="search-box">
                        <input type='text' name='search' className='search' placeholder='Laptops, cameras, phones.....'/>
                        <button className='search-btn' aria-label='search-btn'><FontAwesomeIcon icon={faSearch}/></button>
                    </div>
                </div>
                <div className='options'>
                    <button className='search-tog' aria-label='search-tog' onClick={_ => toggleHundel()}><FontAwesomeIcon icon={faSearch}/></button>
                    <button className='shop-cart' aria-label='cart-btn' onClick={() => props.cartClickHunler()}><FontAwesomeIcon icon={faShoppingBag}/></button>
                    <Link to='/profile/favurite' className='shop-fav' aria-label='fav-btn' ><FontAwesomeIcon icon={faHeart}/></Link>
                    <div className='profile_menu'>
                        <img src={Image} alt=''/>
                        <div className='dorp_down_menu'>
                            <ul>
                                <li>
                                    <Link to='/profile'>my profile</Link>
                                </li>
                                <li>
                                    <Link to="/checkout">cart</Link>
                                </li>
                                <li>
                                    <Link to="/profile/orders">orders</Link>
                                </li>
                                <li>
                                    <Link to="/profile/favurite">favorites</Link>
                                </li>
                            </ul>
                            <hr />
                            <Link className="register" to='/signup'>register</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

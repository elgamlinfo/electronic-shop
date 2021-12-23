import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProfileImg from '../../images/person.webp'
import './profile-aside.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faShoppingBag,faHeart,faBars } from '@fortawesome/free-solid-svg-icons'



const ProfieAside = () => {
    const [active, setActive] = useState('');

    function toggleHandler() {
        active==="active"?
        setActive(''):
        setActive('active')
    }

    return (
        <div className={`profil_aside ${active}`}>
            <div className='aside_head'>
                <img src={ProfileImg} alt=''/>
                <h1>John Doe</h1>
            </div>
            <div className='aside_navs'>
                <div className='navs'>
                    <span><FontAwesomeIcon icon={faUser}/></span>
                    <Link to='/profile'>profile</Link>
                </div>
                <div className='navs'>
                    <span><FontAwesomeIcon icon={faShoppingBag}/></span>
                    <Link to='/profile/orders'>orders</Link>
                </div>
                <div className='navs'>
                    <span><FontAwesomeIcon icon={faHeart}/></span>
                    <Link to='/profile/favurite'>favurite</Link>
                </div>
            </div>
            <button className='toggle_menu_btn' onClick={toggleHandler}><FontAwesomeIcon icon={faBars}/></button>
        </div>
    )
}

export default ProfieAside

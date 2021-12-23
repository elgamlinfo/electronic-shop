import { Link } from 'react-router-dom'
import ProfileImg from '../../images/person.webp'
import './dash-aside.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag,faBars, faTachometerAlt, faUsers, faUsersCog, faShippingFast } from '@fortawesome/free-solid-svg-icons'



const ProfieAside = () => {

    return (
        <div className={`profile_aside`}>
            <div className='aside_head'>
                <img src={ProfileImg} alt=''/>
                <h1>John Doe</h1>
                <p className='jop-title'>admin</p>
            </div>
            <div className='aside_navs'>
                <div className='navs'>
                    <span><FontAwesomeIcon icon={faTachometerAlt}/></span>
                    <Link to='/dashboard'>dashboard</Link>
                </div>
                <div className='navs'>
                    <span><FontAwesomeIcon icon={faUsers}/></span>
                    <Link to='/dashboard/users'>Users</Link>
                </div>
                <div className='navs'>
                    <span><FontAwesomeIcon icon={faUsersCog}/></span>
                    <Link to='/dashboard/admins'>Admins</Link>
                </div>
                <div className='navs'>
                    <span><FontAwesomeIcon icon={faShoppingBag}/></span>
                    <Link to='/dashboard/products'>Products</Link>
                </div>
                <div className='navs'>
                    <span><FontAwesomeIcon icon={faShippingFast}/></span>
                    <Link to='/dashboard/orders'>Orders</Link>
                </div>
            </div>
            <button className='toggle_menu_btn'><FontAwesomeIcon icon={faBars}/></button>
        </div>
    )
}

export default ProfieAside

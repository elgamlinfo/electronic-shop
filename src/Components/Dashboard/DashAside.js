import { Link } from 'react-router-dom'
import ProfileImg from '../../images/person.webp'
import './dash-aside.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag,faBars, faTachometerAlt, faUsers, faUsersCog, faShippingFast, faList } from '@fortawesome/free-solid-svg-icons'



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
                    
                    <Link to='/dashboard'><span><FontAwesomeIcon icon={faTachometerAlt}/></span>dashboard</Link>
                </div>
                <div className='navs'>
                    <Link to='/dashboard/users'><span><FontAwesomeIcon icon={faUsers}/></span>Users</Link>
                </div>
                <div className='navs'>
                    <Link to='/dashboard/admins'><span><FontAwesomeIcon icon={faUsersCog}/></span>Admins</Link>
                </div>
                <div className='navs'>
                    <Link to='/dashboard/category'><span><FontAwesomeIcon icon={faList}/></span>categories</Link>
                </div>
                <div className='navs'>
                    <Link to='/dashboard/products'><span><FontAwesomeIcon icon={faShoppingBag}/></span>Products</Link>
                </div>
                <div className='navs'>
                    <Link to='/dashboard/orders'><span><FontAwesomeIcon icon={faShippingFast}/></span>Orders</Link>
                </div>
            </div>
            <button className='toggle_menu_btn'><FontAwesomeIcon icon={faBars}/></button>
        </div>
    )
}

export default ProfieAside

import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userSliceActions } from '../../Store/UserSlice'
import ProfileImg from '../../images/person.webp'
import './dash-aside.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag,faBars, faTachometerAlt, faUsers, faUsersCog, faShippingFast, faList ,faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import ReqLoading from '../Loading/ReqLoading'
import { useState } from 'react'


const ProfieAside = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [reqLoading, setReqLoading] = useState(false);
    const logoutHandler = e => {
        e.preventDefault();
        setReqLoading(true)
        axios.post(`${process.env.REACT_APP_API_LINK_DEV}/user/logout`, {},{
            headers: {
                Authorization:  `Bearer ${localStorage.token}`
            }
        })
        .then(response => {
            localStorage.clear()
            dispatch(userSliceActions.logout())
            setReqLoading(false)
            navigate('/login')
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className={`profile_aside`}>
            <ReqLoading loading={reqLoading}/>
            <div className='aside_head'>
                <img src={props.user.img?props.user.img:ProfileImg} alt=''/>
                <div className='head_info'>
                    <h1>{props.user.name}</h1>
                    <p className='jop-title'>admin</p>
                </div>
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
                <div className='navs'>
                    <Link to='/dashboard/orders' onClick={e => logoutHandler(e)}><span><FontAwesomeIcon icon={faSignOutAlt}/></span>Logout</Link>
                </div>
            </div>
            <button className='toggle_menu_btn'><FontAwesomeIcon icon={faBars}/></button>
        </div>
    )
}

export default ProfieAside

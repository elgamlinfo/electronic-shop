import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {footerActions} from '../../Store/FooterSlice'
import './home.scss'
import Header from '../../Components/Header/Header'
import Categories from '../../Components/Categories/Categories'
import ShowProducts from '../../Components/ShowProducts/ShowProducts'
import Loading from '../../Components/Loading/Loading';
import Ads from '../../Components/Ads/Ads'
const Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    useEffect(_=> {
        setLoading(true);
        dispatch(footerActions.setFooterColor({color: "#ffffff"}))
        setTimeout(() => {
            setLoading(false);
        },2000)
    },[dispatch])
    return (
        <div>
            <Loading loading ={loading}/>
            <Header />
            <Categories />
            <ShowProducts title='Offers & Top Selling'/>
            <Ads />
            <ShowProducts title='Mobiles'/>
            <ShowProducts title='Cameras'/>
            <ShowProducts title='Keyboard & Mouse'/>
            <Ads />
        </div>
    )
}

export default Home

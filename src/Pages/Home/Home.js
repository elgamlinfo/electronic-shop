import React,{useState,useEffect} from 'react'
import './home.scss'
import Header from '../../Components/Header/Header'
import Categories from '../../Components/Categories/Categories'
import ShowProducts from '../../Components/ShowProducts/ShowProducts'
import Loading from '../../Components/Loading/Loading';
import Ads from '../../Components/Ads/Ads'
const Home = () => {
    const [loading, setLoading] = useState(true);
    useEffect(_=> {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        },2000)
    },[])
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

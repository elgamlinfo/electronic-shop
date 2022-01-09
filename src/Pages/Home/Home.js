import React,{useState,useEffect, Fragment} from 'react'
import {useDispatch} from 'react-redux'
import {footerActions} from '../../Store/FooterSlice'
import axios from 'axios';
import './home.scss'
import Header from '../../Components/Header/Header'
import Categories from '../../Components/Categories/Categories'
import ShowProducts from '../../Components/ShowProducts/ShowProducts'
import Loading from '../../Components/Loading/Loading';
import Ads from '../../Components/Ads/Ads'


const Home = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
    const [category, setCategory] = useState([] )
    function getProdducts() {
        return axios.get(`${process.env.REACT_APP_API_LINK_DEV}/product/all`)
    }
    function getCategories() {
        return axios.get(`${process.env.REACT_APP_API_LINK_DEV}/category`)
    }

    useEffect(_=> {
        setLoading(true);
        axios.all([getProdducts(), getCategories()])
        .then(axios.spread((...responses) => {
            setData(responses[0].data)
            setCategory(responses[1].data.slice(0,6))
            setLoading(false)
        }))
        .catch(error  => {
            console.log(error);
        })
        dispatch(footerActions.setFooterColor({color: "#ffffff"}))
    },[dispatch])
    
    return (
        <Fragment>
            {loading? <Loading loading ={loading}/>:
                <div>
                    <Header />
                    <Categories data={category}/>
                    <ShowProducts title='Offers & Top Selling' link="/products?search=" data={data}/>
                    <Ads />
                    <ShowProducts title='Mobiles' link="/products?search=mobile" data={data.filter(prod => prod.category === "mobile")}/>
                    <ShowProducts title='Mouses' link="/products?search=mouse" data={data.filter(prod => prod.category === "mouses")}/>
                    <ShowProducts title='Keyboards' link="/products?search=keyboard" data={data.filter(prod => prod.category === "keyboard")}/>
                    <Ads />
                </div>
            }
        </Fragment>
    )
}

export default Home

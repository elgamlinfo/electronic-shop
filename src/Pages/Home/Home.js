import React from 'react'
import './home.scss'
import Header from '../../Components/Header/Header'
import Categories from '../../Components/Categories/Categories'
import ShowProducts from '../../Components/ShowProducts/ShowProducts'
import Ads from '../../Components/Ads/Ads'
const Home = () => {
    return (
        <div>
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

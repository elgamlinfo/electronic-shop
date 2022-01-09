import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
// import { useSelector } from 'react-redux';
import AsideCart from '../../Components/AsideCart/AsideCart';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLongArrowAltUp
} from "@fortawesome/free-solid-svg-icons";
// import Loading from '../../Components/Loading/Loading';
const Index = () => {
    // const loading = useSelector((state) => state.user.loading);
    const [cartClicked, setCartClick] = useState(false);
    
    const cartClickHunler = () => {
        setCartClick((prev) => !prev);
    }

    return (
        <>
            
                <div>
                    <Navbar cartClickHunler = {cartClickHunler}/>
                    <AsideCart clicked={cartClicked} cartClickHunler = {cartClickHunler}/>
                    <Outlet />
                    <ScrollToTop smooth style={{background: "#7952B3", color: "#ffffff", fontSize: "26px"}} color="#ffffff"component={<FontAwesomeIcon icon={faLongArrowAltUp}/>}/>
                    <Footer />
                </div>
            
        </>
    )
}

export default Index

import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
// import { useSelector } from 'react-redux';
import AsideCart from '../../Components/AsideCart/AsideCart';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
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
                    <Footer />
                </div>
            
        </>
    )
}

export default Index

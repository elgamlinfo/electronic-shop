import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import AsideCart from '../../Components/AsideCart/AsideCart';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
const Index = () => {
    const [cartClicked, setCartClick] = useState(false);
    const cartClickHunler = () => {
        setCartClick((prev) => !prev);
    }
    return (
        <div>
            <Navbar cartClickHunler = {cartClickHunler}/>
            <AsideCart clicked={cartClicked} cartClickHunler = {cartClickHunler}/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Index

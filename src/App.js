import React, { useState,useEffect, Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AsideCart from './Components/AsideCart/AsideCart';
import Footer from './Components/Footer/Footer';
import Loading from './Components/Loading/Loading';
import Navbar from './Components/Navbar/Navbar';
import AllProducts from './Pages/AllProdusts/AllProducts';
import CheckOut from './Pages/CheckOut/CheckOut';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import ShowProduct from './Pages/ShowProduct/ShowProduct';
import SignUp from './Pages/Signup/SignUp';
import Profile from './Pages/Profile/Profile'
import ProfileContent from './Components/Profile/ProfileContent'
import Orders from './Components/Profile/Orders'
import Favurite from './Components/Profile/Favurite'


const App = () => {
    const [cartClicked, setCartClick] = useState(false);
    const [loading, setLoading] = useState(true);
    const cartClickHunler = () => {
        setCartClick((prev) => !prev);
    }

    useEffect(_=> {
        setLoading(true);
    },[])
    window.onload = () => {
        setLoading(false);
    }
    return (
        <Fragment>
                <BrowserRouter>
                <Loading loading ={loading}/>
                <Navbar cartClickHunler = {cartClickHunler}/>
                <AsideCart clicked={cartClicked} cartClickHunler = {cartClickHunler}/>
                    <Routes>
                        <Route  path='/' element={<Home/>}/>
                        <Route  path='/signup' element={<SignUp />}/>
                        <Route  path='/login' element={<Login/>}/>
                        <Route  path='/product' element={<ShowProduct />}/>
                        <Route  path='/profile' element={<Profile />}>
                            <Route  index element={<ProfileContent />}/>
                            <Route  path="orders" element={<Orders />}/>
                            <Route  path="favurite" element={<Favurite />}/>
                        </Route>
                        <Route  path='/allproducts' element={<AllProducts />}/>
                        <Route  path='/checkout' element={<CheckOut/>}/>
                    </Routes>
                    <Footer />
                </BrowserRouter>
        </Fragment>
    )
}

export default App

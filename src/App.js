import React, { useState,useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import './styles/global.scss'

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
        <>
            <Loading loading ={loading}/>
            <Navbar cartClickHunler = {cartClickHunler}/>
            <AsideCart clicked={cartClicked} cartClickHunler = {cartClickHunler}/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/signup' component={SignUp}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/product' component={ShowProduct}/>
                        <Route exact path='/allproducts' component={AllProducts}/>
                        <Route exact path='/checkout' component={CheckOut}/>
                    </Switch>
                </BrowserRouter>
            <Footer />
        </>
    )
}

export default App

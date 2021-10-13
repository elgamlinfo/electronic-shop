import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AsideCart from './Components/AsideCart/AsideCart';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home'
import './styles/global.scss'

const App = () => {
    const [cartClicked, setCartClick] = useState(false);
    const cartClickHunler = () => {
        setCartClick((prev) => !prev);
    }
    return (
        <>
            <Navbar cartClickHunler = {cartClickHunler}/>
            <AsideCart clicked={cartClicked} cartClickHunler = {cartClickHunler}/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                    </Switch>
                </BrowserRouter>
            <Footer />
        </>
    )
}

export default App

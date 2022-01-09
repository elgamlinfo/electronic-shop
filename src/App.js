import React, { Fragment, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {getUser} from './Store/UserSlice'
import { getCart } from './Store/cartSlice';
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
import HomeCategory from './Pages/Category/HomeCategory'
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Index from './Pages/Index/Index';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardContent from './Components/Dashboard/DashboardContent';
import Users from './Components/Dashboard/Users';
import Admins from './Components/Dashboard/Admins';
import Products from './Components/Dashboard/Products';
import Category from './Components/Dashboard/Category';
import DashboardOrders from './Components/Dashboard/Orders';


const App = () => {
    const dispatch = useDispatch()
    // eslint-disable-next-line
    function setUserStore() {
        let token = localStorage.token;
        let cart = localStorage.cart;
        if(token){
            dispatch(getUser())
        }
        if(cart) {
            dispatch(getCart())
        }
    }

    useEffect(() => {
        setUserStore()
    }, [setUserStore])



    return (
        <Fragment>
                <Routes>
                    <Route   path='/' element={<Index/>}>
                        <Route  index element={<Home />}/>
                        <Route  path='signup' element={<SignUp />}/>
                        <Route  path='login' element={<Login/>}/>
                        <Route  path='product' element={<ShowProduct />}/>
                        <Route  path='profile' element={<Profile />}>
                            <Route  index element={<ProfileContent />}/>
                            <Route  path="orders" element={<Orders />}/>
                            <Route  path="favurite" element={<Favurite />}/>
                        </Route>
                        <Route  path='products' element={<AllProducts />}/>
                        <Route  path='checkout' element={<CheckOut/>}/>
                        <Route  path='/categories' element={<HomeCategory/>}/>
                    </Route>
                    <Route path='/dashboard' element={<Dashboard />}>
                        <Route  index element={<DashboardContent />}/>
                        <Route path='/dashboard/users' element={<Users />}/>
                        <Route path='/dashboard/admins' element={<Admins />}/>
                        <Route path='/dashboard/category' element={<Category />}/>
                        <Route path='/dashboard/products' element={<Products />}/>
                        <Route path='/dashboard/orders' element={<DashboardOrders />}/>
                    </Route>
                    <Route path='*' element={<PageNotFound />}/>
                </Routes>
        </Fragment>
    )
}

export default App

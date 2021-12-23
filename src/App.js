import React, { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Index from './Pages/Index/Index';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardContent from './Components/Dashboard/DashboardContent';
import Users from './Components/Dashboard/Users';
import Admins from './Components/Dashboard/Admins';

const App = () => {
    return (
        <Fragment>
                <BrowserRouter>
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
                            <Route  path='allproducts' element={<AllProducts />}/>
                            <Route  path='checkout' element={<CheckOut/>}/>
                        </Route>
                        <Route path='/dashboard' element={<Dashboard />}>
                            <Route  index element={<DashboardContent />}/>
                            <Route path='/dashboard/users' element={<Users />}/>
                            <Route path='/dashboard/admins' element={<Admins />}/>
                        </Route>
                        <Route path='*' element={<PageNotFound />}/>
                    </Routes>
                </BrowserRouter>
        </Fragment>
    )
}

export default App

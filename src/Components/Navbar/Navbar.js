import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart,
    faSearch,
    faShoppingBag,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Image from "../../images/person.webp";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { userSliceActions } from "../../Store/UserSlice";
import ReqLoading from "../Loading/ReqLoading";

const Navbar = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [active, setActive] = useState("");
    const [reqLoading, setReqLoading] = useState(false);
    const user = useSelector((state) => state.user.user);
    const isAuth = useSelector((state) => state.user.isAuth);

    let toggleHundel = (e) => {
        active === "" ? setActive("active") : setActive("");
    };

    const logoutHandler = () => {
        setReqLoading(true);
        axios
            .post(
                `${process.env.REACT_APP_API_LINK_DEV}/user/logout`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                    },
                }
            )
            .then((response) => {
                localStorage.clear();
                setReqLoading(false);
                navigate("/");
                dispatch(userSliceActions.logout());
            })
            .catch((error) => {
                console.log(error);
            });
    };


    function realTimeSearchHandler (val) {
        axios.get(`${process.env.REACT_APP_API_LINK_DEV}/product/all?search=${val}`)
        .then(res => {
            console.log(res.data);
        })
    }


    return (
        <div
            className="navbar"
            style={
                window.location.pathname === "/login"
                    ? { background: "#f1f1f1" }
                    : window.location.pathname === "/signup"
                    ? { background: "#f1f1f1" }
                    : { background: "#fff" }
            }
        >
            <ReqLoading loading={reqLoading} />
            <div className="container">
                <h1 className="logo">
                    <Link to="/">shop logo</Link>
                </h1>
                <div className={`search_over ${active}`}>
                    <button
                        className="toggle-close"
                        onClick={(_) => toggleHundel()}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>

                    <div className="search-box">
                        <input
                            type="text"
                            name="search"
                            className="search"
                            placeholder="Laptops, cameras, phones....."
                            onChange={e => realTimeSearchHandler(e.target.value)}
                        />
                        <button className="search-btn" aria-label="search-btn">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>

                </div>
                <div className="options">
                    <button
                        className="search-tog"
                        aria-label="search-tog"
                        onClick={(_) => toggleHundel()}
                    >
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button
                        className="shop-cart"
                        aria-label="cart-btn"
                        onClick={() => props.cartClickHunler()}
                    >
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </button>
                    <Link
                        to="/profile/favurite"
                        className="shop-fav"
                        aria-label="fav-btn"
                    >
                        <FontAwesomeIcon icon={faHeart} />
                    </Link>
                    <div className="profile_menu">
                        <img
                            src={isAuth && user.img ? user.img : Image}
                            alt=""
                        />
                        <div className="dorp_down_menu">
                            <ul>
                                <li>
                                    <Link to="/profile">my profile</Link>
                                </li>
                                <li>
                                    <Link to="/checkout">cart</Link>
                                </li>
                                <li>
                                    <Link to="/profile/orders">orders</Link>
                                </li>
                                <li>
                                    <Link to="/profile/favurite">
                                        favorites
                                    </Link>
                                </li>
                            </ul>
                            <hr />
                            {isAuth ? (
                                <button
                                    className="logout_user"
                                    onClick={logoutHandler}
                                >
                                    logout
                                </button>
                            ) : (
                                <Link className="register" to="/signup">
                                    register
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

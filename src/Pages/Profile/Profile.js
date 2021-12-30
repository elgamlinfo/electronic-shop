import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Loading from "../../Components/Loading/Loading";
import ProfieAside from "../../Components/Profile/ProfieAside";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { footerActions } from "../../Store/FooterSlice";
import "./profile.scss";
const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.user);
    const loading = useSelector((state) => state.user.loading);
    const isAuth = useSelector((state) => state.user.isAuth);

    
    useEffect(
        (_) => {
            if (!isAuth&&loading) {
                navigate("/login");
            }
            dispatch(footerActions.setFooterColor({ color: "#000000" }));
        },
        [dispatch, navigate, isAuth, loading]
    );


    return (
        <>
            {loading ? (
                <Loading loading={loading} />
            ) : (
                <div className="profile">
                    <ProfieAside user={user} />
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            )}
        </>
    );
};

export default Profile;

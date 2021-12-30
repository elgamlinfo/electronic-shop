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
    const loading = useSelector((state) => state.user.loading);
    const user = useSelector((state) => state.user.user);
    const isAuth = useSelector((state) => state.user.isAuth);

    
    useEffect(
        (_) => {
            dispatch(footerActions.setFooterColor({ color: "#000000" }));
            if (!isAuth && !loading) {
                navigate("/login");
            }
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

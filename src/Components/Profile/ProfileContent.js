import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import './profile-content.scss'
import {NotificationContainer,NotificationManager,} from "react-notifications";
import Loading from "../Loading/Loading";
import ReqLoading from "../Loading/ReqLoading";
import axios  from "axios" 
import { userSliceActions } from '../../Store/UserSlice';
const Profile = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const [loading, setLoading] = useState(false);
    const [reqloading, setReqLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [avatar, setAvatar] = useState();


    const submitHandler = (e) => {
        e.preventDefault();
        setReqLoading(true);
        let formData = new FormData();
        let data = {
            name,
            email,
            address,
            mobile,
        };
        for (let key in data) {
            formData.append(key, data[key]);
        }
        if(avatar) formData.append("avatar", avatar);
        if(password !== '') formData.append("password", password);
        axios
            .patch(
                `${process.env.REACT_APP_API_LINK_DEV}/user/info`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((res) => {
                NotificationManager.success(
                    `your information updated successfully😁`,
                    "success",
                    3000
                );
                dispatch(userSliceActions.setUserData(res.data))
                setReqLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        setLoading(true)
        user.name?setName(user.name):setName('') 
        user.email?setEmail(user.email):setEmail('') 
        user.address?setAddress(user.address):setAddress('') 
        user.mobile?setMobile(user.mobile):setMobile('') 
        setLoading(false)
    }, [user])

    return (
        <div className='profile_content'>
            <ReqLoading loading={reqloading} />
            <Loading loading={loading} />
            <NotificationContainer />
            <h2 className='titl'>Profile</h2>
            <div className="profile_form_cont">
                <form>
                    <div className="row">
                        <div className="input_group">
                            <label htmlFor="name" >name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="input_group">
                            <label htmlFor="email">email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input_group">
                            <label htmlFor="password">password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="input_group">
                            <label htmlFor="address">address</label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input_group">
                            <label htmlFor="mobile">mobile</label>
                            <input
                                type="text"
                                name="mobile"
                                id="mobile"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                        <div className="input_group">
                            <label htmlFor="image">image</label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                onChange={(e) => setAvatar(e.target.files[0])}
                            />
                        </div>
                    </div>
                    <button onClick={submitHandler}>save</button>
                </form>
            </div>
        </div>
    )
}

export default Profile

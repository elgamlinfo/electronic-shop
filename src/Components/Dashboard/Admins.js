import React, { useEffect, useRef, useState } from "react";
import Title from "./Title";
import "./admins.scss";
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";
import Loading from "../Loading/Loading";
import ReqLoading from "../Loading/ReqLoading";
import "react-notifications/lib/notifications.css";
import axios from "axios";

const Admins = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [reqloading, setReqLoading] = useState(false);
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [avatar, setAvatar] = useState();
    let errors = []

    function formValidation (data) {
        let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let passReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
        errors = []
        for(let key in data) {
            if(data[key] === '' && key !== "admin" && key !== "avatar") {
                errors.push(`${key} is empty!😊`)
            }
            if(!data["avatar"] &&  key === "avatar") {
                errors.push(`avatar is empty!😊`)
            }
            if(key === "email" && data[key] !== '' && !reg.test(data[key])){
                errors.push(`${key} is not valid!😊`)
            }
            if(key === "password" && data[key] !== '' && !passReg.test(data[key])){
                errors.push(`${key} must contains numbers, lowercase and uppercase letters😊`)
            }
        }
    }



    const submitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        let data = {
            name,
            email,
            password,
            address,
            mobile,
            admin: true,
            avatar,
        };
        
        formValidation(data);
        if(errors.length !== 0) {
            errors.forEach((error, i) => {
                NotificationManager.error(
                    error,
                    "Error",
                    3000
                );
            })
            return;
        }

        setReqLoading(true);
        for (let key in data) {
            formData.append(key, data[key]);
        }

        axios
            .post(
                `${process.env.REACT_APP_API_LINK_DEV}/admin/register`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            .then((res) => {
                setData(data => data.concat(res.data))
                NotificationManager.success(
                    `${res.data.name} added successfully😁`,
                    "success",
                    3000
                );
                setName('');
                setEmail('');
                setMobile('');
                setPassword('');
                setAddress('')
                formRef.current.reset();
                setReqLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    function deleteAdmin (id) {
        setReqLoading(true);
        axios
        .delete(`${process.env.REACT_APP_API_LINK_DEV}/user/delete/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            },
        })
        .then(res => {
            setData(data => data.filter(user => user._id !== res.data._id))
            setReqLoading(false);
            NotificationManager.success(
                `${res.data.name} deleted successfully`,
                "success",
                3000
            );
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(_=> {
        setLoading(true);
        axios
        .get(`${process.env.REACT_APP_API_LINK_DEV}/admins`,{
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            },
        })
        .then(res => {
            setData(res.data);
            setLoading(false);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div className="admins">
            <ReqLoading loading={reqloading} />
            <Loading loading={loading} />
            <NotificationContainer />
            <Title title="admins" />
            <div className="profile_form_cont">
                <form ref={formRef}>
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
            <table className="users_table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>address</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => {
                        return(
                            <tr key={user._id}> 
                                <td className="col-1">
                                    <img src={user.img} alt="" />
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>{user.address}</td>
                                <td>
                                    <button id={user._id} onClick={(e) => deleteAdmin(e.target.id)}>delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Admins;

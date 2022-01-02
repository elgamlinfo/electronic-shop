import React, { useEffect, useState } from "react";
import Title from './Title'
import userImage from '../../images/person.webp'
import './users.scss'
import axios from 'axios'
import ReqLoading from '../Loading/ReqLoading'
import Loading from '../Loading/Loading'
import { ToastContainer, toast } from 'react-toastify';




const Users = () => {
    const [data, setData] = useState([]);
    const [reqLoading, setReqLoading] = useState(false)
    const [loading, setLoading] = useState(false)

    function deleteUser (id) {
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
            toast.success(`${res.data.name} deleted successfully😁`);
        })
        .catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        setLoading(true);
        axios.get(`${process.env.REACT_APP_API_LINK_DEV}/users`, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        })
        .then(res => {
            setData(res.data);
            setLoading(false)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])


    return (
        <div className='users'>
            <ReqLoading loading={reqLoading} />
            <Loading loading={loading} />
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Title title="Users" />
            <table className="users_table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>address</th>
                        <th>options</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(user => {
                        return(
                            <tr key={user._id}>
                                <td  className='col-1'><img src={user.img?user.img:userImage} alt=""/></td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile||"unknown"}</td>
                                <td>{user.address||"unknown"}</td>
                                <td><button id={user._id} onClick={e=> deleteUser(e.target.id)}>delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Users;

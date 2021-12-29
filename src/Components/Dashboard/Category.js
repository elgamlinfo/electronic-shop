import React, {useEffect, useState} from 'react'
import './category.scss'
import Title from './Title'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';
import Loading from "../Loading/Loading";
import ReqLoading from "../Loading/ReqLoading";


const Category = () => {
    const [category, setCategory] = useState('');
    const [icon, setIcon] = useState('');
    const [data, setData] = useState([]);
    const [reqloading, setReqLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    
    
    const submitHandler = (e) => {
        e.preventDefault();
        setReqLoading(true);
        let data = {
            name:category,
            icon
        }
        axios.post(`${process.env.REACT_APP_API_LINK_DEV}/category/add`, data, {
            headers: {
                Authorization:`Bearer ${localStorage.token}`
            }
        })
        .then(res => {
            setData(data => data.concat(res.data))
            NotificationManager.success('category add successfully', 'success', 3000)
            setCategory('')
            setIcon('')
            setReqLoading(false);
        })
        .catch(error => {
            console.log(error);
        })
    }
    function deleteCategory (id) {
        setReqLoading(true);
        axios
        .delete(`${process.env.REACT_APP_API_LINK_DEV}/category/delete/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            },
        })
        .then(res => {
            setData(data => data.filter(category => category._id !== res.data._id))
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
        setLoading(true)
        axios.get(`${process.env.REACT_APP_API_LINK_DEV}/category`, {
            headers: {
                Authorization:`Bearer ${localStorage.token}`
            }
        })
        .then( res => {
            setData(res.data);
            setLoading(false)
        })
        .catch(error => {
            console.log(error);
        })
    },[])

    return (
        <div className='dash_category'>
            <ReqLoading loading={reqloading} />
            <Loading loading={loading} />
            <NotificationContainer />
            <Title title="Categories"/>
            <div className='category_form_cont'>
                <form>
                    <div className='row'>
                        <div className='input_group'>
                            <label htmlFor='category'>category</label>
                            <input 
                                type='category' 
                                name='category'
                                id='category'
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                            />
                        </div>
                        <div className='input_group'>
                            <label htmlFor="icon">icon</label>
                            <input 
                                type='icon' 
                                name='icon'
                                id='icon'
                                value={icon}
                                onChange={e => setIcon(e.target.value)}
                            />
                        </div>
                    </div>
                    <button onClick={submitHandler}>save</button>
                </form>
            </div>
            <table className="category_table">
                <thead>
                    <tr>
                        <th>category</th>
                        <th>icon</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(categ => {
                        return(
                            <tr key={categ._id}>
                                <td>{categ.name}</td>
                                <td>{categ.icon}</td>
                                <td>
                                    <button className='edit'>edit</button>
                                    <button 
                                        className='delete' 
                                        id={categ._id} 
                                        onClick={e => deleteCategory(e.target.id)}
                                        >delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Category

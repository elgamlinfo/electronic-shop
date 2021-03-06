import React, {useEffect, useState} from 'react'
import './category.scss'
import Title from './Title'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Loading from "../Loading/Loading";
import ReqLoading from "../Loading/ReqLoading";


const Category = () => {
    const [category, setCategory] = useState('');
    const [icon, setIcon] = useState('');
    const [data, setData] = useState([]);
    const [reqloading, setReqLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    let errors = []

    function formValidation (data) {
        errors = []
        for(let key in data) {
            if(data[key] === '') {
                errors.push(`${key} is empty!😊`)
            }
        }
    }

    
    const submitHandler = (e) => {
        e.preventDefault();
        let data = {
            name:category,
            icon
        }
        formValidation(data);
        if(errors.length !== 0) {
            errors.forEach((error, i) => {
                toast.error(error, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            return;
        }
            
        setReqLoading(true);
        axios.post(`${process.env.REACT_APP_API_LINK_DEV}/category/add`, data, {
            headers: {
                Authorization:`Bearer ${localStorage.token}`
            }
        })
        .then(res => {
            setData(data => data.concat(res.data))
            toast.success('category add successfully😁', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
            toast.success(`${res.data.name} deleted successfully`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
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
            <ToastContainer 
                theme="colored"
            />
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

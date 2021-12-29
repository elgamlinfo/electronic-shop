import React, { useEffect, useState } from "react";
import axios from "axios";
import ReqLoading from "../Loading/ReqLoading"
import Loading from "../Loading/Loading"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import "./products.scss";
import Title from "./Title";

const Products = () => {
    const [data, setData] = useState([]);
    const [reqloading, setReqLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [company, setCompany] = useState('');
    const [category, setCategory] = useState('');
    const [specifications, setSpecifications] = useState('');
    const [photos, setPhotos] = useState();
    
    const addProductHandler = (e) => {
        e.preventDefault()
        setReqLoading(true)
        let formData = new FormData()
        let productData = {
            title,
            description,
            company,
            category,
            specifications,
        }
        for ( let key in productData ) {
            formData.append(key, productData[key]);
        }
        [...photos].forEach(photo => {
            formData.append("photos", photo);
        });
        axios
            .post(`${process.env.REACT_APP_API_LINK_DEV}/product/add`,formData ,{
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                    'Content-Type': 'multipart/form-data'
                },
            })
            .then((res) => {
                NotificationManager.success('product added successfully', 'success', 3000)
                setReqLoading(false)
            })
            .catch((error) => {
                console.log(error);
        });
    }
    
    useEffect(_ => {
        setLoading(true)
        axios
            .get(`${process.env.REACT_APP_API_LINK_DEV}/category`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            })
            .then((res) => {
                setData(res.data);
                setCategory(res.data[0].name)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="dash_products">
            <Loading loading={loading}/>
            <ReqLoading loading={reqloading}/>
            <NotificationContainer />
            <Title title="products" />
            <div className="product_form_cont">
                <form>
                    <div className="row">
                        <div className="input_group">
                            <label htmlFor="title">title</label>
                            <input 
                                type="text" 
                                name="title" 
                                id="title" 
                                value={title} 
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="input_group">
                            <label htmlFor="description">description</label>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                value={description} 
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input_group">
                            <label htmlFor="company">company</label>
                            <input 
                                type="text" 
                                name="company" 
                                id="company" 
                                value={company} 
                                onChange={e => setCompany(e.target.value)}
                            />
                        </div>
                        <div className="input_group">
                            <label htmlFor="category">category</label>
                            <select 
                                name="category"
                                value={category} 
                                onChange={e => setCategory(e.target.value)}
                            >
                                {data.map((categ) => {
                                    return (
                                        <option
                                            value={categ.name}
                                            key={categ._id}
                                        >
                                            {categ.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input_group">
                            <label htmlFor="specifications">
                                specifications
                            </label>
                            <textarea
                                name="specifications"
                                id="specifications"
                                value={specifications} 
                                onChange={e => setSpecifications(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="input_group">
                            <label htmlFor="images">image</label>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                onChange={e => setPhotos(e.target.files)}
                                multiple
                            />
                        </div>
                    </div>
                    <button onClick={e => addProductHandler(e)}>save</button>
                </form>
            </div>
        </div>
    );
};

export default Products;

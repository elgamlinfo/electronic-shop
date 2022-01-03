import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import ReqLoading from "../Loading/ReqLoading"
import Loading from "../Loading/Loading"
import { ToastContainer, toast } from 'react-toastify';
import "./products.scss";
import Title from "./Title";

const Products = () => {
    const formRef = useRef(null);
    const [data, setData] = useState([]);
    const [reqloading, setReqLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [company, setCompany] = useState('');
    const [category, setCategory] = useState('');
    const [specifications, setSpecifications] = useState('');
    const [price, setPrice] = useState('');
    const [photos, setPhotos] = useState();
    


    let errors = []

    function formValidation (data) {
        errors = []
        for(let key in data) {
            if(data[key] === '') {
                errors.push(`${key} is empty!`)
            }
        }
        if(!photos) {
            errors.push(`photos is empty!`)
        }
    }



    const addProductHandler = (e) => {
        e.preventDefault()
        let formData = new FormData()
        let productData = {
            title,
            description,
            company,
            category,
            specifications,
            price
        }
        formValidation(productData);
        if(errors.length !== 0) {
            errors.forEach((error, i) => {
                toast.error(error);
            })
            return;
        }
        
        setReqLoading(true)
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
                toast.success('product added successfully😁');
                setCategory(data[0].name)
                setReqLoading(false)
                setTitle('')
                setDescription('')
                setCompany('')
                setSpecifications('')
                formRef.current.reset();
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
            <Title title="products" />
            <div className="product_form_cont">
                <form ref={formRef}>
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
                            <label htmlFor="price">price</label>
                            <input 
                                type="number" 
                                name="price" 
                                id="price" 
                                value={price} 
                                onChange={e => setPrice(e.target.value)}
                            />
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
                    </div>
                    <button onClick={e => addProductHandler(e)}>save</button>
                </form>
            </div>
        </div>
    );
};

export default Products;

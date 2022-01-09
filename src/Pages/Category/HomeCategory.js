import React, {useState, useEffect} from 'react'
import CategoryCard from '../../Components/Helpers/CategoryCard'
import Loading from '../../Components/Loading/Loading'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomeCategory = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    useEffect(() => {
        setLoading(true)
        axios.get(`${process.env.REACT_APP_API_LINK_DEV}/category`)
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
        .catch(error => {
            console.log(error);
        }) 
    }, [])
    return (
        <>
            {loading? <Loading  loading={loading}/>:
                <div className='category__container' style={categStyle}>
                    {data.map(categ => <Link style={{textDecoration:'none'}} key={categ._id} to={`/products?search=${categ.name}`}><CategoryCard  name={categ.name}   icon={categ.icon}/></Link>)}
                </div> 
            }
        </>
    )
}

let categStyle = {
    display: "flex",
    gap: "20px",
    minHeight: "100vh",
    padding: "20px 0px",
    width: "90%",
    margin: "20px auto",
}


export default HomeCategory

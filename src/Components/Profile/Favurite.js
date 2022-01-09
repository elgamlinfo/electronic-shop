import React, {useEffect, useState} from 'react'
import Product from '../Helpers/Product'
import './favourite.scss'
import axios from 'axios'
import Loading from '../Loading/Loading'



const Favurite = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios
        .get(
            `${process.env.REACT_APP_API_LINK_DEV}/fav`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`
                },
            }
        )
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    function removeFav(id) {
        setData(data => data.filter(prod => prod._id !== id))
    }

    return (
        <>
            {loading?<Loading loading={loading}/>:
            <div className='favourite_content'>
                <h2 className='titl'>Favourite</h2>
                <div className='favourite_card_wrapper'>
                    {data.map(prod =>{
                        return(
                            <Product 
                                key={prod._id}
                                title={prod.title}
                                img={prod.images[0]}
                                price={prod.price}
                                id={prod._id}
                                fav={true}
                                removeFav={removeFav}
                            />
                        )
                    } )}
                    
                </div>
            </div>
            }
        </>
    )
}

export default Favurite

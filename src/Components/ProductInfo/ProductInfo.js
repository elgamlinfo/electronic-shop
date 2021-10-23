import React from 'react'
import './productinfo.scss'
const ProductInfo = () => {
    return (
        <div className='product_info'>
            <div className='product_title'>
                <h2>MacBook Pro 16 Inch</h2>
                <p className='company_name'>by <span>pc company</span></p>
            </div>
            <div className="description">
                <h3>Description</h3>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy 
                text ever since the 1500s, when an unknown printer took a galley 
                of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <div className='color'>
                <h3>color: <span>Black</span></h3>
                <div className='color_wrapper'>
                    <span className = 'black' style={{backgroundColor: '#000'}}></span>
                    <span className = 'black' style={{backgroundColor: '#95A5A6'}}></span>
                    <span className = 'black' style={{backgroundColor: '#8E44AD'}}></span>
                    <span className = 'black' style={{backgroundColor: '#1ABC9C'}}></span>
                </div>
            </div>
            <div className='about_item'>
                <h3>about this item</h3>
                <div className='prod_about'>
                    <p>Apple-designed M1 chip for a giant leap in CPU, GPU, and machine learning performance</p>
                    <p>Get more done with up to 20 hours of battery life, the longest ever in a Mac</p>
                    <p>8-core CPU delivers up to 2.8x faster performance to fly through workflows quicker than ever</p>
                    <p>8-core GPU with up to 5x faster graphics for graphics-intensive apps and games</p>
                    <p>16-core Neural Engine for advanced machine learning</p>
                    <p>8GB of unified memory so everything you do is fast and fluid</p>
                    <p>Superfast SSD storage launches apps and opens files in an instant</p>
                </div>
            </div>
            <div className='ctrl_btns'>
                <button className='add_cart'><i className='fas fa-cart-plus'></i></button>
                <button className='add_fav'><span><i className='fas fa-heart'></i></span></button>
            </div>
        </div>
    )
}

export default ProductInfo

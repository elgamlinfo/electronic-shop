import React from 'react'


let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});




const CheckOutProduct = (props) => {    
    let data = {
        prodId: props.prod.prodId,
        title: props.prod.title,
        company: props.prod.company,
        image: props.prod.img,
        price: parseInt(props.prod.price),
    };


    return (
        <div className='Checkout_product'>
            <div className='img_cont'>
                <img src={props.prod.image} alt=''/>
            </div>
            <div className='info_cont'>
                <h3>{props.prod.title}</h3>
                <p>BY PC <span>{props.prod.company}</span></p>
            </div>
            <div className='counter_cont'>
                <button className='dec' onClick={() => props.removeOneItem(data)}><i className='fas fa-minus'></i></button>
                <span>{props.prod.qnt}</span>
                <button className='inc' onClick={() => props.addToCart(data)}><i className='fas fa-plus'></i></button>
            </div>
            <div className='price_cont'>
                <p>{formatter.format(props.prod.totalPrice)}</p>
            </div>
            <button className='delete_btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CheckOutProduct

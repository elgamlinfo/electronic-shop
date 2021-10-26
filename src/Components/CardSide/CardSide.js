import React, { useReducer } from 'react'
import './cardside.scss'

function reduser(state, action) {
    switch (action.type) {
        case "name":
            return {...state, name: action.payload};
        case "card":
            return {...state, cardNumber: action.payload};
        case "ex":
            return {...state, exDate: action.payload};
        case "cvv":
            return {...state, cvv: action.payload};
        default:
            return state;
    }
}

const CardSide = () => {
    const [state, dispatch] = useReducer(reduser, {name:'',cardNumber:'',exDate: '',cvv:''})
    return (
        <div className='card_container'>
            <div className='card_cont'>
                <h2 className='head'>Credit Details</h2>
                <form>
                    <div className='input_group'>
                        <label>name on card</label>
                        <input type='text' value={state.name} onChange={e => dispatch({ type: 'name', payload:e.target.value })}/> 
                    </div>
                    <div className='input_group'>
                        <label>card number</label>
                        <input type='text' value={state.cardNumber} onChange={e => dispatch({ type: 'card', payload:e.target.value })}/> 
                    </div>
                    <div className='input_wrapper'>
                        <div className='input_group'>
                            <label>Expiration date</label>
                            <input type='text' value={state.exDate} onChange={e => dispatch({ type: 'ex', payload:e.target.value })}/> 
                        </div>
                        <div className='input_group'>
                            <label>CVV</label>
                            <input type='text' value={state.cvv} onChange={e => dispatch({ type: 'cvv', payload:e.target.value })}/> 
                        </div>
                    </div>
                </form>
                <hr/>
                <div className='price_info'>
                    <div className='price_info_row'>
                        <p>subtotal</p>
                        <p>$3000.00</p>
                    </div>
                    <div className='price_info_row'>
                        <p>shipping</p>
                        <p>$50.00</p>
                    </div>
                    <div className='price_info_row'>
                        <p>total</p>
                        <p>$3050.00</p>
                    </div>
                </div>
                <button className='checkout_btn'>
                    <span>$3050.00</span>
                    <span>checkout <i className='fas fa-arrow-right'></i></span>
                </button>
            </div>
        </div>
    )
}

export default CardSide

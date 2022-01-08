import React, {  useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from '../../Store/cartSlice'
import { toast } from "react-toastify";
import ReqLoading from '../Loading/ReqLoading'
import "./cardside.scss";
import axios from "axios";

let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


function cc_format(value) {
    var v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    var matches = v.match(/\d{4,16}/g);
    var match = (matches && matches[0]) || "";
    var parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
        return parts.join(" ");
    } else {
        return value;
    }
}

function cc_expires_format(string) {
    return string
        .replace(
            /[^0-9]/g,
            "" // To allow only numbers
        )
        .replace(
            /^([2-9])$/g,
            "0$1" // To handle 3 > 03
        )
        .replace(
            /^(1{1})([3-9]{1})$/g,
            "0$1/$2" // 13 > 01/3
        )
        .replace(
            /^0{1,}/g,
            "0" // To handle 00 > 0
        )
        .replace(
            /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g,
            "$1/$2" // To handle 113 > 11/3
        );
}

function reduser(state, action) {
    switch (action.type) {
        case "name":
            return { ...state, name: action.payload };
        case "card":
            return { ...state, cardNumber: cc_format(action.payload) };
        case "ex":
            return { ...state, exDate: cc_expires_format(action.payload) };
        case "cvv":
            return { ...state, cvv: action.payload };
        default:
            return state;
    }
}

const CardSide = () => {
    const [state, dispatch] = useReducer(reduser, {
        name: "",
        cardNumber: "",
        exDate: "",
        cvv: "",
    });
    const cartDispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart)
    const [loading, setLoading] = useState(false)
    
    
    function orderHandler() {
        setLoading(true)
        axios.post(`${process.env.REACT_APP_API_LINK_DEV}/order`,null,{
            headers: {
                Authorization: `Bearer ${localStorage.token}`,
            },
        })
        .then((res) => {
            cartDispatch(cartActions.logout())
            toast.success("your order placed successfully😉");
            setLoading(false)
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="card_container">
            <ReqLoading loading={loading} />
            <div className="card_cont">
                <h2 className="head">Credit Details</h2>
                <form>
                    <div className="input_group">
                        <label>name on card</label>
                        <input
                            type="text"
                            value={state.name}
                            onChange={(e) =>
                                dispatch({
                                    type: "name",
                                    payload: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="input_group">
                        <label>card number</label>
                        <input
                            type="text"
                            value={state.cardNumber}
                            onChange={(e) =>
                                dispatch({
                                    type: "card",
                                    payload: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="input_wrapper">
                        <div className="input_group">
                            <label>Expiration date</label>
                            <input
                                type="text"
                                value={state.exDate}
                                onChange={(e) =>
                                    dispatch({
                                        type: "ex",
                                        payload: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className="input_group">
                            <label>CVV</label>
                            <input
                                type="text"
                                maxLength="3"
                                value={state.cvv}
                                onChange={(e) =>
                                    dispatch({
                                        type: "cvv",
                                        payload: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                </form>
                <hr />
                <div className="price_info">
                    <div className="price_info_row">
                        <p>subtotal</p>
                        <p>$3000.00</p>
                    </div>
                    <div className="price_info_row">
                        <p>shipping</p>
                        <p>$50.00</p>
                    </div>
                    <div className="price_info_row">
                        <p>total</p>
                        <p>$3050.00</p>
                    </div>
                </div>
                <button className="checkout_btn" onClick={orderHandler}>
                    <span>{formatter.format(cart.totalPrice)}</span>
                    <span>
                        checkout <i className="fas fa-arrow-right"></i>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default CardSide;

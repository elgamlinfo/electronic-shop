import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";

const OrdersTable = (props) => {
    let order = props.order;
    let [status, setStatus] = useState(
        order.placed && !order.transit && !order.completed
            ? "placed"
            : order.placed && order.transit && !order.completed
            ? "transit"
            : "completed"
    );
    let [active, setActive] = useState(false)
    
    function changeHandler(value) {
        setStatus(value)
        props.loadingHandler(true)
        let postData= value==="transit"?{transit: true}:{completed: true};
        axios
            .patch(`${process.env.REACT_APP_API_LINK_DEV}/order/${order._id}`, postData,{
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            })
            .then((res) => {
                props.dataChangeHandler(res.data)
                props.loadingHandler(false)
                toast.success('Done😉')
            })
            .catch((error) => {
                console.log(error);
            });
        setActive(false)    
    }

    return (
        <tr>
            <td>{order._id}</td>
            <td>{order.customer}</td>
            <td>{order.qnt}</td>
            <td>{order.deliveryDate}</td>
            <td>
                <span
                    className={`${
                        order.placed && !order.transit && !order.completed
                            ? "placed"
                            : order.placed && order.transit && !order.completed
                            ? "transit"
                            : "completed"
                    }`}
                >{`${
                    order.placed && !order.transit && !order.completed
                        ? "placed"
                        : order.placed && order.transit && !order.completed
                        ? "transit"
                        : "completed"
                }`}</span>
            </td>
            <td>
                <button onClick={() => setActive(!active)}>
                    <FontAwesomeIcon icon={faEllipsisV} />
                </button>
                <div className={`select ${active?'active':''}`} >
                    <select
                        value={status}
                        onChange={e => changeHandler(e.target.value)}
                    >
                        <option value="placed">placed</option>
                        <option value="transit">transit</option>
                        <option value="completed">completed</option>
                    </select>
                </div>
            </td>
        </tr>
    );
};

export default OrdersTable;

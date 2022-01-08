import React, { useState, useEffect } from "react";
import "./orders.scss";
import Title from "./Title";

import Loading from "../Loading/Loading";
import axios from "axios";
import OrdersTable from "./OrdersTable";

const Orders = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect((_) => {
        setLoading(true);
        axios
            .get(`${process.env.REACT_APP_API_LINK_DEV}/order/all`, {
                headers: {
                    Authorization: `Bearer ${localStorage.token}`,
                },
            })
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function dataChangeHandler (resData) {
        let c  = data.map((order) => {
            if(order._id === resData._id){
                return order = resData
            }
            return order;
        })
        setData(c)
    }

    return (
        <div className="dash_orders">
            <Loading loading={loading} />
            <Title title="orders" />
            <table className="orders_table">
                <thead>
                    <tr>
                        <th>order id</th>
                        <th>Customer</th>
                        <th>quantity</th>
                        <th>delivery date</th>
                        <th>status</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((order) => {
                        return (
                            <OrdersTable  key={order._id} dataChangeHandler={dataChangeHandler} order={order}/>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;

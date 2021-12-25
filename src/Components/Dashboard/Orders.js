import React, {useState} from 'react'
import './orders.scss'
import Title from './Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import ReqLoading from '../Loading/ReqLoading'
const Orders = () => {
    // eslint-disable-next-line
    const [loading, setLoading] = useState(false);
    return (
        <div className='dash_orders'>
            <ReqLoading loading={loading}/>
            <Title title='orders'/>
            <table className='orders_table'>
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
                    <tr>
                        <td>{Date.now()}</td>
                        <td>alyaa ahmed</td>
                        <td>4</td>
                        <td>30.12.2022</td>
                        <td><span className='completed'>completed</span></td>
                        <td>
                            <button><FontAwesomeIcon icon={faEllipsisV}/></button>
                            <div className='select'>
                                <select>
                                    <option value='placed'>placed</option>
                                    <option value='transit'>transit</option>
                                    <option value='completed'>completed</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>{Date.now()}</td>
                        <td>mostafa elgaml</td>
                        <td>5</td>
                        <td>13.12.2022</td>
                        <td><span className='placed'>placed</span></td>
                        <td>
                            <button><FontAwesomeIcon icon={faEllipsisV}/></button>
                            <div className='select'>
                                <select>
                                    <option value='placed'>placed</option>
                                    <option value='transit'>transit</option>
                                    <option value='completed'>completed</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>{Date.now()}</td>
                        <td>john doe</td>
                        <td>12</td>
                        <td>23.12.2022</td>
                        <td><span className='transit'>transit</span></td>
                        <td>
                            <button><FontAwesomeIcon icon={faEllipsisV}/></button>
                            <div className='select'>
                                <select>
                                    <option value='placed'>placed</option>
                                    <option value='transit'>transit</option>
                                    <option value='completed'>completed</option>
                                </select>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Orders

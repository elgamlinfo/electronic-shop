import React, {useState} from 'react'
import './category.scss'
import Title from './Title'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


const Category = () => {
    const [category, setCategory] = useState('');
    const [icon, setIcon] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        let data = {
            category,
            icon
        }
        console.log(data);
        NotificationManager.success('add successfully', 'success', 3000)
    }

    
    return (
        <div className='dash_category'>
            <NotificationContainer />
            <Title title="Categories"/>
            <div className='category_form_cont'>
                <form>
                    <div className='row'>
                        <div className='input_group'>
                            <label htmlFor='category'>category</label>
                            <input 
                                type='category' 
                                name='category'
                                id='category'
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                            />
                        </div>
                        <div className='input_group'>
                            <label htmlFor="icon">icon</label>
                            <input 
                                type='icon' 
                                name='icon'
                                id='icon'
                                value={icon}
                                onChange={e => setIcon(e.target.value)}
                            />
                        </div>
                    </div>
                    <button onClick={submitHandler}>save</button>
                </form>
            </div>
            <table className="category_table">
                <thead>
                    <tr>
                        <th>category</th>
                        <th>icon</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>laptop</td>
                        <td>laptop</td>
                        <td>
                            <button className='edit'>edit</button>
                            <button className='delete'>delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>pc</td>
                        <td>pc</td>
                        <td>
                            <button className='edit'>edit</button>
                            <button className='delete'>delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>mobile</td>
                        <td>mobile</td>
                        <td>
                            <button className='edit'>edit</button>
                            <button className='delete'>delete</button>
                        </td>
                    </tr>
                    <tr>
                        <td>keyboard</td>
                        <td>keyboard</td>
                        <td>
                            <button className='edit'>edit</button>
                            <button className='delete'>delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Category

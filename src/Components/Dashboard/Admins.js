import React, {useState} from 'react'
import Title from './Title'
import './admins.scss'
import userImage from '../../images/person.webp'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Admins = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [avatar, setAvatar] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData()
        let data = {
            name,
            email,
            password,
            address,
            mobile,
            avatar
        }
        for ( let key in data ) {
            formData.append(key, data[key]);
        }
        console.log(formData);
        NotificationManager.success('add successfully', 'success', 3000)
    }

    return (
        <div className='admins'>
            <NotificationContainer />
            <Title title="admins"/>
            <div className='profile_form_cont'>
                <form>
                    <div className='row'>
                        <div className='input_group'>
                            <label htmlFor='name'>name</label>
                            <input 
                                type='text' 
                                name='name'
                                id='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className='input_group'>
                            <label htmlFor="email">email</label>
                            <input 
                                type='email' 
                                name='email'
                                id='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input_group'>
                            <label htmlFor='password'>password</label>
                            <input 
                                type='password' 
                                name='password'
                                id='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='input_group'>
                            <label htmlFor='address'>address</label>
                            <input 
                                type='text' 
                                name='address' 
                                id='address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input_group'>
                            <label htmlFor='mobile'>mobile</label>
                            <input 
                                type='text' 
                                name='mobile'
                                id='mobile'
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                            />
                        </div>
                        <div className='input_group'>
                            <label htmlFor='image'>image</label>
                            <input
                                type='file' 
                                name='image' 
                                id='image'  
                                onChange={(e) => setAvatar(e.target.files[0])}
                            />
                        </div>
                    </div>
                    <button onClick={submitHandler}>save</button>
                </form>
            </div>
            <table className="users_table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>address</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td  className='col-1'><img src={userImage} alt=""/></td>
                        <td>mostafa elgaml</td>
                        <td>elgaml.info@gmail.com</td>
                        <td>01094977374</td>
                        <td>cairo</td>
                        <td><button variant="danger">delete</button></td>
                    </tr>
                    <tr>
                        <td className='col-1'><img src={userImage} alt=""/></td>
                        <td>mostafa elgaml</td>
                        <td>elgaml.info@gmail.com</td>
                        <td>01094977374</td>
                        <td>cairo</td>
                        <td><button variant="danger">delete</button></td>
                    </tr>
                    <tr>
                        <td className='col-1'><img src={userImage} alt=""/></td>
                        <td>mostafa elgaml</td>
                        <td>elgaml.info@gmail.com</td>
                        <td>01094977374</td>
                        <td>cairo</td>
                        <td><button variant="danger">delete</button></td>
                    </tr>
                    <tr>
                        <td className='col-1'><img src={userImage} alt=""/></td>
                        <td>mostafa elgaml</td>
                        <td>elgaml.info@gmail.com</td>
                        <td>01094977374</td>
                        <td>cairo</td>
                        <td><button variant="danger">delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Admins

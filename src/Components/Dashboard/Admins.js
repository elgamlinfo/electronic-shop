import React from 'react'
import Title from './Title'
import './admins.scss'
import userImage from '../../images/person.webp'

const Admins = () => {
    return (
        <div className='admins'>
            <Title title="admins"/>
            <div className='profile_form_cont'>
                <form>
                    <div className='row'>
                        <div className='input_group'>
                            <label htmlFor='name'>name</label>
                            <input type='text' name='name'id='name'/>
                        </div>
                        <div className='input_group'>
                            <label htmlFor="email">email</label>
                            <input type='email' name='email'id='email'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input_group'>
                            <label htmlFor='password'>password</label>
                            <input type='password' name='password'id='password'/>
                        </div>
                        <div className='input_group'>
                            <label htmlFor='address'>address</label>
                            <input type='text' name='address' id='address'/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='input_group'>
                            <label htmlFor='mobile'>mobile</label>
                            <input type='text' name='mobile'id='mobile'/>
                        </div>
                        <div className='input_group'>
                            <label htmlFor='image'>image</label>
                            <input type='file' name='image' id='image'/>
                        </div>
                    </div>
                    <button>save</button>
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

import React from "react";
import Title from './Title'
import userImage from '../../images/person.webp'
import './users.scss'
const Users = () => {
    return (
        <div className='users'>
            <Title title="Users" />
            <table className="users_table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>mobile</th>
                        <th>address</th>
                        <th>options</th>
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
    );
};

export default Users;

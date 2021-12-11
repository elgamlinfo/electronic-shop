import React from 'react'
import './profile-content.scss'
const Profile = () => {
    return (
        <div className='profile_content'>
            <h2 className='titl'>Profile</h2>
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
        </div>
    )
}

export default Profile

import React from 'react'
import { useLocation } from 'react-router-dom'
import ValidationTxt from '../Helpers/ValidationTxt'
import './formvalid.scss'
const FormValid = (props) => {
    const location = useLocation();
    return (
        <div className='form-valid'>
            <div>
                {location.pathname==='/login'?null:<ValidationTxt  text='name is not empty'/>}
                <ValidationTxt  text='email is not empty'/>
                <ValidationTxt  text='password is not empty'/>
                <ValidationTxt  text='email formate ex@ex.ex'/>
                <ValidationTxt  text='password contains numbers, lower and upper'/>
            </div>
        </div>
    )
}
export default FormValid

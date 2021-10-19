import React from 'react'
import ValidationTxt from '../Helpers/ValidationTxt'
import './formvalid.scss'
const FormValid = () => {
    return (
        <div className='form-valid'>
            <div>
                <ValidationTxt valid='true' text='validation role here!'/>
                <ValidationTxt  text='validation role here!'/>
                <ValidationTxt valid='true' text='validation role here!'/>
                <ValidationTxt  text='validation role here!'/>
            </div>
        </div>
    )
}
export default FormValid

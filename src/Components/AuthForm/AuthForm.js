import React from 'react'
import Form from './Form'
import './authform.scss'
import FormValid from './FormValid'
const AuthForm = (props) => {
   
    return (
        <div className='form'>
            <Form data = {props.inputsData} text={props.text}/>
            <FormValid />
        </div>
    )
}

export default AuthForm

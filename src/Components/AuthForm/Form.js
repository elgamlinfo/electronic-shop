import React from 'react'
import FormSubBtn from '../Helpers/FormSubBtn'
import Input from '../Helpers/Input'
import OAuthButton from '../Helpers/OAuthButton'
import { Link } from 'react-router-dom'
import './form.scss'
const Form = (props) => {
    return (
        <div className='form_cont'>
            <h2 className='form_title'>welcome to our app</h2>
            <OAuthButton />
            <div className='or_line'>OR</div>
            {props.data.map(data => <Input data={data} key={data.placeholder}/>)}
            <FormSubBtn text={props.text}/>
            {props.text === 'sign up'? <p className='redir'>have an account ? <Link to="/login">login</Link></p>:<p className='redir'>don't have account ? <Link to="/signup">signup</Link></p>}
        </div>
    )
}

export default Form

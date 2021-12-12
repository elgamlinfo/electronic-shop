import React from 'react'
import './helpers.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
const ValidationTxt = (props) => {
    return (
        <div className='valid-txt'>
            <span className={props.valid?'':'invalid'}>
                <FontAwesomeIcon icon={props.valid?faCheck:faTimes}/>
            </span>
            {props.text}
        </div>
    )
}

export default ValidationTxt

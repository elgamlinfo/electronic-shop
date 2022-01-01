import React from 'react'
import './helpers.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
const ValidationTxt = (props) => {
    return (
        <div className='valid-txt'>
            <span>
                <FontAwesomeIcon icon={faCircle}/>
            </span>
            {props.text}
        </div>
    )
}

export default ValidationTxt

import React from 'react'
import {useSelector} from 'react-redux'
import './footer.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGem,faPrayingHands,faCertificate,faThumbsUp,faTruckMoving } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    const color  = useSelector(state => state.footerColor.color);
    return (
        <div className="footer">
            <div 
            className='round-shape' 
            style={{background: color}}></div>
            <div className='footer-content'>
                <div className='services'>
                    <div className='serv-card'>
                        <div>
                            <span><FontAwesomeIcon icon={faTruckMoving}/></span>
                            <p>Loren ipsum</p>
                        </div>
                    </div>
                    <div className='serv-card'>
                        <div>
                            <span><FontAwesomeIcon icon={faThumbsUp}/></span>
                            <p>Loren ipsum</p>
                        </div>
                    </div>
                    <div className='serv-card'>
                        <div>
                            <span><FontAwesomeIcon icon={faCertificate}/></span>
                            <p>Loren ipsum</p>
                        </div>
                    </div>
                    <div className='serv-card'>
                        <div>
                            <span><FontAwesomeIcon icon={faPrayingHands}/></span>
                            <p>Loren ipsum</p>
                        </div>
                    </div>
                    <div className='serv-card'>
                        <div>
                            <span><FontAwesomeIcon icon={faGem}/></span>
                            <p>Loren ipsum</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='foot'>
                <p>© Copy Right 2021. Made with <span><i className="fas fa-heart"></i></span> By Mostafa ELGAML</p>
            </div>
        </div>
    )
}

export default Footer

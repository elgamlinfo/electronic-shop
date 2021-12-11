import React from 'react'
import './footer.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGem,faPrayingHands,faCertificate,faThumbsUp,faTruckMoving } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className="footer">
            <div 
            className='round-shape' 
            style={
                window.location.pathname === "/login"?{background:"#f1f1f1"}:
                window.location.pathname === "/signup"?{background:"#f1f1f1"}:
                window.location.pathname === "/profile"?{background:"#000000", height: "10px"}:
                window.location.pathname === "/profile/orders"?{background:"#000000", height: "10px"}:
                window.location.pathname === "/profile/favurite"?{background:"#000000", height: "10px"}:
                {background:"#fff"}}></div>
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

import React from 'react'
import './footer.scss'
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
                            <span><i className='fas fa-truck-moving'></i></span>
                            <p>Loren ipsum</p>
                        </div>
                    </div>
                    <div className='serv-card'>
                        <div>
                            <span><i className="far fa-thumbs-up"></i></span>
                            <p>Loren ipsum</p>
                        </div>
                    </div>
                    <div className='serv-card'>
                        <div>
                            <span><i className='fas fa-certificate'></i></span>
                            <p>Loren ipsum</p>
                        </div>
                    </div>
                    <div className='serv-card'>
                        <div>
                            <span><i className='fas fa-praying-hands'></i></span>
                            <p>Loren ipsum</p>
                        </div>
                    </div>
                    <div className='serv-card'>
                        <div>
                            <span><i className='far fa-gem'></i></span>
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

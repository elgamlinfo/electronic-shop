import React from 'react'
import './header.scss';
import SliderContent from './SliderContent'
// import "swiper/css/pagination"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'



// import Swiper core and required modules
import SwiperCore, {
    Mousewheel,
    Pagination,
    Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination,Mousewheel,Autoplay]);


const Header = () => {
    return (
        <div className='header' >
            <div className='container'>
                <Swiper 
                    pagination={{"clickable": true}} 
                    loop={true} 
                    autoplay={{"delay": 2500, "disableOnInteraction": false }} 
                    mousewheel={true}
                >
                    <SwiperSlide><SliderContent /></SwiperSlide>
                    <SwiperSlide><SliderContent /></SwiperSlide>
                    <SwiperSlide><SliderContent /></SwiperSlide>
                    <SwiperSlide><SliderContent /></SwiperSlide>
                    <SwiperSlide><SliderContent /></SwiperSlide>
                    <SwiperSlide><SliderContent /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Header

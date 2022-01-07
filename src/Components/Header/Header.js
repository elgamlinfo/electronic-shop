import React from 'react'
import './header.scss';
import SliderContent from './SliderContent'
// import "swiper/css/pagination"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import slider1 from '../../images/slider.png'
import slider2 from '../../images/slider-1.png'
import slider3 from '../../images/slider-2.png'
import slider4 from '../../images/slider-3.png'

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
                    <SwiperSlide style={{backgroundImage: `url(${slider1})`}}><SliderContent /></SwiperSlide>
                    <SwiperSlide style={{backgroundImage: `url(${slider2})`}}><SliderContent /></SwiperSlide>
                    <SwiperSlide style={{backgroundImage: `url(${slider3})`}}><SliderContent /></SwiperSlide>
                    <SwiperSlide style={{backgroundImage: `url(${slider4})`}}><SliderContent /></SwiperSlide>
                    <SwiperSlide style={{backgroundImage: `url(${slider2})`}}><SliderContent /></SwiperSlide>
                    <SwiperSlide style={{backgroundImage: `url(${slider3})`}}><SliderContent /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Header

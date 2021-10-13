import React, { useRef } from 'react'
import Product from '../Helpers/Product';
import Title from '../Helpers/SectionTitle';
// import "swiper/css/pagination"
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'



// import Swiper core and required modules
import SwiperCore, {
    Autoplay
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay]);


const ShowProducts = (props) => {
    const swiperRef = useRef(null)
    return (
        <div className='show-product' style={{marginTop:"40px"}}  
        onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
        onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
        >
            <div className='container' >
                <Title title={props.title}/>
                <Swiper 
                    ref={swiperRef} 
                    slidesPerView={4}
                    spaceBetween={40}
                    freeMode={true} 
                    autoplay={{"delay": 1500, "disableOnInteraction": false }}
                >
                    <SwiperSlide>
                        <Product />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Product />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default ShowProducts

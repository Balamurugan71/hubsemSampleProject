import React from 'react'
import './SubComp4.css'
// import { RESSlider } from '../../utils/SubCompData';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import { RESSlider } from '../../utils/SubCompData';
const SubComp4 = () => {

    return (
        <>
            <div className='SubComp4_Container'>
                <div className='SubComp4_Holder'>
                    <div className='SubComp4_Section1'>
                        <h3 className='SubComp4_Heading'>Our Comprehensive Web Tech Stack</h3>
                    </div>
                    <div className='SubComp4_Section2'>
                        <Swiper
                            slidesPerView={6}
                            spaceBetween={10}
                            autoplay={{
                                delay: 3000,
                            }}
                            loop={true}
                            breakpoints={{
                                425: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 4,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 10,
                                },
                                1326: {
                                    slidesPerView: 6,
                                    spaceBetween: 10,
                                },
                                1440: {
                                    slidesPerView: 6,
                                    spaceBetween: 10,
                                },
                                2056: {
                                    slidesPerView: 6,
                                    spaceBetween: 10,
                                },
                            }}
                            modules={[Autoplay]}
                        >
                            {
                                RESSlider.map((data, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='Slider_Holder'>
                                            <div className='Slider_Section'>
                                                <NavLink className='Slider_NavLink' to='responsivewebsitedesign'><img className='Slider_image' src={data.image} alt={data.text} /></NavLink>
                                                <NavLink className='Slider_NavLink' to='responsivewebsitedesign'><span className='Slider_Text'>{data.text}</span></NavLink>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SubComp4
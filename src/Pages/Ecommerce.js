import React, { useState, useEffect } from 'react'
import HeaderSec from '../Section/HeaderSec'
import Footer from '../Components/Footer/Footer'
import Botpic from '../Components/BotPic/Botpic'
import SubComp1 from '../Components/SubComp/SubComp1'
import EcommerceImage from '../assets/Ecommerce.jpg'
import '../Components/SubComp/SubComp2.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SubComp3 from '../Components/SubComp/SubComp3'
import 'react-vertical-timeline-component/style.min.css';
import { ECDATA, ECSlider } from '../utils/SubCompData';
import SubComp5 from '../Components/SubComp/SubComp5'
import '../Components/SubComp/SubComp4.css'
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay } from 'swiper/modules';
import SubComp6 from '../Components/SubComp/SubComp6'
import AOS from 'aos';
import 'aos/dist/aos.css';

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollPosition;
};

const Ecommerce = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            once: true,
        });
        AOS.refresh();
    }, [])

    const scrollPosition = useScrollPosition();

    const isInView = (elementTop) => {
        return scrollPosition > elementTop - window.innerHeight / 2;
    };

    return (
        <>
            <HeaderSec />
            <SubComp1
                content1='Empowering Your Online Business'
                content2='Ecommerce Solutions'
                content3='Seamless, Scalable, and Secure'
                content4='At Hubsem, we specialize in delivering comprehensive Ecommerce solutions that drive your online business growth. Utilizing platforms like WooCommerce, Shopify, WIX, and OpenCart, we create robust online stores with seamless payment integration. Our aim is to provide you with a fully functional, scalable, and secure Ecommerce platform that enhances user experience and maximizes conversions.'
                image={EcommerceImage}
            />
            <div className='SubComp2_Container'>
                <div className='SubComp2_Holder'>
                    <span className='SubComp2_Header'>Our key Offerings</span>
                    <VerticalTimeline lineColor='#f5f5f5'>
                        {
                            ECDATA.map((data, index) => (
                                <VerticalTimelineElement
                                    key={index}
                                    iconStyle={{ background: isInView(data.inView) ? '#FE873D' : '#fff', color: isInView(data.inView) ? '#fff' : '#FE873D', boxShadow: 'none' }}
                                    contentStyle={{ background: '#fff', color: '#000', boxShadow: 'none', padding: '25px' }}
                                    contentArrowStyle={{ borderRight: `10px solid #fff`, top: '0' }}
                                    icon={<img className='TimelineImage' src={data.icon} alt={data.title} />}
                                >
                                    <h3 className="SubComp2_Head">{data.title}</h3>
                                    <p className='SubComp2_Para'>{data.para}</p>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>
            </div>
            <SubComp3
                image={EcommerceImage}
                reason='Ecommerce Solutions'
                head1='Enhanced User Experience: '
                head2='Secure Payment Integration: '
                head3='Scalability and Flexibility: '
                head4='Increased Conversions: '
                para1='Our Ecommerce solutions focus on providing a seamless and engaging user experience. With intuitive navigation and fast loading times, we ensure that your customers have a pleasant shopping experience.'
                para2='We integrate secure payment gateways to protect your transactions and customer data. Our solutions support various payment options, making it convenient for your customers to complete their purchases.'
                para3="Our Ecommerce platforms are designed to grow with your business. Whether you're starting small or expanding your operations, our solutions are scalable and adaptable to your changing needs."
                para4="With optimized checkout processes and user-friendly designs, our Ecommerce solutions are aimed at maximizing conversions and increasing your sales. We use data-driven strategies to enhance your online store’s performance."
            />
            <SubComp6
                para1="Our team has extensive experience in developing Ecommerce solutions across various platforms. We combine technical expertise with a deep understanding of Ecommerce trends to deliver high-quality, effective solutions."
                para2="We take the time to understand your business goals and challenges. Our client-centric approach ensures that we deliver tailored Ecommerce solutions that align with your vision and objectives."
                para3="We stay ahead of industry trends and use the latest technologies to provide innovative Ecommerce solutions. Our designs are not only current but also future-proof, ensuring your store remains competitive."
            />
            <div className='SubComp4_Container'>
                <div className='SubComp4_Holder'>
                    <div className='SubComp4_Section1'>
                        <h3 className='SubComp4_Heading'>Our Comprehensive Ecommerce Tech Stack</h3>
                    </div>
                    <div className='SubComp4_Section2'>
                        <Swiper
                            slidesPerView={3}
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
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1326: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                1440: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                                2056: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                },
                            }}
                            modules={[Autoplay]}
                        >
                            {
                                ECSlider.map((data, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='Slider_Holder'>
                                            <NavLink className='Slider_NavLink' to='/ecommercesolutions'><div className='Slider_Section2'>
                                                <img className='Slider_image2' src={data.image} alt={data.text} />
                                                <span className='Slider_Text'>{data.text}</span>
                                            </div></NavLink>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div >
            <SubComp5
                bgc="#fff"
                heading='Ready to Elevate Your Online Business?'
                para='Transform your Ecommerce platform with our expert solutions and drive your business growth. Contact Hubsem today for a consultation and quote. Let’s create a seamless shopping experience that stands out.'
            />
            <Footer />
            <Botpic />
        </>
    )
}

export default Ecommerce
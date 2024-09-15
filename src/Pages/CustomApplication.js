import React, { useState, useEffect } from 'react'
import HeaderSec from '../Section/HeaderSec'
import Footer from '../Components/Footer/Footer'
import Botpic from '../Components/BotPic/Botpic'
import SubComp1 from '../Components/SubComp/SubComp1'
import Desktop from "../assets/Desktop.jpg"
import '../Components/SubComp/SubComp2.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SubComp3 from '../Components/SubComp/SubComp3'
import 'react-vertical-timeline-component/style.min.css';
import { CUSDATA, CUSSlider } from '../utils/SubCompData';
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

const CustomApplication = () => {

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
                content1="Tailored Solutions for Every Platform"
                content2="Custom Desktop / Web / Mobile Application Development"
                content3="Innovative, Versatile, and Domain-Specific"
                content4="At Hubsem, we specialize in developing custom desktop, web, and mobile applications tailored to meet the unique needs of your business. Our expertise spans across various technologies and platforms, enabling us to deliver robust, scalable, and high-performance applications. Whether you need a Windows-based desktop application, a dynamic web application, or a cross-platform mobile app, our team has the skills and experience to bring your vision to life."
                image={Desktop}
            />
            <div className='SubComp2_Container'>
                <div className='SubComp2_Holder'>
                    <span className='SubComp2_Header'>Our key Offerings</span>
                    <VerticalTimeline lineColor='#f5f5f5'>
                        {
                            CUSDATA.map((data, index) => (
                                <VerticalTimelineElement
                                    key={index}
                                    iconStyle={{ background: isInView(data.inView) ? '#FE873D' : '#fff', color: isInView(data.inView) ? '#fff' : '#FE873D', boxShadow: 'none' }}
                                    contentStyle={{ background: '#fff', color: '#000', boxShadow: 'none', padding: '25px' }}
                                    contentArrowStyle={{ borderRight: `10px solid #fff`, top: '0' }}
                                    icon={data.icon}
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
                image={Desktop}
                reason='Custom Application Development'
                head1='Tailored Solutions: '
                head2='Enhanced User Experience: '
                head3='Scalability and Flexibility: '
                head4='Integration Capabilities: '
                para1='Custom applications are designed to address the specific needs and challenges of your business. By opting for tailored solutions, you ensure that your application aligns perfectly with your processes and goals, leading to increased efficiency and productivity.'
                para2='Our applications are designed with the end-user in mind. By focusing on user experience, we create intuitive interfaces and seamless interactions that enhance user satisfaction and engagement, ultimately leading to higher adoption rates.'
                para3="Custom applications are built to scale with your business. As your business grows and evolves, your application can be easily updated and expanded to meet new requirements, ensuring long-term viability and performance."
                para4="Our custom applications can be integrated with your existing systems and third-party services, providing a unified solution that enhances your overall IT ecosystem. This integration capability ensures that your business operations run smoothly and efficiently."
            />
            <SubComp6
                para1="Our team has extensive experience in developing custom applications across various platforms and technologies. We combine technical expertise with a deep understanding of different industry domains to deliver high-quality, effective solutions."
                para2="We prioritize understanding your business goals and challenges. Our client-centric approach ensures that we deliver customized solutions that align with your vision and drive tangible results."
                para3="We stay at the forefront of technology trends and use the latest tools and techniques to provide innovative application development solutions. Our designs are not only current but also future proof, ensuring your applications remain competitive."
            />
            <div className='SubComp4_Container'>
                <div className='SubComp4_Holder'>
                    <div className='SubComp4_Section1'>
                        <h3 className='SubComp4_Heading'>Our Comprehensive Development Tech Stack</h3>
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
                                CUSSlider.map((data, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='Slider_Holder'>
                                            <NavLink className='Slider_NavLink' to='/desktopwebmobile'><div className='Slider_Section3'>
                                                <img className='Slider_image' src={data.image} alt={data.text} />
                                                <div className='Slider_Text'>{data.text}</div>
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
                heading='Ready to Transform Your Business with Custom Applications?'
                para='Leverage our expertise in custom desktop, web, and mobile application development to drive your business forward. Contact Hubsem today for a consultation and quote. Let’s build a solution that meets your unique needs and sets you apart from the competition.'
            />
            <Footer />
            <Botpic />
        </>
    )
}

export default CustomApplication
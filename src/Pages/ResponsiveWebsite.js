import React, { useState, useEffect } from 'react'
import HeaderSec from '../Section/HeaderSec'
import Footer from '../Components/Footer/Footer'
import Botpic from '../Components/BotPic/Botpic'
import SubComp1 from '../Components/SubComp/SubComp1'
import SampleImage1 from '../assets/Webdesign.jpg'
import '../Components/SubComp/SubComp2.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { RESDATA, RESSlider } from '../utils/SubCompData';
import SubComp3 from '../Components/SubComp/SubComp3'
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

const ResponsiveWebsite = () => {

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
            <SubComp1 content1='Creating Seamless Digital Experiences'
                content2='Responsive Web Design and Development'
                content3='Engaging, Adaptive, and User-Centric'
                content4='At Hubsem, we specialize in crafting responsive websites that deliver an exceptional user experience on any device. Our team of experts blends creativity with technical precision to design and develop websites that are not only visually appealing but also highly functional and to navigate. From desktops to smartphones, we ensure your digital presence is consistent and engaging.'
                image={SampleImage1}
            />
            <div className='SubComp2_Container'>
                <div className='SubComp2_Holder'>
                    <span className='SubComp2_Header'>Our key Offerings</span>
                    <VerticalTimeline lineColor='#f5f5f5'>
                        {
                            RESDATA.map((data, index) => (
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
                image={SampleImage1}
                reason='Responsive Design'
                head1='Boost Mobile Traffic: '
                head2='Improve SEO: '
                head3='Increase Conversions: '
                head4='Cost-Efficient: '
                para1='With over half of all web traffic coming from mobile devices, a responsive design ensures you reach a broader audience.'
                para2='Google prioritizes mobile-friendly websites, enhancing your search engine visibility and ranking.'
                para3='A seamless user experience across all devices leads to higher engagement and conversion rates.'
                para4='One responsive website for all devices reduces development and maintenance costs.'
            />
            <SubComp6
                para1='With years of experience in web design and development, our team has the skills and knowledge to deliver high-quality, responsive websites that meet your business goals.'
                para2='We prioritize understanding your needs and objectives. Our client-centric approach ensures that we deliver solutions that are tailored to your specific requirements.'
                para3='We stay ahead of industry trends and use innovative technologies to provide cutting-edge solutions. Our designs are not only current but also future proof.'
            />
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
                                            <NavLink className='Slider_NavLink' to='/responsivewebsitedesign'><div className='Slider_Section'>
                                                <img className='Slider_image' src={data.image} alt={data.text} />
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
                heading='Ready to Elevate Your Online Presence?'
                para='Invest in a responsive website that engages your audience and drives business growth. Contact Hubsem today for a consultation and quote. Let’s create a digital experience that stands out.'
            />
            <Footer />
            <Botpic />
        </>
    )
}

export default ResponsiveWebsite
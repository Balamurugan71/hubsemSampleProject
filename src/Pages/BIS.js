import React, { useState, useEffect } from 'react'
import HeaderSec from '../Section/HeaderSec'
import Footer from '../Components/Footer/Footer'
import Botpic from '../Components/BotPic/Botpic'
import SubComp1 from '../Components/SubComp/SubComp1'
import BISImage from '../assets/BI.jpg'
import '../Components/SubComp/SubComp2.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SubComp3 from '../Components/SubComp/SubComp3'
import SubComp5 from '../Components/SubComp/SubComp5'
import 'react-vertical-timeline-component/style.min.css';
import { BISDATA, BISSlider } from '../utils/SubCompData';
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

const BIS = () => {

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
            <SubComp1 content1='Transforming Data into Actionable Insights'
                content2='Business Intelligence Solutions'
                content3='Powerful, Integrated, and Efficient'
                content4='At Hubsem, we excel in delivering comprehensive Business Intelligence solutions that empower your organization to make informed decisions. Our expertise in PowerApp, PowerBI, PowerAutomate, and SharePoint enables us to provide tailored solutions that streamline your processes and enhance data-driven decision-making. Our goal is to turn your data into actionable insights that drive business growth and efficiency.'
                image={BISImage}
            />
            <div className='SubComp2_Container'>
                <div className='SubComp2_Holder'>
                    <span className='SubComp2_Header'>Our key Offerings</span>
                    <VerticalTimeline lineColor='#f5f5f5'>
                        {
                            BISDATA.map((data, index) => (
                                <VerticalTimelineElement
                                    key={index}
                                    iconStyle={{ background: isInView(data.inView) ? '#FE873D' : '#fff', color: isInView(data.inView) ? '#fff' : '#FE873D', boxShadow: 'none', width: '75px', height: '75px' }}
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
                image={BISImage}
                reason='Business Intelligence Solutions'
                head1='Enhanced Decision-Making: '
                head2='Increased Productivity: '
                head3='Better Collaboration: '
                head4='Improved Data Visualization: '
                para1='By leveraging advanced BI tools, you can gain deeper insights into your business operations, leading to more informed and strategic decisions.'
                para2='Automating repetitive tasks with PowerApps and PowerAutomate frees up your team to focus on more critical activities, boosting overall productivity.'
                para3="With SharePoint, teams can collaborate more effectively, share information seamlessly, and access the resources they need, whenever they need them."
                para4="PowerBI’s robust visualization capabilities allow you to see your data in new ways, making it easier to identify trends, patterns, and areas for improvement."
            />
            <SubComp6
                para1="Our team has extensive experience in implementing Business Intelligence solutions across various industries. We combine technical expertise with industry knowledge to deliver solutions that meet your specific needs."
                para2="We prioritize understanding your business objectives and challenges. Our client-centric approach ensures that we deliver customized BI solutions that align with your goals and drive tangible results."
                para3="We stay at the forefront of BI technology, using the latest tools and techniques to provide innovative solutions that give you a competitive edge. Our solutions are designed to be scalable and adaptable, ensuring they grow with your business."
            />
            <div className='SubComp4_Container'>
                <div className='SubComp4_Holder'>
                    <div className='SubComp4_Section1'>
                        <h3 className='SubComp4_Heading'>Our Comprehensive BI Tech Stack</h3>
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
                                BISSlider.map((data, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='Slider_Holder'>
                                            <NavLink className='Slider_NavLink' to='/businessinterlligence'><div className='Slider_Section2'>
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
                heading='Ready to Transform Your Business with BI Solutions?'
                para='Unlock the potential of your data and drive business growth with our Business Intelligence solutions. Contact Hubsem today for a consultation and quote. Let’s turn your data into actionable insights and take your business to the next level.'
            />
            <Footer />
            <Botpic />
        </>
    )
}

export default BIS
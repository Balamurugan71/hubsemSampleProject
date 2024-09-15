import React, { useState, useEffect } from 'react'
import HeaderSec from '../Section/HeaderSec'
import Footer from '../Components/Footer/Footer'
import Botpic from '../Components/BotPic/Botpic'
import SubComp1 from '../Components/SubComp/SubComp1'
import SMMImage from "../assets/SMM.jpg"
import '../Components/SubComp/SubComp2.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SubComp3 from '../Components/SubComp/SubComp3'
import 'react-vertical-timeline-component/style.min.css';
import { SMMDATA } from '../utils/SubCompData';
import SubComp5 from '../Components/SubComp/SubComp5'
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

const SMM = () => {

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
                content1='Amplifying Your Brand’s Digital Presence'
                content2='Social Media Marketing'
                content3='Engaging, Strategic, and Measurable'
                content4='At Hubsem, we specialize in delivering comprehensive Social Media Marketing (SMM) services that amplify your brand’s digital presence and engage your target audience. Our team of social media experts uses data-driven strategies and creative content to enhance your online visibility, build brand loyalty, and drive conversions.'
                image={SMMImage}
            />
            <div className='SubComp2_Container'>
                <div className='SubComp2_Holder'>
                    <span className='SubComp2_Header'>Our key Offerings</span>
                    <VerticalTimeline lineColor='#f5f5f5'>
                        {
                            SMMDATA.map((data, index) => (
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
                image={SMMImage}
                reason='Social Media Marketing'
                head1='Enhanced Brand Awareness: '
                head2='Improved Customer Engagement: '
                head3='Higher Conversion Rates: '
                head4='Cost-Effective Marketing: '
                para1='Effective SMM strategies increase your brand’s visibility across various social media platforms, reaching a broader audience and boosting brand recognition.'
                para2='Social media provides a direct line of communication with your customers, allowing you to engage with them in real-time, build relationships, and foster brand loyalty.'
                para3="Targeted social media campaigns drive traffic to your website, increasing the likelihood of conversions and sales. By reaching the right audience, we help you achieve your business goals more efficiently."
                para4="SMM offers a cost-effective way to reach your target audience compared to traditional advertising methods. With precise targeting and measurable results, you can optimize your marketing budget for maximum impact."
            />
            <SubComp6
                para1="Our team has extensive experience in managing successful social media campaigns for various industries. We combine creative skills with analytical expertise to deliver high-impact SMM strategies."
                para2="We prioritize understanding your brand and business objectives. Our client-centric approach ensures that we deliver customized SMM solutions that align with your goals and resonate with your audience."
                para3="We stay ahead of social media trends and use the latest tools and techniques to provide innovative marketing solutions. Our strategies are designed to be adaptive and scalable, ensuring they continue to deliver results as the social media landscape evolves."
            />
            <SubComp5
                bgc="#f5f5f5"
                heading='Ready to Amplify Your Brand’s Digital Presence?'
                para='Maximize your brand’s reach and engagement with our expert Social Media Marketing services. Contact Hubsem today for a consultation and quote. Let’s take your social media presence to the next level.'
            />
            <Footer />
            <Botpic />
        </>
    )
}

export default SMM
import React, { useState, useEffect } from 'react'
import HeaderSec from '../Section/HeaderSec'
import Footer from '../Components/Footer/Footer'
import Botpic from '../Components/BotPic/Botpic'
import SubComp1 from '../Components/SubComp/SubComp1'
import SEOImage from "../assets/SEO.jpg"
import '../Components/SubComp/SubComp2.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SubComp3 from '../Components/SubComp/SubComp3'
import 'react-vertical-timeline-component/style.min.css';
import { SEODATA } from '../utils/SubCompData';
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

const SEO = () => {

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
                content1="Boosting Your Online Visibility"
                content2="Search Engine Optimization Services"
                content3="Strategic, Effective, and Results-Driven"
                content4="At Hubsem, we specialize in delivering comprehensive Search Engine Optimization (SEO) services that enhance your online visibility and drive organic traffic to your website. Our team of SEO experts uses proven strategies and the latest tools to improve your search engine rankings, ensuring that your business stands out in the competitive digital landscape."
                image={SEOImage}
            />
            <div className='SubComp2_Container'>
                <div className='SubComp2_Holder'>
                    <span className='SubComp2_Header'>Our key Offerings</span>
                    <VerticalTimeline lineColor='#f5f5f5'>
                        {
                            SEODATA.map((data, index) => (
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
                image={SEOImage}
                reason='SEO Services'
                head1='Increased Organic Traffic: '
                head2='Higher Search Engine Rankings: '
                head3='Improved User Experience: '
                head4='Long-Term Results: '
                para1='Effective SEO strategies improve your website’s visibility in search engine results, driving more organic traffic to your site. This increased traffic leads to higher engagement and more potential customers.'
                para2='Our SEO services help your website rank higher for relevant keywords, making it easier for potential customers to find you. Higher rankings increase your credibility and trustworthiness in the eyes of your audience.'
                para3="SEO involves optimizing your website’s content and structure, which enhances the overall user experience. A well-optimized site is easier to navigate, loads faster, and provides valuable information to users, leading to higher satisfaction and retention rates."
                para4="SEO provides long-term benefits by continuously improving your website’s performance and visibility. Unlike paid advertising, which stops when you stop paying, SEO continues to drive traffic and generate leads over time."
            />
            <SubComp6
                para1="Our team has extensive experience in implementing successful SEO campaigns for various industries. We combine technical expertise with a deep understanding of SEO best practices to deliver high-quality results."
                para2="We prioritize understanding your business goals and challenges. Our client-centric approach ensures that we deliver tailored SEO solutions that align with your objectives and drive tangible results."
                para3="We stay ahead of SEO trends and use the latest tools and techniques to provide innovative solutions. Our strategies are designed to be scalable and adaptable, ensuring they continue to deliver results as search engine algorithms evolve."
            />
            <SubComp5
                bgc="#f5f5f5"
                heading='Ready to Boost Your Online Visibility?'
                para='Enhance your search engine rankings and drive more organic traffic with our expert SEO services. Contact Hubsem today for a consultation and quote. Let’s make your business stand out in the digital landscape.'
            />
            <Footer />
            <Botpic />
        </>
    )
}

export default SEO
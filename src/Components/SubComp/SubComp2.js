import React, { useState, useEffect } from 'react';
import './SubComp2.css'
// import { Element, scroller } from 'react-scroll';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';
import { RESDATA } from '../../utils/SubCompData';

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

const SubComp2 = () => {
    const scrollPosition = useScrollPosition();

    const isInView = (elementTop) => {
        return scrollPosition > elementTop - window.innerHeight / 2;
    };

    return (
        <>
            <div className='SubComp2_Container'>
                <div className='SubComp2_Holder'>
                    <span className='SubComp2_Header'>Our key Offerings</span>
                    <VerticalTimeline lineColor='#f5f5f5'>
                        {
                            RESDATA.map((data, index) => (
                                <VerticalTimelineElement
                                    key={index}
                                    iconStyle={{ background: isInView(data.inView) ? '#FE873D' : '#fff', color: isInView(data.inView) ? '#fff' : '#FE873D', boxShadow: 'none', width: '75px', height: '75px' }}
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
        </>
    );
};

export default SubComp2;

import React, { useEffect } from 'react'
import HeaderSec from '../Section/HeaderSec'
import Footer from '../Components/Footer/Footer'
import Botpic from '../Components/BotPic/Botpic'
import AboutHero from '../Components/AboutComp/AboutHero'
import AboutProfile from '../Components/AboutComp/AboutProfile'
import AboutComp3 from '../Components/AboutComp/AboutComp3'
import AboutComp4 from '../Components/AboutComp/AboutComp4'
import AboutComp5 from '../Components/AboutComp/AboutComp5'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: 'ease-in-sine',
            once: true,
        });
        AOS.refresh();
    }, [])
    return (
        <>
            <HeaderSec />
            <AboutHero />
            <AboutProfile />
            <AboutComp3 />
            <AboutComp4 />
            <AboutComp5 />
            <Footer />
            <Botpic />
        </>
    )
}

export default AboutUs
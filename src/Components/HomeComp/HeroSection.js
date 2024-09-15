import React, { useEffect } from 'react'
import './HeroSection.css'
import HeroImage from '../../assets/Home-Page-img.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
const HeroSection = () => {

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
            <div className='position-relative w-100'>
                <div>
                    <img className='image-fluid object-fit-cover w-100' src={HeroImage} alt='HeroImage' />
                    <div data-aos="fade-right" className='position-absolute overlayText'>
                        <span data-aos="zoom-in" data-aos-delay="600" className='text-white'>Elevating Business through Technology - Your Gateway to IT Excellence</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HeroSection
import React from 'react'
import './AboutComp4.css'
import aboutImage2 from '../../assets/About-img-1024x1024.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight } from '@fortawesome/free-regular-svg-icons'
const AboutComp4 = () => {
    return (
        <>
            <div className='Comp4_container'>
                <div className='Comp4_Holder'>
                    <img className='Comp4_section1 img-fluid' src={aboutImage2} alt='AboutImage2' />
                    <div className='Comp4_section2'>
                        <div className='Comp4_section2_container'>
                            <span className='section2_Header' data-aos="fade-up">Synchronize. Collaborate. Excel.</span>
                            <span className='section2_Header2' data-aos="fade-up">Transforming Tasks, Revolutionizing Results.</span>
                            <p className='section2_Para' data-aos="fade-up">At Hubsem solution, we are passionate about providing cutting-edge IT solutions and services to empower businesses and individuals alike. With a team of highly skilled professionals and a customer-centric approach, we strive to deliver exceptional technology solutions that drive growth and productivity.</p>
                            <p className='section2_Para' data-aos="fade-up">We Provide following list of services</p>
                            <ul className='d-flex flex-column align-items-start gap-2' data-aos="fade-up">
                                <li className='d-flex flex-row align-items-start gap-3'>
                                    <FontAwesomeIcon className='Comp4_icon' icon={faSquareCaretRight} />
                                    <p className='section2_Para'>In-depth analysis of your existing IT infrastructure and processes</p>
                                </li>
                                <li className='d-flex flex-row align-items-start gap-3'>
                                    <FontAwesomeIcon className='Comp4_icon' icon={faSquareCaretRight} />
                                    <p className='section2_Para'>Strategic recommendations to align technology with your business objectives</p>
                                </li>
                                <li className='d-flex flex-row align-items-start gap-3'>
                                    <FontAwesomeIcon className='Comp4_icon' icon={faSquareCaretRight} />
                                    <p className='section2_Para'>Roadmap development for IT transformation and digitalization</p>
                                </li>
                                <li className='d-flex flex-row align-items-start gap-3'>
                                    <FontAwesomeIcon className='Comp4_icon' icon={faSquareCaretRight} />
                                    <p className='section2_Para'>Design and development of robust, scalable, and user-friendly software applications</p>
                                </li>
                                <li className='d-flex flex-row align-items-start gap-3'>
                                    <FontAwesomeIcon className='Comp4_icon' icon={faSquareCaretRight} />
                                    <p className='section2_Para'>Custom solutions tailored to meet your unique business requirements</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComp4
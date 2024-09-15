import React from 'react'
import ParticlesBg from 'particles-bg';
import './Footer.css'
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo-white.png'

const Footer = () => {

    return (
        <>
            <div className='Bg-image pt-4'>
                <div className='particlesBg'>
                    <ParticlesBg type="lines" bg={true} />
                </div>
                <div className='footerOverlay pt-5 px-5'>
                    <div className='row py-5'>
                        <div className='col-md-5 col-12 pb-md-0 pb-3'>
                            <NavLink to='/'><img src={Logo} className='footerLogo' alt='Logo' /></NavLink>
                            <p className='text-white pt-3'>Our team of experts specializes in a wide range of IT services, ensuring that we can meet all your technology needs.</p>
                        </div>
                        <div className='offset-md-1 offset-0 col-md-2 col-12 pb-md-0 pb-3'>
                            <div className='d-flex flex-column align-items-start justify-content-center gap-4 pe-md-5'>
                                <span className='text-white fs-4 fw-semibold'>Quick Links</span>
                                <ul className='d-flex flex-column align-items-start justify-content-center gap-2'>
                                    <li><NavLink to='/' className='footerNav'>Home</NavLink></li>
                                    <li><NavLink to='/aboutus' className='footerNav'>About Us</NavLink></li>
                                    <li><NavLink to='/services' className='footerNav'>Services</NavLink></li>
                                    <li><NavLink to='/internship' className='footerNav'>Internship</NavLink></li>
                                    <li><NavLink to='/contactus' className='footerNav'>Contact Us</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-4 col-12 pb-md-0 '>
                            <div className='d-flex flex-column align-items-start justify-content-center gap-4 ps-md-5'>
                                <span className='text-white fs-4 fw-semibold'>Services</span>
                                <ul className='d-flex flex-column align-items-start justify-content-center gap-2'>
                                    <li><NavLink to='/responsivewebsitedesign' className='footerNav'>Responsive Website Design / Development</NavLink></li>
                                    <li><NavLink to='/ecommercesolutions' className='footerNav'>Ecommerce solutions</NavLink></li>
                                    <li><NavLink to='/businessinterlligence' className='footerNav'>Business Intelligence Services</NavLink></li>
                                    <li><NavLink to='/seo' className='footerNav'>Search Engine Optimization (SEO)</NavLink></li>
                                    <li><NavLink to='/smm' className='footerNav'>Social Media Marketing (SMM)</NavLink></li>
                                    <li><NavLink to='/desktopwebmobile' className='footerNav'>Desktop / Web / Mobile Applications</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='p-4 border-top'>
                            <p className='text-white text-center'>© Copyright 2024, Hubsem Software Solutions Pvt. Ltd. | All rights reserved.</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
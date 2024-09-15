import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'
// import navData from '../../utils/NavData.json'
import Logo from '../../assets/logo-white.png'
import Logo1 from '../../assets/hubsem-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    // let linkClass = 'nav-link text-white fw-medium'

    return (
        <>
            <div className='px-lg-5 px-md-1 bgSecondary sticky-top'>
                <div className=''>
                    <nav className="navbar navbar-expand-lg py-0">
                        <div className="container-fluid">
                            <NavLink className="navbar-brand" to="/"><img src={Logo} alt='Logo' className='logo' /></NavLink>
                            <button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <NavLink className="offcanvas-title" id="offcanvasNavbarLabel" to='/'><img src={Logo1} alt='Logo' className='logoSide' /></NavLink>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"><FontAwesomeIcon icon={faClose} /></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-center flex-grow-1 gap-3 pe-3">
                                        {/* {navData && navData.map((nav, index) => (

                                            <li className="nav-item" key={index}>
                                                <NavLink to={nav.path} className='nav-link text-white fw-medium' activeClassName='active'>{nav.title}</NavLink>
                                            </li>
                                        ))} */}
                                        <li className="nav-item">
                                            <NavLink to='/' exact='true' className={({ isActive }) => (isActive ? 'nav-link navColor fw-medium active' : 'nav-link navColor fw-medium')}>HOME</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/aboutus' className={({ isActive }) => (isActive ? 'nav-link navColor fw-medium active' : 'nav-link navColor fw-medium')}>ABOUT US</NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink to='/services' className={({ isActive }) => (isActive ? 'nav-link navColor fw-medium active' : 'nav-link navColor fw-medium')}>SERVICES  <FontAwesomeIcon icon={faAngleDown} /></NavLink>
                                            <div className='dropdown-menu px-5 pt-5'>
                                                <div className='row'>
                                                    <div className='col-lg-6 col-12 d-flex flex-column align-items-start justify-content-center gap-4 mb-4'>
                                                        <span className='cPrimary fs-6 fw-bold'>WEB DESIGN & DEVELOPMENT</span>
                                                        <ul>
                                                            <li className='mb-3'><NavLink className='subNavColor fw-medium ' to='/responsivewebsitedesign'>Responsive Website Design / Development</NavLink></li>
                                                            <li className='mb-3'><NavLink className='subNavColor fw-medium ' to='/ecommercesolutions'>Ecommerce solutions</NavLink></li>
                                                        </ul>
                                                    </div>
                                                    <div className='col-lg-6 col-12 d-flex flex-column align-items-start justify-content-center gap-4 mb-4'>
                                                        <span className='cPrimary fs-6 fw-bold'>DIGITAL MARKETING</span>
                                                        <ul>
                                                            <li className='mb-3'><NavLink className='subNavColor fw-medium ' to='/seo'>Search Engine Optimization (SEO)</NavLink></li>
                                                            <li className='mb-3'><NavLink className='subNavColor fw-medium ' to='/smm'>Social Media Marketing (SMM)</NavLink></li>
                                                        </ul>
                                                    </div>
                                                    <div className='col-lg-6 col-12 d-flex flex-column align-items-start justify-content-center gap-4 mb-4'>
                                                        <span className='cPrimary fs-6 fw-bold'>ADVANCED</span>
                                                        <ul>
                                                            <li className='mb-3'><NavLink className='subNavColor fw-medium ' to='/businessinterlligence'>Business Intelligence Services</NavLink></li>
                                                        </ul>
                                                    </div>
                                                    <div className='col-lg-6 col-12 d-flex flex-column align-items-start justify-content-center gap-4 mb-4'>
                                                        <span className='cPrimary fs-6 fw-bold'>CUSTOM SOFTWARE DEVELOPMENT</span>
                                                        <ul>
                                                            <li className='mb-3'><NavLink className='subNavColor fw-medium ' to='/desktopwebmobile'>Desktop / Web / Mobile Applications</NavLink></li>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/internship' className={({ isActive }) => (isActive ? 'nav-link navColor fw-medium active' : 'nav-link navColor fw-medium')}>INTERNSHIP</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/contactus' className={({ isActive }) => (isActive ? 'nav-link navColor fw-medium active' : 'nav-link navColor fw-medium')}>CONTACT US</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <NavLink to='/contactus'><button className='btn btn-primary fw-semibold'>GET A QOUTE</button></NavLink>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { SOCIALLINKS } from '../../utils/socialLinks';

const Header = () => {
    return (
        <>
            <div className='d-md-block d-none bgPrimary px-lg-5 px-md-1 py-2'>
                <div className='mx-lg-4 mx-md-1'>
                    <ul className='d-flex flex-row justify-content-between align-items-center py-1'>
                        <li className='fs-6 fw-semibold text-white'>
                            <span className='pe-2'><FontAwesomeIcon icon={faClock} /></span>
                            <span>Monday - Friday : 10AM - 6PM</span>
                        </li>
                        <li className='fs-6 fw-semibold d-flex align-items-center'>
                            {SOCIALLINKS.map(icons => <a href={icons.link} className='hoverIcon text-white' key={icons.id}>
                                {icons.icon}
                            </a>)}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='px-lg-5 px-md-1 py-xl-3 py-lg-2'>
                <div className='mx-4 py-1 d-lg-block d-md-none d-none'>
                    <div className='row d-lg-flex d-md-none cSecondary'>
                        <div className='col-3 d-flex align-items-center gap-3'>
                            <span><a className='cSecondary fs-2 border-Secondary px-3 py-2' href='tel:+91 9500590134'><FontAwesomeIcon icon={faPhone} /></a></span>
                            <div className='d-flex flex-column justify-content-center align-items-start'>
                                <h5><a className='cSecondary' href='tel:+91 9500590134'>Reach Us</a></h5>
                                <p><a className='cSecondary infoLink fw-medium' href='tel:+91 9500590134'>+91 9500590134</a></p>
                            </div>
                        </div>
                        <div className='col-5 d-flex align-items-center gap-3 cSecondary'>
                            <span className='fs-2 border-Secondary px-3 py-2'><FontAwesomeIcon icon={faAddressCard} /></span>
                            <div className='d-flex flex-column justify-content-center align-items-start'>
                                <h5 className='cSecondary'>Office Address</h5>
                                <p className='cSecondary fw-medium'>#714A,Spencer Plaza, Phase II, 7th Floor, #769, Anna Salai, Thousand Lights, Chennai-600002</p>
                            </div>
                        </div>
                        <div className='offset-1 col-3 d-flex align-items-center gap-3'>
                            <span><a className='cSecondary fs-2 border-Secondary px-3 py-2' href='mailto:info@hubsem.com'><FontAwesomeIcon icon={faEnvelopeOpenText} /></a></span>
                            <div className='d-flex flex-column justify-content-center align-items-start'>
                                <h5><a className='cSecondary' href='mailto:info@hubsem.com'>Send us an email</a></h5>
                                <p><a className='cSecondary infoLink fw-medium' href='mailto:info@hubsem.com'>info@hubsem.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-1 d-md-block d-lg-none ps-3 py-2'>
                    <div className='row'>
                        <div className='col-md-3 col-6 text-md-start'>
                            <a href='mailto:info@hubsem.com'>
                                <span><FontAwesomeIcon className='cPrimary pe-md-1 pe-sm-3 pe-1' icon={faEnvelopeOpenText} /></span>
                                <span className='infoLink1 cSecondary fs-sm-6 fw-medium'>info@hubsem.com</span>
                            </a>
                        </div>
                        <div className='col-md-5 col-6 text-md-center'>
                            <a href='tel:+91 9500590134'>
                                <span><FontAwesomeIcon className='cPrimary pe-md-1 pe-sm-3 pe-1' icon={faPhone} /></span>
                                <span className='infoLink1 cSecondary fs-sm-6 fw-medium'>+91 9500590134</span>
                            </a>
                        </div>
                        <div className='offset-md-0 col-md-3 offset-sm-4 offset-3 col-6 py-md-0 py-2'>
                            <li className='fs-6 fw-semibold d-flex align-items-center'>
                                {SOCIALLINKS.map(icons => <a href={icons.link} className='hoverIcon1 cPrimary' key={icons.id}>
                                    {icons.icon}
                                </a>)}
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
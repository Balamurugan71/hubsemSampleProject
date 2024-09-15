import React from 'react'
import './HomeForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelopeOpenText, faHouse } from '@fortawesome/free-solid-svg-icons'
import ReCAPTCHA from "react-google-recaptcha";

const HomeForm = () => {
    return (
        <>
            <div className='main_container'>
                <div className='second_container'>
                    <div className='container-xxl p-md-5 px-sm-3 py-sm-5 py-5 px-2 bgGrey Home_form rounded-5'>
                        <div className='d-flex flex-column align-items-start justify-content-center p-3'>
                            <span className='form_follow pb-4 cSecondary fw-medium text-uppercase'>Follow Us On</span>
                            <div className='text-white pb-4 d-flex flex-row align-items-center gap-2'>
                                <a href='https://www.facebook.com/hubsemsolutions' className='text-white'><FontAwesomeIcon className='socialIcons faceBook' icon={faFacebookF} /></a>
                                <a href='https://www.instagram.com/hubsemsolutions/' className='text-white'><FontAwesomeIcon className='socialIcons instaGram' icon={faInstagram} /></a>
                                <a href='https://twitter.com/hubsem' className='text-white'><FontAwesomeIcon className='socialIcons twitTer' icon={faTwitter} /></a>
                                <a href='https://www.linkedin.com/company/hubsem-software-solutions/mycompany/' className='text-white'><FontAwesomeIcon className='socialIcons linkedIn' icon={faLinkedinIn} /></a>
                                <a href='https://www.youtube.com/channel/UCpdFFI7vVU0_qKGSpQ520nQ' className='text-white'><FontAwesomeIcon className='socialIcons youTube' icon={faYoutube} /></a>
                            </div>
                            <span className='fs-6 pb-4 fw-semibold'><em>We look forward to hearing from you and assisting you with any inquiries or concerns you may have.</em></span>
                            <div className='borderedAddress mb-4'>
                                <a href='tel:+91 9500590134'><FontAwesomeIcon className='cPrimary contactIcon' icon={faPhone} /></a>
                                <div className='contactBox'>
                                    <span className='cPrimary contactTextHead text-uppercase'><a href='tel:+91 9500590134' className='cPrimary'>Call Us Today</a></span>
                                    <span className='contactTextFont'>+91 95005 90134</span>
                                </div>
                            </div>
                            <div className='borderedAddress mb-4'>
                                <a href='mailto:info@hubsem.com'><FontAwesomeIcon className='cPrimary contactIcon' icon={faEnvelopeOpenText} /></a>
                                <div className='contactBox'>
                                    <span className='cPrimary contactTextHead text-uppercase'><a href='mailto:info@hubsem.com' className='cPrimary'>Send us an email</a></span>
                                    <span className='contactTextFont'>info@hubsem.com</span>
                                </div>
                            </div>
                            <div className='borderedAddress mb-4'>
                                <a href='mailto:info@hubsem.com'><FontAwesomeIcon className='cPrimary contactIcon' icon={faHouse} /></a>
                                <div className='contactBox'>
                                    <span className='cPrimary contactTextHead text-uppercase'><a href='mailto:info@hubsem.com' className='cPrimary'>Office Address</a></span>
                                    <span className='contactTextFont'>#714A, Spencer Plaza,Phase II, 7th Floor, #769,Anna Salai, Thousand Lights, Chennai-600002,
                                        Tamilnadu, India.</span>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex flex-column align-items-start justify-content-center gap-3 homeContactForm'>
                            <span className='cTertiary fs-6 fw-bold text-uppercase letterSpace'>Stay In Touch</span>
                            <span className='cSecondary lh-1 fs-1 fw-semibold'>Lets's Connect!</span>
                            <form className='formContainer'>
                                <input className='inputForm' type='text' name='fullName' placeholder='Full name*' />
                                <input className='inputForm' type='email' name='email' placeholder='Email*' />
                                <input className='inputForm' type='text' name='phone' placeholder='Phone*' />
                                <label htmlFor='_interest' className='d-block mb-3 fw-semibold'>SERVICE OF INTEREST:</label>
                                <select name='interest' id='_interest' className='selectForm'>
                                    <option value="" selected>—Please choose an option—</option>
                                    <option value="Web Application">Web Application</option>
                                    <option value="Mobile Application">Mobile Application</option>
                                    <option value="Web Design & Development">Web Design & Development</option>
                                    <option value="Graphic Design">Graphic Design</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Maintenance & Support">Maintenance & Support</option>
                                </select>
                                <input className='inputForm' type='text' name='needs' placeholder='Description of Your IT Needs*' />
                                <textarea className='textForm' cols='40' rows='7' maxLength='2000' placeholder='Additional Comments & Questions'></textarea>
                                <ReCAPTCHA className='mb-3 reCaptcha' sitekey='siteKey' />
                                <button type='submit' className='subMit'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeForm
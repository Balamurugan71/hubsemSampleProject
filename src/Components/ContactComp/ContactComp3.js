import React from 'react'
import './ContactComp3.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ReCAPTCHA from 'react-google-recaptcha';

const ContactComp3 = () => {
    return (
        <>
            <div className='Contact_Cmp3_Section'>
                <div className='Contact_Cmp3_Container'>
                    <div className='Contact_Cmp3_Holder'>
                        <div className='Comp3_Section1'>
                            <span className='Section1_Contact_Content1'>Get in Touch</span>
                            <span className='Section1_Contact_Content2'>We'd love to hear from you.</span>
                            <span className='Section1_Contact_Content3'>Let’s Connect. Please feel free to reach out to us through any of the provided channels, and we will do our best to respond to your inquiry as soon as possible.</span>
                            <span className='Section1_Contact_Content4'>If you have any specific questions or require assistance with a particular issue, please provide us with the necessary details so that we can better understand and address your concerns. We value your feedback and strive to provide excellent customer service.</span>
                            <span className='Section1_Contact_Content5'>Follow Us On</span>
                            <div className='text-white pb-4 d-flex flex-row align-items-center gap-2'>
                                <a href='https://www.facebook.com/hubsemsolutions' className='text-white'><FontAwesomeIcon className='socialIcons faceBook' icon={faFacebookF} /></a>
                                <a href='https://www.instagram.com/hubsemsolutions/' className='text-white'><FontAwesomeIcon className='socialIcons instaGram' icon={faInstagram} /></a>
                                <a href='https://twitter.com/hubsem' className='text-white'><FontAwesomeIcon className='socialIcons twitTer' icon={faTwitter} /></a>
                                <a href='https://www.linkedin.com/company/hubsem-software-solutions/mycompany/' className='text-white'><FontAwesomeIcon className='socialIcons linkedIn' icon={faLinkedinIn} /></a>
                                <a href='https://www.youtube.com/channel/UCpdFFI7vVU0_qKGSpQ520nQ' className='text-white'><FontAwesomeIcon className='socialIcons youTube' icon={faYoutube} /></a>
                            </div>
                        </div>
                        <div className='Comp3_Section2'>
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

export default ContactComp3
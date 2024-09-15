import React from 'react'
import './ContactComp2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
// import gifContact from '../../assets/contact-gif.gif'
import gifContact2 from '../../assets/Email_marketing.gif'

const ContactComp2 = () => {
    return (
        <>
            <div className='Contact_Cmp1_Container'>
                <div className='Contact_Cmp1_Holder'>
                    <div className='Comp1_Section_Contact'>
                        <div className='Section_box Box_1'>
                            <FontAwesomeIcon className='Section_box_icon' icon={faPhone} />
                            <span className='Section_box_header'>Phone</span>
                            <span className='Section_box_para'><a href='tel:+91 9500590134' className='Section_box_anchor'>+91 95005 90134</a></span>
                        </div>
                        <div className='Section_box Box_2'>
                            <FontAwesomeIcon className='Section_box_icon' icon={faEnvelope} />
                            <span className='Section_box_header'>Mail Us</span>
                            <span className='Section_box_para'><a href='mailto:info@hubsem.com' className='Section_box_anchor'>info@hubsem.com</a></span>
                        </div>
                        <div className='Section_box Box_3'>
                            <FontAwesomeIcon className='Section_box_icon' icon={faMapLocationDot} />
                            <span className='Section_box_header'>Office Address</span>
                            <span className='Section_box_para'>#714A, Spencer Plaza,Phase II, 7th Floor, #769, Anna Salai, Thousand Lights, Chennai-600 002, Tamilnadu, India.</span>
                        </div>
                    </div>
                    <div className='Comp2_Section_Contact'>
                        {/* <img className='Contact_gif' src={gifContact} alt='Mail Us' /> */}
                        <img className='Contact_gif' src={gifContact2} alt='Mail Us' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactComp2
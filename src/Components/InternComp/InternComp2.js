import React from 'react'
import './InternComp2.css'
import ReCAPTCHA from 'react-google-recaptcha'

const InternComp2 = () => {
    return (
        <>
            <div className='InternFormContainer'>
                <div className='container-xl InternFormHolder'>
                    <div className='InternParaContainer'>
                        <p className='InternPara'>Welcome to our Internship Program! We are excited to offer valuable opportunities for aspiring professionals to gain real-world experience and enhance their skills in IT Services. Our internship program is designed to provide hands-on learning, mentorship, and exposure to the inner workings of our company. To apply for our internship program, please fill the form below:</p>
                    </div>
                    <form className='formInternContainer'>
                        <input className='internInputForm' type='text' name='fullName' placeholder='Full name*' />
                        <input className='internInputForm' type='email' name='email' placeholder='Email Address*' />
                        <input className='internInputForm' type='text' name='phone' placeholder='Phone Number*' />
                        <input className='internInputForm' type='text' name='address' placeholder='Address*' />
                        <input className='internInputForm' type='text' name='city' placeholder='City*' />
                        <input className='internInputForm' type='text' name='state' placeholder='State/Province*' />
                        <input className='internInputForm' type='number' name='postalCode' placeholder='Zip/Postal Code*' />
                        <input className='internInputForm' type='text' name='country' placeholder='Country*' />
                        <label htmlFor='_interest' className='d-block mb-3 fw-semibold text-uppercase InternLabel'>Internship Position of Interest</label>
                        <select name='interest' id='_interest' className='internSelectForm'>
                            <option value="" selected>—Please choose an option—</option>
                            <option value="Front End Developer">Front End Developer</option>
                            <option value="Back End Developer">Back End Developer</option>
                            <option value="Full Stack Developer">Full Stack Developer</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Mobile App Development">Digital Marketing</option>
                            <option value="Web App Development">Web App Development</option>
                        </select>
                        <ReCAPTCHA className='mb-3 reCaptcha' sitekey='siteKey' />
                        <button type='submit' className='subMit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default InternComp2
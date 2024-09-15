import React from 'react'
import './AboutProfile.css'

const AboutProfile = () => {
    return (
        <>
            <div className='profile_Container'>
                <div className='profile_Holder d-flex flex-column align-items-start justify-content-center gap-4'>
                    <span className='cTertiary fs-6 fw-bold text-uppercase' data-aos="fade-up">Company Profile</span>
                    <span className='cSecondary lh-1 fs-1 fw-semibold' data-aos="fade-up">Welcome to Hubsem Software Solutions</span>
                    <p className='lineHeight' data-aos="fade-up">Hubsem is a web development company, started in the year of 2020 located in chennai. We are a team of experts in the core areas of programming, Web Development, Mobile App Development, Digital Marketing, and Business Applications. Our Expertise supports you from creating powerful and engaging application/ website to reach out to your audience via digital marketing and support you in each of the phases of business.</p>
                    <p className='lineHeight' data-aos="fade-up">We create a simple, corporate, affordable, effective, and manageable website with our dedicated team of experts in the web development sectors. Our team is proficient to deliver quick and quality solutions. We offer creative and innovative solutions to our clients through a process that is the most developed and effective means of conducting business. We provide solutions for our clients to better serve their customers, create new products and services, become a full functioning operation, streamlining operations, and pulling all areas together to create a smooth success.</p>
                </div>
            </div>
        </>
    )
}

export default AboutProfile
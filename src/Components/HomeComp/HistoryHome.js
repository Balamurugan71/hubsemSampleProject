import React from 'react'
import './HistoryHome.css'
// import historyData from '../../utils/HomeHstryData.json'
import HistoryImage from '../../assets/Home-img-2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import Button from '../Buttons/Button'

const HistoryHome = () => {
    return (
        <>
            <div className='py-5'>
                <div className='container-xxl d-flex flex-xl-row flex-column-reverse align-items-xl-center justify-content-xl-center gap-5 px-4 py-5'>
                    <img className='image-fluid object-contain historyImg' src={HistoryImage} alt='HistoryImage' />
                    <div className='d-flex flex-column align-items-start justify-content-center gap-4'>
                        <span className='cTertiary fs-6 fw-bold'>WELCOME TO HUBSEM SOLUTIONS</span>
                        <span className='cSecondary lh-1 fs-1 fw-semibold'>Innovative IT Services for Seamless Business Operations</span>
                        <p className='lineHeight mb-3'>We are dedicated to providing comprehensive and reliable IT solutions to help businesses thrive in the digital age. Our team of experts specializes in a wide range of IT services, ensuring that we can meet all your technology needs. We believe that technology should be a powerful tool that enhances your business operations. With our IT services, we aim to empower organizations by leveraging cutting-edge technology to drive growth, increase efficiency, and improve overall productivity.</p>
                        {/* {historyData.map((data, index) => (
                            <div key={index} className='d-flex flex-column align-items-start justify-content-center gap-3 borderHstry'>
                                <div>
                                    <FontAwesomeIcon icon={data.icon} />
                                    <h5>{data.title}</h5>
                                </div>
                                <p>{data.description}</p>
                            </div>
                        ))} */}
                        <div className='d-flex flex-row align-items-start justify-content-start gap-3 borderHstry'>
                            <FontAwesomeIcon className='cPrimary fs-1' icon={faDisplay} />
                            <div className='d-flex flex-column align-items-start justify-content-start'>
                                <span className='cPrimary fs-5 fw-bold mb-2'>Customized Solutions</span>
                                <p className='lineHeight mb-2'>Our team works closely with you to design and implement customized solutions that address your immediate needs and align with your long-term vision.</p>
                            </div>
                        </div>
                        <div className='d-flex flex-row align-items-start justify-content-start gap-3 borderHstry mb-4'>
                            <FontAwesomeIcon className='cPrimary fs-1' icon={faLightbulb} />
                            <div className='d-flex flex-column align-items-start justify-content-start'>
                                <span className='cPrimary fs-5 fw-bold mb-2'>Cutting-Edge Technology</span>
                                <p className='lineHeight mb-2'>From implementing robust network infrastructure to developing cutting-edge software applications, we ensure that your business remains technologically competitive and equipped to meet evolving market demands.</p>
                            </div>
                        </div>
                        <Button title='KNOW OUR HISTORY' path='/aboutus' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HistoryHome
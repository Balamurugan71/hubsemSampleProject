import React from 'react'
import './HomeService.css'
import Button from '../Buttons/Button'
import { serviceData } from '../../utils/HomeServiceData'
import { NavLink } from 'react-router-dom'

const HomeService = () => {
    return (
        <>
            <div className='py-5 bgGrey'>
                <div className='container-xxl py-5 px-4 d-flex flex-column align-items-md-start jusitfy-content-center align-items-center gap-3'>
                    <span className='cTertiary fs-6 fw-bold'>HAVE A LOOK AT</span>
                    <div className='homeServiceButton'>
                        <span className='cSecondary lh-1 fs-1 fw-semibold mb-sm-3'>Our Services</span>
                        <Button title='VIEW OUR SERVICES' path='/services' />
                    </div>
                    <div class="row row-cols-1 row-cols-md-3 g-lg-5 g-5 g-md-3 pt-5 px-3">
                        {serviceData.map((data, index) => (
                            <div key={index} className="col">
                                <div className="card h-100 p-3 border border-0">
                                    <NavLink className='h-100' to={data.path}><img src={data.image} className="card-img-top h-100" alt={data.title} /></NavLink>
                                    <div className="card-body">
                                        <h5 className="card-title text-center pb-3"><NavLink className='text-dark text-uppercase' to={data.path}>{data.title}</NavLink></h5>
                                        <p className="card-text text-center fw-normal lineHeight">{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeService
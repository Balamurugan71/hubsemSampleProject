import React from 'react'
import './ServiceCard.css'
import { NavLink } from 'react-router-dom'
import { serviceData } from '../../utils/HomeServiceData'

const ServiceCard = () => {
    return (
        <>
            <div className='service_Card_Container'>
                <div className='service_Card_Holder'>
                    <div class="row row-cols-1 row-cols-md-3 g-lg-5 g-5 g-md-3 pt-5">
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

export default ServiceCard
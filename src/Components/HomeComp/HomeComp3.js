import React from 'react'
import './HomeComp3.css'
import { comp3Data } from '../../utils/Comp3Data'

const HomeComp3 = () => {
    return (
        <>
            <div className='py-5'>
                <div className='container-md d-flex flex-column align-items-center justify-content-center py-5 px-4'>
                    <span className='cSecondary text-center lh-1 fs-1 fw-semibold'>Why We Stand Out?</span>
                    <div class="row row-cols-1 row-cols-md-3 g-lg-4 g-5 g-md-3 pt-5 px-3">
                        {comp3Data.map((data, index) => (
                            <div key={index} className="col">
                                <div className="card infoCard h-100 py-3 pt-4 rounded-5 bgGrey border border-0">
                                    <img src={data.image} className="card-img-top infoImage pb-2" alt={data.title} />
                                    <div className="card-body">
                                        <h5 className="card-title cSecondary textHeadSize text-center pb-2 text-uppercase">{data.title}</h5>
                                        <p className="card-text text-center textParaSize fw-normal lineHeight">{data.description}</p>
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

export default HomeComp3
import React from 'react'
import './SubComp5.css'
import Button from '../Buttons/Button'

const SubComp5 = ({ heading, para, bgc }) => {
    return (
        <>
            <div className='SubComp5_Container' style={{ backgroundColor: `${bgc}` }}>
                <div className='SubComp5_bg'>
                    <div className='SubComp5_overlay'>
                        <div className='SubComp5_Content text-white'>
                            <h3>{heading}</h3>
                            <p>{para}</p>
                            <Button title='GET A QOUTE' path='/contactus' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubComp5
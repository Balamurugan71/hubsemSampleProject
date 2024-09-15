import React from 'react'
import './AboutComp5.css'
import CountUp from 'react-countup'

const AboutComp5 = () => {

    return (
        <>
            <div className='Comp5_Container'>
                <div className='Comp5_Holder' data-aos="zoom-in">
                    <div className='Comp5_Box'>
                        <div className='Comp5_Content'>
                            <span className='Comp5_Number'><CountUp start={0} end={30} delay={11} />+</span>
                            <p className='Comp5_Para'>Projects Completed</p>
                        </div>
                    </div>
                    <div className='Comp5_Box'>
                        <div className='Comp5_Content'>
                            <span className='Comp5_Number'><CountUp start={0} end={12} delay={11} />+</span>
                            <p className='Comp5_Para'>Experienced Developers</p>
                        </div>
                    </div>
                    <div className='Comp5_Box'>
                        <div className='Comp5_Content'>
                            <span className='Comp5_Number'><CountUp start={0} end={20} delay={11} />+</span>
                            <p className='Comp5_Para'>Satisfied clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComp5
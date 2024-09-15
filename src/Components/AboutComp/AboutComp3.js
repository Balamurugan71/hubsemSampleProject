import React from 'react'
import './AboutComp3.css'
import downArrowAbout from '../../assets/arrow-216-48-1.png'
import { COMPDATA } from '../../utils/aboutUSComp'


const AboutComp3 = () => {
    return (
        <>
            <div className='about_Comp3_bg'>
                <div className='about_Comp3_Overlay'>
                    <img className='downArrow' src={downArrowAbout} alt='downArrowAbout' />
                    <div className='aboutCardSection'>
                        {
                            COMPDATA.map((data) => (
                                <div key={data.id} className='cardHolder'>
                                    <div className='cardWrapper'>
                                        <img className='cardAboutIcons' src={data.image} alt='Bullseye' />
                                        <div className='cardContentHolder'>
                                            <h4 className='cardHeader'>{data.title}</h4>
                                            <span className='cardDescribe text-center'>{data.describe}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutComp3
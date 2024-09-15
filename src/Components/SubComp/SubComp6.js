import React from 'react'
import './SubComp6.css'
import Experience from '../../assets/Experience.png'
import Client from '../../assets/Client-Centric.png'
import Innovation from '../../assets/Innovation.png'

const SubComp6 = ({ para1, para2, para3 }) => {
    return (
        <>
            <div className='SubComp6_Container'>
                <div className='SubComp6_Holder'>
                    <div className='SubComp6_Section1'>
                        <h3 className='SubComp6_Heading'>Why We Stand Out?</h3>
                    </div>
                    <div className='SubComp6_Section2'>
                        <div className='SubComp6_Card'>
                            <div className='Card_Section'>
                                <img className='Card_Image' src={Experience} alt='Experience' />
                                <div className='Card_Content'>
                                    <h4 className='Card_Head'>Expertise and Experience</h4>
                                    <p className='Card_para'>{para1}</p>
                                </div>
                            </div>
                        </div>
                        <div className='SubComp6_Card'>
                            <div className='Card_Section'>
                                <img className='Card_Image' src={Client} alt='Client' />
                                <div className='Card_Content'>
                                    <h4 className='Card_Head'>Client-Centric Approach</h4>
                                    <p className='Card_para'>{para2}</p>
                                </div>
                            </div>
                        </div>
                        <div className='SubComp6_Card'>
                            <div className='Card_Section'>
                                <img className='Card_Image' src={Innovation} alt='Innovation' />
                                <div className='Card_Content'>
                                    <h4 className='Card_Head'>Innovative Solutions</h4>
                                    <p className='Card_para'>{para3}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SubComp6
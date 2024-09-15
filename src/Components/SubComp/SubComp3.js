import React from 'react'
import './SubComp3.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const SubComp3 = ({ reason, head1, head2, head3, head4, para1, para2, para3, para4, image }) => {
    return (
        <>
            <div className='SubComp3_Container'>
                <div className='SubComp3_Holder'>
                    <div className='SubComp3_Section1'>
                        <img data-aos="fade-right" className='SubComp3_image' src={image} alt='Sample' />
                    </div>
                    <div className='SubComp3_Section2'>
                        <span className='Section2_Comp1'>Why Invest in {reason}?</span>
                        <ul className='Section2_Comp2'>
                            <li>
                                <FontAwesomeIcon className='Section2_Comp2_icon' icon={faGlobe} />
                                <p className='Section2_Comp2_Para'><b>{head1}</b>{para1}</p>
                            </li>
                            <li>
                                <FontAwesomeIcon className='Section2_Comp2_icon' icon={faGlobe} />
                                <p className='Section2_Comp2_Para'><b>{head2}</b>{para2}</p>
                            </li>
                            <li>
                                <FontAwesomeIcon className='Section2_Comp2_icon' icon={faGlobe} />
                                <p className='Section2_Comp2_Para'><b>{head3}</b>{para3}</p>
                            </li>
                            <li>
                                <FontAwesomeIcon className='Section2_Comp2_icon' icon={faGlobe} />
                                <p className='Section2_Comp2_Para'><b>{head4}</b>{para4}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubComp3
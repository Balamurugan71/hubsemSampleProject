import React from 'react'
import "./SubComp1.css"

const SubComp1 = ({ content1, content2, content3, content4, image }) => {
    return (
        <>
            <div className='SubComp1_Container'>
                <div className='SubComp1_Holder'>
                    <div className='SubComp1_Section1'>
                        <span className='SubComp1_Content1'>{content1}</span>
                        <span className='SubComp1_Content2'>{content2}</span>
                        <span className='SubComp1_Content3'>{content3}</span>
                        <span className='SubComp1_Content4'>{content4}</span>
                    </div>
                    <div className='SubComp1_Section2'>
                        <img data-aos="fade-left" className='SubComp1_image' src={image} alt='Sample' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SubComp1
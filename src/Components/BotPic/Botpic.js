import React from 'react'
import './BotPic.css'
import Botpicture from '../../assets/whatsappBot.jpg'

const Botpic = () => {
    return (
        <>
            <div className='toolTipHolder'>
                <a href='https://api.whatsapp.com/send/?phone=919500590134&text&type=phone_number&app_absent=0'><img className='whatsappBot' alt='tooltip' src={Botpicture} /></a>
                <a className='toolTip' href='https://api.whatsapp.com/send/?phone=919500590134&text&type=phone_number&app_absent=0'>For Enquires</a>
            </div>
        </>
    )
}

export default Botpic
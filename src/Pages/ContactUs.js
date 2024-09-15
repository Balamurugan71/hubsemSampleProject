import React from 'react'
import HeaderSec from '../Section/HeaderSec'
import Footer from '../Components/Footer/Footer'
import Botpic from '../Components/BotPic/Botpic'
import ContactHero from '../Components/ContactComp/ContactHero'
import ContactComp2 from '../Components/ContactComp/ContactComp2'
import ContactComp3 from '../Components/ContactComp/ContactComp3'

const ContactUs = () => {
    return (
        <>
            <HeaderSec />
            <ContactHero />
            <ContactComp2 />
            <ContactComp3 />
            <Footer />
            <Botpic />
        </>
    )
}

export default ContactUs
import React from 'react'
import HeaderSec from '../Section/HeaderSec'
import Footer from '../Components/Footer/Footer'
import Botpic from '../Components/BotPic/Botpic'
import ServiceHero from '../Components/ServiceComp/ServiceHero'
import ServiceCard from '../Components/ServiceComp/ServiceCard'

const Services = () => {
    return (
        <>
            <HeaderSec />
            <ServiceHero />
            <ServiceCard />
            <Footer />
            <Botpic />
        </>
    )
}

export default Services
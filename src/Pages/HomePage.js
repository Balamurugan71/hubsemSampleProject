import React from 'react'
import HeaderSec from '../Section/HeaderSec'
import Footer from '../Components/Footer/Footer'
import Botpic from '../Components/BotPic/Botpic'
import HeroSection from '../Components/HomeComp/HeroSection'
import HistoryHome from '../Components/HomeComp/HistoryHome'
import HomeService from '../Components/HomeComp/HomeService'
import HomeComp3 from '../Components/HomeComp/HomeComp3'
import HomeForm from '../Components/HomeComp/HomeForm'

const HomePage = () => {
    return (
        <>
            <HeaderSec />
            <HeroSection />
            <HistoryHome />
            <HomeService />
            <HomeComp3 />
            <HomeForm />
            <Footer />
            <Botpic />
        </>
    )
}

export default HomePage
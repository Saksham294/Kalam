"use client"
import React, { useEffect } from 'react'
import MiddleSectionStyles from './MiddleSection.module.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton, Typography } from '@mui/material';
import Search from '../Search/Search';
import Card from '../Card/Card';
import { Lato } from 'next/font/google';
import Aos from 'aos';
import 'aos/dist/aos.css';

const lato = Lato({
    subsets: ['latin-ext'],
    weight: ['400', '700'],
})

const MiddleSection = () => {

    useEffect(() => {
        Aos.init();
    })

    return (
        <div className={MiddleSectionStyles.big}>
        <div className={MiddleSectionStyles.middleContainer}>
            <div className={MiddleSectionStyles.header}>
                <div className="moveBtns">
                    <IconButton>
                        <KeyboardArrowLeftIcon className={MiddleSectionStyles.arrowBtn} />
                    </IconButton>
                    <IconButton>
                        <KeyboardArrowRightIcon className={MiddleSectionStyles.arrowBtn} />
                    </IconButton>
                </div>
                <Search />
                <div className='dots'>
                    <IconButton>
                        <MoreHorizIcon sx={{ fontSize: "3vw", marginTop: "3vw" }} className={MiddleSectionStyles.dots} />
                    </IconButton>
                </div>
            </div>
            <div data-aos="fade-left"
                data-aos-offset="150"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                className={MiddleSectionStyles.middle}>
                <img className={MiddleSectionStyles.image} src='albumPhoto.jpeg'></img>
                <button  className={MiddleSectionStyles.listenBtn}>Listen Now</button>
            </div>
            <div className={MiddleSectionStyles.welcome}>
                <div className={MiddleSectionStyles.welcomeHeadings}>
                    <Typography className={lato.className} variant='h4'>Hello, Thomas</Typography>
                    <Typography className={lato.className} variant='h6'>See All</Typography>
                </div>
                <div data-aos="fade-up"
                    data-aos-offset="150"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out"
                    className={MiddleSectionStyles.musicQueue}>
                    <Card heading="Burn" subHeading="Burn" img='burn.jpeg' />
                    <Card heading="Delicate" subHeading="Taylor Swift" img='ts.jpeg' />
                    <Card heading="Art" subHeading="Aoki" img='art.jpeg' />
                    <Card heading="God's Plan" subHeading="Drake" img='drake.jpeg' />
                </div>
                <div className={MiddleSectionStyles.newReleases}>
                    <div data-aos='fade-right' className={MiddleSectionStyles.newReleaseHeading}>
                        <Typography className={lato.className} variant='h4'>New releases for you</Typography>
                        <Typography className={lato.className} variant='h6'>See All</Typography>
                    </div>
                    <div data-aos='fade-left' data-aos-offset='100' data-aos-delay='100' className={MiddleSectionStyles.musicQueue}>
                        <Card heading="Burn" subHeading="Burn" img='burn.jpeg' />
                        <Card heading="Burn" subHeading="Burn" img='burn.jpeg' />
                        <Card heading="Burn" subHeading="Burn" img='burn.jpeg' />
                        <Card heading="Burn" subHeading="Burn" img='burn.jpeg' />
                    </div>
                </div>
            </div>
            <div className={MiddleSectionStyles.newReleases}></div>
        </div>
        </div>
    )
}

export default MiddleSection

import React from 'react'
import MiddleSectionStyles from './MiddleSection.module.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton, Typography } from '@mui/material';
import Search from '../Search/Search';
import Card from '../Card/Card';
import { Lato } from 'next/font/google';

const lato = Lato({
    subsets: ['latin-ext'],
    weight: ['400', '700'],
})

const MiddleSection = () => {
    return (
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
            <div className={MiddleSectionStyles.middle}>
                <img className={MiddleSectionStyles.image} src='albumPhoto.jpeg'></img>
            </div>
            <div className={MiddleSectionStyles.welcome}>
                <div className={MiddleSectionStyles.welcomeHeadings}>
                    <Typography className={lato.className} variant='h4'>Hello, Thomas</Typography>
                    <Typography className={lato.className} variant='h6'>See All</Typography>
                </div>
                <div className={MiddleSectionStyles.musicQueue}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className={MiddleSectionStyles.newReleases}>
                    <div className={MiddleSectionStyles.newReleaseHeading}>
                        <Typography className={lato.className} variant='h4'>New releases for you</Typography>
                        <Typography className={lato.className} variant='h6'>See All</Typography>
                    </div>
                    <div className={MiddleSectionStyles.musicQueue}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </div>
            <div className={MiddleSectionStyles.newReleases}></div>
        </div>
    )
}

export default MiddleSection

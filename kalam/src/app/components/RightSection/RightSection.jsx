"use client"
import React,{useEffect} from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import rightSectionStyles from './RightSection.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Button, Typography } from '@mui/material';
import QueueCard from '../QueueCard/QueueCard';
import { Lato } from 'next/font/google';
import Aos from 'aos';
import 'aos/dist/aos.css';


const lato=Lato({
    subsets: ['latin-ext'],
    weight: ['400', '700'],
})

const RightSection = () => {

    useEffect(() => {
        Aos.init();
    }
    , )
    return (
        <div className={rightSectionStyles.rightSection}>
            <div className={rightSectionStyles.header} >
                <div className={rightSectionStyles.profile}>
                    <AccountCircleIcon sx={{ fontSize: "4vw" }} />
                    <Typography variant='h6' sx={{fontSize:"1.3vw"}} className={rightSectionStyles.nameHeading}>Thomas Head</Typography>
                </div>
                <div className={rightSectionStyles.notification}>
                    <NotificationsNoneIcon sx={{fontSize:"1.8vw"}} />
                    <ArrowDropDownIcon sx={{fontSize:"1.8vw"}}  />
                </div>
            </div>
            <div className="recentlyPlayed">
                <div className={rightSectionStyles.headings}>
                    <Typography variant='h5'>Recently Played</Typography>
                    <Typography variant='h6'>See All</Typography>
                </div>
                <div data-aos="fade-up"
                    data-aos-offset="150"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out">
                <QueueCard image='ts.jpeg' title="Delicate" subtitle="Taylor Swift" duration="3:52" />
                <QueueCard image='drake.jpeg' title="God's Plan" subtitle="Drake" duration="2:22" />
                </div>
             
            </div>
            <div className="myPlaylist">
                <div className={rightSectionStyles.headings}>
                    <Typography variant='h5' className={lato.className}>My Playlist</Typography>
                    <Typography variant='h6' className={lato.className}>See All</Typography>
                </div>
               <div data-aos="fade-up"
                    data-aos-offset="150"
                    data-aos-delay="50"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-out">
               <QueueCard image='burn.jpeg' title="Burn" subtitle="Burn" duration="2:59" />
                <QueueCard image='art.jpeg' title="Art" subtitle="Aoki " duration="1:52" />
               </div>
            </div>
            <Button variant='contained' className={rightSectionStyles.Btn}>
                <Typography variant='h6' className={lato.className} sx={{fontSize:"1vw",fontWeight:"700"}}>
                Create New Playlist
                </Typography>
            </Button>
        </div>
    )
}

export default RightSection

/*

recently played playlist
my playlist
Account


*/
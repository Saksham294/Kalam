import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import rightSectionStyles from './RightSection.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Button, Typography } from '@mui/material';
import QueueCard from '../QueueCard/QueueCard';
import { Lato } from 'next/font/google';

const lato=Lato({
    subsets: ['latin-ext'],
    weight: ['400', '700'],
})

const RightSection = () => {
    return (
        <div className={rightSectionStyles.rightSection}>
            <div className={rightSectionStyles.header} >
                <div className={rightSectionStyles.profile}>
                    <AccountCircleIcon sx={{ fontSize: "50px" }} />
                    <Typography variant='h6' className={rightSectionStyles.nameHeading}>Thomas Head</Typography>
                </div>
                <div className={rightSectionStyles.notification}>
                    <NotificationsNoneIcon fontSize='medium' />
                    <ArrowDropDownIcon fontSize='medium' />
                </div>
            </div>
            <div className="recentlyPlayed">
                <div className={rightSectionStyles.headings}>
                    <Typography variant='h5'>Recently Played</Typography>
                    <Typography variant='h6'>See All</Typography>
                </div>
                <QueueCard />
             
            </div>
            <div className="myPlaylist">
                <div className={rightSectionStyles.headings}>
                    <Typography variant='h5' className={lato.className}>My Playlist</Typography>
                    <Typography variant='h6' className={lato.className}>See All</Typography>
                </div>
                <QueueCard />
            </div>
            <Button variant='contained' className={rightSectionStyles.Btn}>Create New Playlist</Button>
        </div>
    )
}

export default RightSection

/*

recently played playlist
my playlist
Account


*/
import { Typography } from '@mui/material'
import React from 'react'
import QueueCardStyles from './QueueCard.module.css';

const QueueCard = (image,title,subtitle,duration) => {
    return (
        <div className={QueueCardStyles.queueCardContainer}>
            {/*
img
title
subtitle
duration

            */}
        <img className={QueueCardStyles.image} src='https://img.freepik.com/free-vector/abstract-splash-style-cd-cover-design_1394-63.jpg?w=1380&t=st=1700069069~exp=1700069669~hmac=1f7cb7b4ed3e1c7ad018076156130b23f15e854727c74626fcd4da45a0303cd0' ></img>
        <div className={QueueCardStyles.textContainer}>
        <Typography variant='h5'>Title</Typography>
        <Typography variant='h6'>Subtitle </Typography>
        </div>
        <Typography variant='h6'>Duration</Typography>
        </div>
    )
}

export default QueueCard

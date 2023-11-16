import { Typography } from '@mui/material'
import React from 'react'
import QueueCardStyles from './QueueCard.module.css';

const QueueCard = ({image, title, subtitle, duration}) => {
    return (
        <div className={QueueCardStyles.queueCardContainer}>

            <img className={QueueCardStyles.image} src={image} ></img>
            <div className={QueueCardStyles.textContainer}>
                <Typography variant='h5'>{title}</Typography>
                <Typography variant='h6'>{subtitle} </Typography>
            </div>
            <Typography variant='h6'>{duration}</Typography>
        </div>
    )
}

export default QueueCard

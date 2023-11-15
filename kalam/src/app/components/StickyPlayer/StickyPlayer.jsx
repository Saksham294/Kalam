"use client"
import React, { useState } from 'react'
import stickyPlayerStyles from './StickyPlayer.module.css';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import ShareIcon from '@mui/icons-material/Share';
import AirplayIcon from '@mui/icons-material/Airplay';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LoopIcon from '@mui/icons-material/Loop';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { Icon, IconButton, Typography } from '@mui/material';
import { Lato } from 'next/font/google';

const lato = Lato({
    subsets: ['latin-ext'],
    weight: ['400', '700'],
})

const StickyPlayer = () => {

    const [clicked, setClicked] = useState(false);
    const [liked, setLiked] = useState(false);
    const [pause, setPause] = useState(false);
    return (
        <div className={stickyPlayerStyles.stickyContainer}>
            <div className={stickyPlayerStyles.songContainer}>
                <div className={stickyPlayerStyles.headings}>
            <Typography variant='h5' className={lato.className}>Song</Typography>
            <Typography variant='h6' className={lato.className}>Artist</Typography>
                </div>
            <div className={stickyPlayerStyles.songIcons}>
            {
                liked ? <IconButton onClick={() => setLiked(!liked)}>
                    <FavoriteIcon className={stickyPlayerStyles.iconBtn} color='secondary' />
                </IconButton> : <IconButton onClick={() => setLiked(!liked)}>
                    <FavoriteBorderIcon className={stickyPlayerStyles.iconBtn} color='secondary' />
                </IconButton>
            }
            <IconButton>
                <AddBoxIcon className={stickyPlayerStyles.iconBtn} color='secondary' />
            </IconButton>
            </div>
            </div>
            <div className={stickyPlayerStyles.player}>
                <div className={stickyPlayerStyles.playerBtns}>
                <IconButton>
                    <ShuffleIcon className={stickyPlayerStyles.playerBtn} color='secondary' />
                </IconButton>
                <IconButton>
                    <SkipPreviousIcon className={stickyPlayerStyles.playerBtn} color='secondary' />
                </IconButton>
                {
                    pause ? <IconButton onClick={() => setPause(!pause)}>
                        <PauseCircleIcon className={stickyPlayerStyles.pauseBtn} color='secondary' />
                    </IconButton> : <IconButton onClick={() => setPause(!pause)}>
                        <PlayCircleIcon className={stickyPlayerStyles.pauseBtn} color='secondary' />
                    </IconButton>
                }
                <IconButton>
                    <SkipNextIcon className={stickyPlayerStyles.playerBtn} color='secondary' />
                </IconButton>
                <IconButton>
                    <LoopIcon className={stickyPlayerStyles.playerBtn} color='secondary' />
                </IconButton>
                </div>
                <div className={stickyPlayerStyles.playerBar}>

                </div>
            </div>
            <div className={stickyPlayerStyles.misc}>
                {
                    clicked ? <IconButton onClick={() => setClicked(!clicked)}>
                        <VolumeUpIcon className={stickyPlayerStyles.iconBtn} color='secondary' />
                    </IconButton> : <IconButton onClick={() => setClicked(!clicked)}>
                        <VolumeMuteIcon className={stickyPlayerStyles.iconBtn} color='secondary' />
                    </IconButton>
                }
                <IconButton >
                    <KeyboardVoiceIcon className={stickyPlayerStyles.iconBtn} color='secondary' />
                </IconButton>
                <IconButton >
                    <AirplayIcon className={stickyPlayerStyles.iconBtn} color='secondary' />
                </IconButton>
                <IconButton >
                    <ShareIcon className={stickyPlayerStyles.iconBtn} color='secondary' />
                </IconButton>

            </div>

        </div>
    )
}

export default StickyPlayer
/* player color: #0560cb

    background: #0c0b0b

*/

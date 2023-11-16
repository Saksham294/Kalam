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
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const lato = Lato({
    subsets: ['latin-ext'],
    weight: ['400', '700'],
})

const StickyPlayer = () => {

    const [isVis, setIsVis] = useState(false);

    useEffect(() => {
        Aos.init();
        setTimeout(() => {
            setIsVis(true);
        }   , 500);
    })
    const [clicked, setClicked] = useState(false);
    const [liked, setLiked] = useState(false);
    const [pause, setPause] = useState(false);

    const secondary='#f68f45';
    return isVis? (
        <div className={stickyPlayerStyles.stickyContainer}>
            <div className={stickyPlayerStyles.songContainer}>
                <img className={stickyPlayerStyles.songImage} src='ts.jpeg'></img>
                <div className={stickyPlayerStyles.headings}>
            <Typography variant='h5' className={lato.className}>Delicate</Typography>
            <Typography variant='h6' className={lato.className}>Taylor Swift</Typography>
                </div>
            <div className={stickyPlayerStyles.songIcons}>
            {
                liked ? <IconButton onClick={() => setLiked(!liked)}>
                    <FavoriteIcon className={stickyPlayerStyles.iconBtn}/>
                </IconButton> : <IconButton onClick={() => setLiked(!liked)}>
                    <FavoriteBorderIcon className={stickyPlayerStyles.iconBtn}  />
                </IconButton>
            }
            <IconButton>
                <AddBoxIcon className={stickyPlayerStyles.iconBtn}  />
            </IconButton>
            </div>
            </div>
            <div className={stickyPlayerStyles.player}>
                <div className={stickyPlayerStyles.playerBtns}>
                <IconButton>
                    <ShuffleIcon className={stickyPlayerStyles.playerBtn}  />
                </IconButton>
                <IconButton>
                    <SkipPreviousIcon className={stickyPlayerStyles.playerBtn}  />
                </IconButton>
                {
                    pause ? <IconButton onClick={() => setPause(!pause)}>
                        <PauseCircleIcon className={stickyPlayerStyles.pauseBtn} />
                    </IconButton> : <IconButton onClick={() => setPause(!pause)}>
                        <PlayCircleIcon className={stickyPlayerStyles.pauseBtn}  />
                    </IconButton>
                }
                <IconButton>
                    <SkipNextIcon className={stickyPlayerStyles.playerBtn} />
                </IconButton>
                <IconButton>
                    <LoopIcon className={stickyPlayerStyles.playerBtn} />
                </IconButton>
                </div>
                <div className={stickyPlayerStyles.progressBar}>
                <div class={stickyPlayerStyles.progress} id="music-progress"></div>

                </div>
            </div>
            <div className={stickyPlayerStyles.misc}>
                {
                    clicked ? <IconButton onClick={() => setClicked(!clicked)}>
                        <VolumeUpIcon className={stickyPlayerStyles.iconBtn}/>
                    </IconButton> : <IconButton onClick={() => setClicked(!clicked)}>
                        <VolumeMuteIcon className={stickyPlayerStyles.iconBtn}  />
                    </IconButton>
                }
               {/**
                * 
                * add a slider for volume control
                */}

                <div
                    class={stickyPlayerStyles.volume}
                    id="volume-progress"
                >
                    <div class={stickyPlayerStyles.progress} id="volume-progress"></div>

                </div>


                <IconButton >
                    <KeyboardVoiceIcon className={stickyPlayerStyles.iconBtn}  />
                </IconButton>
                <IconButton >
                    <AirplayIcon className={stickyPlayerStyles.iconBtn}  />
                </IconButton>
                <IconButton >
                    <ShareIcon className={stickyPlayerStyles.iconBtn} />
                </IconButton>

            </div>

        </div>
    ):null
}

export default StickyPlayer
/* player color: #0560cb

    background: #0c0b0b

*/

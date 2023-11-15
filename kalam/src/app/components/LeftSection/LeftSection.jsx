import React from 'react';
import { Icon, Typography } from '@mui/material';
import leftSectionStyles from './LeftSection.module.css'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import CollectionsIcon from '@mui/icons-material/Collections';
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FolderIcon from '@mui/icons-material/Folder';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Mukta,Roboto } from 'next/font/google';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';

const mukta=Roboto({
  weight:['400'],
  subsets: ['latin-ext'],
})

function LeftSection() {

  const listItemStyle = {
    paddingRight: '0px', // Adjust the spacing as needed
  };

  const primary='#f68f45';
  return (
    <div className={leftSectionStyles.leftSection}>
      <div className={leftSectionStyles.header}>
        <div className={leftSectionStyles.logo}>
        <img className={leftSectionStyles.image} src='logo.png'></img>
        </div>
        <div className={leftSectionStyles.musicQueue}>
          <QueueMusicIcon fontSize='large'/>
        </div>
        </div>
      <div className={leftSectionStyles.features}>
        <Typography variant='h6' className={mukta.className}>Features</Typography>
      
      <List sx={{paddingLeft:"1vw"}}>
      <ListItem>
        <ListItemIcon>
          <HomeIcon sx={{color:"#f68f45"}}/>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem >
        <ListItemIcon>
          <ExploreIcon  sx={{color:"#f68f45"}}  />
        </ListItemIcon>
        <ListItemText primary="Discover" />
      </ListItem>
      <ListItem >
        <ListItemIcon>
         <CollectionsIcon   sx={{color:"#f68f45"}}  />
        </ListItemIcon>
        <ListItemText primary="Collections" />
      </ListItem>
    </List>
       
     
      </div>
      <div className={leftSectionStyles.library}>
      <Typography variant='h6' className={mukta.className}>Library</Typography>
      <List sx={{paddingLeft:"1vw"}}>
      <ListItem >
        <ListItemIcon>
          <DownloadIcon sx={{color:"#f68f45"}}/>
        </ListItemIcon>
        <ListItemText primary="Download" />
      </ListItem>
      <ListItem >
        <ListItemIcon>
          <FavoriteIcon   sx={{color:"#f68f45"}}  />
        </ListItemIcon>
        <ListItemText primary="Favourites" />
      </ListItem>
      <ListItem >
        <ListItemIcon>
         <FolderIcon   sx={{color:"#f68f45"}}  />
        </ListItemIcon>
        <ListItemText primary="Local Files" />
      </ListItem>
    </List>
       
      </div>

    </div>
  );
}

export default LeftSection;


/**
 * 
 * 
 *  bg color: #101011
 *  font color: grey
 */
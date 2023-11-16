import React from 'react'
import searchStyles from './Search.module.css';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from '@mui/material';

const Search = () => {
    return (
        <div className={searchStyles.searchContainer}>
           <form>
           <IconButton>
          <SearchIcon />
        </IconButton>
        <input className={searchStyles.search} type="text" placeholder="Search" />
           </form>
        </div>
    )
}

export default Search

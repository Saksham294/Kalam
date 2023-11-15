import React from 'react'
import searchStyles from './Search.module.css';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from '@mui/material';

const Search = () => {
    return (
        <div className={searchStyles.searchContainer}>
            <TextField
            className={searchStyles.search}
  label="Search for artists, songs, or albums"
  InputProps={{
    endAdornment: (
      <InputAdornment>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
        </div>
    )
}

export default Search

import React from 'react'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  return (
    <>
    <Box
    width='auto'
    >
    
    <TextField
      id="outlined-search"
      type="search"
      variant="outlined"
      placeholder='Search'
      
      InputProps={{startAdornment: (
        <InputAdornment position="start">
          <SearchIcon sx={{ color: 'white' }} />
        </InputAdornment>
      ),
        sx: {
          color: 'white',
          height: '2.5rem',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'lightgray', 
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'gray', 
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'lightgray', 
          },
        },
      }}
      InputLabelProps={{
        sx: {
          color: 'white', 
        },
      }}
      sx={{
        padding:'1rem',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            height: '2.5rem',
            borderColor: 'lightgray', 
          },
          '&:hover fieldset': {
            borderColor: 'gray', 
          },
          '&.Mui-focused fieldset': {
            borderColor: 'lightgray', 
          },
        },
      }}
    />
    </Box>
    </>
  )
}

export default SearchBar
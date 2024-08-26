import { Paper, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';

const SubCard = (props) => {
  const { title, description, image } = props;
  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        height: {xs:'300px',md:'auto'},
        width: '90%',
        bgcolor: '#E9ECEF',
        color: '#343A40',
        borderRadius: '10px',
        ":hover": {
          bgcolor: '#DEE2E6',
          cursor: 'pointer'
        }
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        width: '100%', 
        overflow: 'hidden',
        borderRadius: '10px'
      }}>
        <img 
          src={image} 
          alt="img" 
          style={{ 
            width: '100%', 
            height: 'auto',
            objectFit: 'cover' 
          }} 
        />
      </Box>
      <Typography variant='h6' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        {title}
      </Typography>
      <Typography variant='body2' sx={{ padding: 1 }}>
        {description}
      </Typography>
    </Paper>
  );
};

export default SubCard;

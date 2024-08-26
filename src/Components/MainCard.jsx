import * as React from 'react';
import { Box, Paper, Typography } from '@mui/material';
export default function MainCard(props) {
  const { title, date, description, image } = props;
  return (
    <>
    <Paper sx={{
      maxWidth: {
        xs: 500, sm: 800, md: 1100
      },
      
    }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          overflow: 'hidden',
          borderRadius: '10px',
          maxHeight: 300,
          maxWidth: { xs: 500, sm: 800, md: 1100 },
        }}
      >
        <img
          src={image}
          alt="News"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover'
          }}
        />

      </Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          fontFamily:'poppons'
        }}
      >
        {title.toUpperCase()}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          textAlign: 'start',
          padding: '10px',
        }}
      >
        <Typography
          variant='body2'
          sx={{ color: 'text.secondary', alignSelf: 'flex-end' }}
        >
          {date}
        </Typography>
        <Typography variant='p' sx={{ alignSelf: 'flex-start' }}>
          {description}
        </Typography>
      </Box>
    </Paper>
    </>
  );
  
}

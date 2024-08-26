import React, { useEffect } from 'react'
import './Hero.css'
import { Box, Typography,Grid } from '@mui/material'
import MainCard from './MainCard'
import SubCard from './SubCard'
import { MainObjects, SubObjects } from '../assets/utils/constants/index.js'
import MainSubCard from './MainSubCard.jsx'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      '.hero-mainCard',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power1.out',
      }
    ),gsap.fromTo('.hero-subCard', { opacity: 0, y: 100 },
       {opacity: 1, y: 0,
         duration: 1,
          ease: 'power1.out',
        scrollTrigger: {
          trigger: '.hero-subCard',
          start: 'top bottom',
        }
        });
  },
   []);

  return (
    <>
      <Typography
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          minHeight: '100vh',
          marginTop: '10vh',
          marginLeft: '1vh',
          justifyContent: 'space-evenly',
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Box className='hero-mainCard'
          sx={{ width: '80%' }}
        >
          <Typography sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2
          }}>{
              MainObjects.map((item) => {
                return (
                  <MainCard className='mainCard-objects'
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    date={item.date}
                    image={item.image}
                    subText={item.subText}
                    description={item.description}
                  />
                );
              })
            }
          </Typography>
          <MainSubCard />
          <Typography>

          </Typography>
        </Box>
        <Box
          className="hero-subCard"
          sx={{ width: { xs: '100%', md: '20%' }, marginTop: { xs: '10vh', md: '0' } }}
        >
          <Grid
            container
            spacing={2} 
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {SubObjects.map((item) => (
              <Grid item xs={6} md={12} key={item.id}>
                <SubCard
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Typography>

    </>
  )
}

export default Hero
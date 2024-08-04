import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/hero_banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '50px'}
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#64D7D6" fontWeight="600px" fontSize="26px">
          GymBuddy
      </Typography>
      <Typography 
        fontWeight={700}
        sx={{
          fontSize: {lg: '44px', xs: "40px"}
        }}
        mb="23px"
        mt="30px"
      >
         Elevate Your Workout, <br /> Elevate Your Life
      </Typography>
      <Typography
        fontSize="22px"
        lineHeight="35px"
        mb={4}
      >
         Check out the most effective exercises
      </Typography>
      <Button 
        variant='contained'
        /* color= 'error' */
        href="#exercises"
        sx={{
          backgroundColor: '#64D7D6',
          padding: '10px'
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#64D7D6"
        sx={{
          opacity: 0.1,
          display: {lg: 'block', xs: 'none'}
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='hero-banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner

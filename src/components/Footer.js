import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/GymBuddyLogo-1-NoBG.png';


const Footer = () => {
  return (
    <Box
      mt="80px"
      bgcolor="#fff3f4"
    >
      <Stack
        gap="40px"
        alignItems="center"
        px="40px"
        pt="24px"
      >
        <img src={Logo} width="200px" height="40px" alt='Logo' className='footer-img' />
        <Typography variant='h5' pb="40px" mt="20px" alignItems='center' justifyContent='center' justifyItems='center' textAlign='center'>
            Created with patience by <br /> Gregory Alexandrou <br /> alexandrougrigorios@gmail.com
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer

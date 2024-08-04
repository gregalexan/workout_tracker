import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/GymBuddyLogo.png';


const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{gap: {sm: '122px', xs: '40px'}, mt: {sm: '32px', xs: '32px'}, justifyContent: 'none'}}
      px="20px"
    >
      <Link to="/">
        <img src={Logo} alt="Logo" style={{width: '80px', height: '80px', marginLeft: {lg: '100px', sm: '80px'}}}/>
      </Link>
      <Stack 
        direction="row"
        gap="40px"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #64D7D6'}}>Home</Link>
        <a href="#exercises" style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar

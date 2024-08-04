import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBar from '../components/HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box
        sx={{
            mt: {lg: '100px', xs: '0'}
        }}
    >
      <Typography variant='h3' mb={5}>
        Exercises that target the <span style={{color: '#64D7D6'}}>same muscle group</span>
      </Typography>
      <Stack
        direction='row'
        sx={{
            p: '2',
            position: 'relative'
        }}
      >
       {targetMuscleExercises.length !== 0
       ? <HorizontalScrollBar data={targetMuscleExercises}/>
       : <Loader />
       }
    </Stack>
    <Typography variant='h3' mb={5}>
        Exercises that use the <span style={{color: '#64D7D6'}}>same equipment</span>
      </Typography>
      <Stack
        direction='row'
        sx={{
            p: '2',
            position: 'relative'
        }}
      >
       {equipmentExercises.length !== 0
       ? <HorizontalScrollBar data={equipmentExercises}/>
       : <Loader />
       }
    </Stack>
    </Box>
  )
}

export default SimilarExercises

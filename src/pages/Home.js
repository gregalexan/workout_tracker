import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';


const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setbodyPart] = useState('all');
  return (
    <Box>
        <HeroBanner />
        <SearchExercises 
            setExercises={setExercises} 
            bodyPart={bodyPart} 
            setBodyPart={setbodyPart}
        />
        <Exercises
            setExercises={setExercises}
            exercises={exercises}
            bodyPart={bodyPart} 
        />

    </Box>
  )
}

export default Home

import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Styled component with sliding animation
const BlurredBox = styled(Box)(({ theme, animate }) => ({
  position: 'absolute',
  top: '20%',
  left: '10%',
  width: '80%',
  padding: theme.spacing(4),
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
  backdropFilter: 'blur(10px)', // Blur effect
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: theme.shape.borderRadius,
  transform: animate ? 'translateX(0)' : 'translateX(-100%)', // Animate based on state
  transition: 'transform 1s', // Smooth transition
}));

const BlurredBoxComponent = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation on mount
  }, []);

  return (
    <BlurredBox animate={animate}>
      <Typography variant="h4" component="div">
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1" component="div">
        Here you can find information about my education, work experience, and projects.
      </Typography>
    </BlurredBox>
  );
};

export default BlurredBoxComponent;

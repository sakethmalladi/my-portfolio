import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import myPic from '../assets/my-pic.jpg'; // Ensure the correct path

// Container for both image and text with sliding animation
const SlidingContainer = styled(Box)(({ theme, animate }) => ({
  position: 'absolute',
  top: '50%', // Center vertically
  left: '50%', // Start slightly off-center to the right
  transform: 'translate(-50%, -50%)', // Center it precisely
  width: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  opacity: 0, // Start invisible
  animation: animate ? 'slideIn 1.5s forwards' : 'none', // Slide in animation for both image and text
  '@keyframes slideIn': {
    '0%': {
      transform: 'translateX(100%)', // Start off-screen to the right
      opacity: 0,
    },
    '100%': {
      transform: 'translateX(0)', // End at the center
      opacity: 1,
    },
  },
}));

// Styled Image Component
const Image = styled(Box)(({ theme }) => ({
  width: '200px', // Fixed width for the image
  height: '200px', // Fixed height for the image
  backgroundImage: `url(${myPic})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  marginBottom: theme.spacing(2),
}));

// Styled Text Component
const Text = styled(Typography)(({ theme }) => ({
  color: '#fff',
  textAlign: 'center',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
}));

const SlidingImageComponent = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true); // Trigger animation on mount
  }, []);

  return (
    <SlidingContainer animate={animate}>
      <Image />
      <Text variant="h6">
        Hello World, I'm Saketh Malladi!!
      </Text>
    </SlidingContainer>
  );
};

export default SlidingImageComponent;

// src/pages/MyEducation.js
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const HeadingContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper, // Adjust as needed
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3], // Optional: add shadow for a subtle 3D effect
}));

const Heading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(4),
  height: '60vh', // Adjust if needed
}));

const FlipCard = styled(Card)(({ theme }) => ({
  width: '300px',
  height: '200px',
  perspective: '1000px',
  position: 'relative',
}));

const FlipCardInner = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: 'transform 0.6s',
  transformStyle: 'preserve-3d',
  '&:hover': {
    transform: 'rotateY(180deg)',
  },
}));

const FlipCardFront = styled(CardContent)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.background.paper,
  backfaceVisibility: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
}));

const FlipCardBack = styled(CardContent)(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  backfaceVisibility: 'hidden',
  transform: 'rotateY(180deg)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',
}));

const MyEducation = () => {
  return (
    <div>
      <HeadingContainer>
        <Heading variant="h5">My Education</Heading>
      </HeadingContainer>
      <CardContainer>
        <FlipCard>
          <FlipCardInner>
            <FlipCardFront>
              <Typography variant="h5">Bachelor of Engineering</Typography>
              <Typography variant="h6">Computer Science</Typography>
            </FlipCardFront>
            <FlipCardBack>
              <Typography variant="h6">Osmania University</Typography>
              <Typography variant="body1">2017 -2021</Typography>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>
        <FlipCard>
          <FlipCardInner>
            <FlipCardFront>
              <Typography variant="h5">Master of Science</Typography>
              <Typography variant="h6">Computer Science</Typography>
            </FlipCardFront>
            <FlipCardBack>
              <Typography variant="h6">George Mason University</Typography>
              <Typography variant="body1">2022 - 2024</Typography>
            </FlipCardBack>
          </FlipCardInner>
        </FlipCard>
      </CardContainer>
    </div>
  );
};

export default MyEducation;

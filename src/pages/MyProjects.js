// src/pages/MyProjects.js
import React from 'react';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '250px', // Adjust height as needed
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#fff',
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  //color: 'transparent', // Initially transparent text
  backgroundColor: 'transparent', // Initially transparent background
  border: '2px solid transparent', // Initially transparent border
  transition: 'all 0.3s ease', // Smooth transition for animation
  '&:hover': {
    color: '#000', // Text color on hover
    borderColor: '#000', // Border color on hover
    transform: 'scale(1.1)', // Slightly enlarge on hover
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff', // Background color on hover
    zIndex: -1, // Place background below content
    opacity: 0, // Start as invisible
    transition: 'opacity 0.2s ease', // Smooth transition for background
  },
  '&:hover::before': {
    opacity: 0.2, // Show the background on hover with slight transparency
  },
}));

const MyProjects = () => {
  const projects = [
    {
      title: 'My Portfolio',
      description: 'A personal portfolio website showcasing my projects and skills.',
      link: 'https://github.com/sakethmalladi/portfolio', // Replace with your actual link
    },
    {
      title: 'Hellodoc',
      description: 'A healthcare app connecting users with doctors based on location and specialization.',
      link: 'https://github.com/sakethmalladi/Hello-Doc', // Replace with your actual link
    },
    {
      title: 'Multi Linguistic Sentiment Analysis',
      description: 'Sentiment analysis using Natural Language Processing across multiple languages.',
      link: 'https://github.com/sakethmalladi/Multi-linguistic-Sentiment-Analysis-using-NLP', // Replace with your actual link
    },
    {
      title: 'Facial Recognition Attendance System',
      description: 'An attendance system using facial recognition technology.',
      link: 'https://github.com/sakethmalladi/Student-Attendance-System', // Replace with your actual link
    },
    {
      title: 'Password Manager',
      description: 'A password management application developed using C++, OpenSSl, SQLite3.',
      link: 'https://github.com/sakethmalladi/password-manager', // Replace with your actual link
    },
  ];

  return (
    <Box
      sx={{
        height: '90vh', // Adjust based on your layout
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 3, // Padding around the grid
      }}
    >
      <Grid container spacing={5} justifyContent="center" alignItems="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                  {project.description}
                </Typography>
                <AnimatedButton
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Look at the code
                </AnimatedButton>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyProjects;

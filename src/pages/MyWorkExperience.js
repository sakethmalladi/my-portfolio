import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  position: 'relative',
  backgroundColor: '#fff',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover .description': {
    opacity: 1,
  },
  '&:hover .title': {
    opacity: 0,
  },
}));

const CardContentStyled = styled(CardContent)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
  transition: 'opacity 0.3s ease-in-out',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
}));

const Description = styled(Typography)(({ theme }) => ({
  transition: 'opacity 0.3s ease-in-out',
  opacity: 0,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  textAlign: 'center',
}));

const HelloWorldCard = styled(Card)(({ theme }) => ({
  height: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#fff',
  marginTop: theme.spacing(3),
}));

const HelloWorldContent = styled(CardContent)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

const MyExperience = () => {
  const [clickedExperience, setClickedExperience] = useState(null);

  const handleCardClick = (index) => {
    setClickedExperience(experiences[index]);
  };

  const experiences = [
    { title: 'Graduate Teaching Assistant', description: 'George Mason University', 
      role: 'Revamped the examination process for the course CS310 (Data Structures) by testing rigorously on algorithm complexity, data structure selection and Java coding, leading to an improvement in average student performance.Significantly increased the student engagement by implementing interactive learning (teaching real-life examples such as social media networks, maps, etc.), while also guiding them to explore supplementary resources, resulting in a notable enhancement of overall comprehension and understanding of the concepts.' },
    { title: 'Software Engineer', description: 'Cognizant', 
      role: 'Elevated application response time by 30% by leveraging Spring’s asynchronous processing and JPA’s load balancing techniques in the client’s application. resulting in a more reliable and flexible framework.Improved overall fault tolerance through effective integration of optimized REST API’s (Stripe API), enabling the application to be resilient in almost every situation.Reduced resource utilization, increased connection pool efficiency and eliminated connection disruptions by incorporating HikariCP to adeptly manage database connections.' },
    { title: 'Programmer Analyst', description: 'Cognizant', 
      role: 'Increased overall performance of the database system by optimizing SQL scripts, partitioning, normalizing and indexing the database, maintaining data integrity and consistency.Successfully migrated 5+TB of data from on-premises to Azure Cosmos DB using Apache Spark and Java, with zero data loss and minimal downtime, leading to a more efficient and reliable data infrastructure.' }, 
  ];

  return (
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" gutterBottom>
        My Work Experience
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {experiences.map((experience, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard onClick={() => handleCardClick(index)}>
              <CardContentStyled>
                <Title className="title" variant="h6" component="div">
                  {experience.title}
                </Title>
                <Description className="description" variant="body2" component="div">
                  {experience.description}
                </Description>
              </CardContentStyled>
            </StyledCard>
          </Grid>
        ))}
        {clickedExperience && (
          <Grid item xs={12}>
            <HelloWorldCard>
              <HelloWorldContent>
                <Typography variant="body1">{clickedExperience.role}</Typography>
              </HelloWorldContent>
            </HelloWorldCard>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default MyExperience;

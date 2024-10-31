import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import MyEducation from './pages/MyEducation';
import MyWorkExperience from './pages/MyWorkExperience';
import MyProjects from './pages/MyProjects';
import DrawerMenu from './components/DrawerMenu';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './App.css'; // Import the CSS file

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Router>
      <div className="app-content">
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: '#fff' }} // Set the menu icon color to white
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              <Typography 
                variant="h6" 
                component={Link} 
                to="/" 
                sx={{ color: '#fff', textDecoration: 'none' }} // Make "My Portfolio" a link with white color
              >
                My Portfolio
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <DrawerMenu isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/my-education" element={<MyEducation />} />
          <Route path="/my-work-experience" element={<MyWorkExperience />} />
          <Route path="/my-projects" element={<MyProjects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

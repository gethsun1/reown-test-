// src/App.jsx
import React from 'react';
import { Box } from '@mui/material';
import { AppKitProvider } from './config';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';

function App() {
  return (
    <AppKitProvider>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', 
        }}
      >
        {/* Main content container expands */}
        <Box sx={{ flex: 1 }}>
          <LandingPage />
        </Box>
       
        <Footer />
      </Box>
    </AppKitProvider>
  );
}

export default App;

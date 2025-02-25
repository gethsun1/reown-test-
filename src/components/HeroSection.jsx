// src/components/HeroSection.jsx
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import ConnectButton from '../ConnectButton';

const HeroSection = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'secondary.main', py: 10 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Chama DApp
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          Empowering decentralized savings groups with blockchain technology.
        </Typography>
        {/* The ConnectButton is re-used here for the "Get Started" action */}
        <Box sx={{ mt: 4 }}>
          <ConnectButton />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;

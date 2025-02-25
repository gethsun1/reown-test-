// src/components/NavigationBar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import ConnectButton from '../ConnectButton';

const NavigationBar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Chama DApp
        </Typography>
        <ConnectButton />
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

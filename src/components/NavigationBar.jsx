// src/components/NavigationBar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useAccount } from 'wagmi';
import ConnectButton from '../ConnectButton';

const truncateAddress = (address) => {
  if (!address) return '';
  return address.slice(0, 6) + '...' + address.slice(-4);
};

const NavigationBar = () => {
  const { address, isConnected } = useAccount();

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Chama DApp
        </Typography>
        {isConnected ? (
          
          <Button variant="outlined" color="inherit">
            {truncateAddress(address)}
          </Button>
        ) : (
          
          <ConnectButton />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

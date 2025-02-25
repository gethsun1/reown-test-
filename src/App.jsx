// src/App.jsx
import React from 'react';
import { AppKitProvider } from './config';
import ConnectButton from './ConnectButton';

function App() {
  return (
    <AppKitProvider>
      <div style={{ padding: '2rem' }}>
        <h1>My Reown Dapp</h1>
        <ConnectButton />
      </div>
    </AppKitProvider>
  );
}

export default App;

// src/App.jsx
import React from 'react';
import { AppKitProvider } from './config';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <AppKitProvider>
      <LandingPage />
    </AppKitProvider>
  );
}

export default App;

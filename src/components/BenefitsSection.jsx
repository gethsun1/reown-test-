// src/components/BenefitsSection.jsx
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const benefits = [
  { id: 1, title: 'Transparency', description: 'All transactions are recorded on the blockchain.', icon: '🔍' },
  { id: 2, title: 'Security', description: 'Decentralized and secure savings management.', icon: '🔒' },
  { id: 3, title: 'Community Empowerment', description: 'Enhance trust and collaboration among members.', icon: '🤝' },
];

const BenefitsSection = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: 'grey.100' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Discover the Benefits of Chama DApp
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {benefits.map((benefit) => (
          <Grid item xs={12} sm={6} md={4} key={benefit.id}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h3">{benefit.icon}</Typography>
              <Typography variant="h6" gutterBottom>
                {benefit.title}
              </Typography>
              <Typography variant="body1">{benefit.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BenefitsSection;

// src/components/StatsSection.jsx
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const stats = [
  { id: 1, label: 'Total Savings', value: '$1,000,000' },
  { id: 2, label: 'Active Members', value: '5,000' },
  { id: 3, label: 'Weekly Contributions', value: '$50,000' },
  { id: 4, label: 'Growth Rate', value: '15%' },
];

const StatsSection = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Chama DApp Performance
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.id}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6">{stat.label}</Typography>
              <Typography variant="h4">{stat.value}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;

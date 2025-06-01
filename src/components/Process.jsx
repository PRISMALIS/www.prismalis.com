import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import process from '../assets/process.png';

const processSteps = [
  'Assess current assets, gaps and holistic industry outlook.',
  'Strategize based on discoveries and emerging opportunities.',
  'Select appropriate technological tools, solutions and partners.',
  'Implement in an agile manner with minimal business disruption.'
];

export default function Process() {
  return (
    <Box id="process" sx={{ py: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom color="text.primary">
          Our Process
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
          Our process is designed to be flexible and adaptive, allowing us to respond to changing business needs and market conditions.
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1, mb: 4 }}>
          <img src={process} alt="Our Process" style={{ width: '100%', height: 'auto', alignSelf: 'center' }} />
        </Box>
      </Container>
    </Box>
  );
} 
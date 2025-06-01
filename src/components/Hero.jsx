import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import navigate from '../assets/navigate.png';

export default function Hero() {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 10 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography
          variant="h3"
          gutterBottom
          color="text.primary"
          sx={{ mt: -4, mb: 2 }}
        >
          CLARITY. AGILITY. PRECISION. KNOWLEDGE.
        </Typography>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          mb: 4
        }}>
          <img
            src={navigate}
            alt="NAVIGATE THE NOW WITH CONFIDENCE"
            style={{
              height: 200,
              width: 200,
              objectFit: 'contain'
            }}
          />
        </Box>

        <Typography variant="h6" gutterBottom color="text.primary">
          PRISMALIS delivers the digital transformation strategy required for organizational excellence.
        </Typography>

        <Typography variant="body1" gutterBottom color="text.primary" align='justify'>
          <br />Our clients seek a clear, frictionless strategy roadmap to master the digital transformation and stay ahead of the competition. For over two decades, we've built solid bases enabling clients to understand how to approach business through technology.<br /><br />
          Set your company on the right track with the proper technical infrastructure and direction from the beginning. Get "IT budgeting" assistance and know where your investment returns the most value towards strategy and scalability.
          .
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 4 }} href="#services">
          Our Services
        </Button>
      </Container >
    </Box >
  );
}

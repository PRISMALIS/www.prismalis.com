import { Box, Container, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#000000', py: 4, color: '#ffffff' }}>
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography variant="body2" sx={{ mb: 2 }}>
          PRISMALIS is a global technology strategy consulting firm enabling clients to successfully navigate their digital transformation journey.
        </Typography>
        <Typography variant="body2">
          © {new Date().getFullYear()} PRISMALIS. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

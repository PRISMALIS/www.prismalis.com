import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function About() {
  return (
    <Box id="about" sx={{ backgroundColor: '#fafafa', py: 10 }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom color="text.primary">
          About Us
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ mt: 2, lineHeight: 1.6 }}>
          PRISMALIS is a global technology strategy consulting firm with location-independent participants ranging from select graduates to industry experts with over 20 years of experience.
          With an extensive partner network built on high standards and decades of experience in multiple sectors—from IoT gateways to Wall Street investment banks—PRISMALIS works with multinational corporate clients in targeted verticals where domain expertise makes all the difference.
          Additionally, we carry particular expertise in blockchain with POCs delivered for both financial and supply chain applications.
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ mt: 2, lineHeight: 1.6 }}>
          PRISMALIS focuses on growing and established enterprises seeking robust IT strategy and leading-edge digital infrastructure to fully leverage known business strengths and generate new opportunities for lasting growth.
        </Typography>
      </Container>
    </Box>
  );
}

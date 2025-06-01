import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import standards from '../assets/standards.png';

const tableData = [
  {
    title: 'Fractional CTO Services & Advisory',
    description: 'Enhance leadership & make the right decisions to ramp up to digital and innovate at scale.',
    link: 'Learn more...'
  },
  {
    title: 'Enterprise Architecture',
    description: 'Fully align technical infrastructure with strategic direction.',
    link: 'Learn more...'
  },
  {
    title: 'API & Cloud Solution Architecture',
    description: 'Gain insight and control over architecture scope, complexity and required skills',
    link: 'Learn more...'
  },
  {
    title: 'Blockchain Engineering',
    description: 'Implement emerging solutions to leverage cross-asset concepts & frameworks.',
    link: 'Learn more...'
  }
];

export default function Keys() {
  const handleLearnMore = (e) => {
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box id="keys" sx={{ py: 10, backgroundColor: '#fafafa' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            mb: 6,
            color: 'text.primary'
          }}
        >
          KEYS TO DIGITAL TRANSFORMATION
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ mt: 2, pl: 6.25 }}>
              <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
                • Align the right technology with business strategy.
              </Typography>
              <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
                • Pivot to opportunity & business model diversification.
              </Typography>
              <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
                • Build in relevance, adaptability & sustainability.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%'
            }}>
              <img
                src={standards}
                alt="Standards"
                style={{
                  width: 200,
                  height: 200,
                  objectFit: 'contain'
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {tableData.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.title}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <CardContent>
                  <Typography variant="body2" color="text.primary" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
                    {item.description}
                  </Typography>
                  <Button
                    variant="text"
                    color="primary"
                    onClick={handleLearnMore}
                    sx={{
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'rgba(237, 28, 36, 0.08)'
                      }
                    }}
                  >
                    {item.link}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 
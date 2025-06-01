import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BusinessIcon from '@mui/icons-material/Business';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import DataArrayIcon from '@mui/icons-material/DataArray';
import { Box, Card, CardContent, Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import relevance from '../assets/relevance.png';

const services = [
  {
    title: 'Fractional CTO Services & Advisory',
    description: 'Enlist high level IT leadership without committing to C-Suite expansion. Be prudent, informed and decisive while avoiding technical debt accumulation from the start. Tasks may include proposal review, pitch deck development, overall strategy and product guidance. From AI/ML to cloud to applied intelligence, connect with the right ecosystems and partners to quickly evolve into advanced digital solutions for business diversification and growth.',
    icon: <BusinessIcon fontSize="large" color="primary" />
  },
  {
    title: 'Enterprise Architecture',
    description: 'Identify weaknesses, dependencies and key priorities to build technical infrastructure that serves business outcomes. Our vendor agnostic approach leverages it all from performance tuning to partner selection to migration planning and design.',
    icon: <AccountTreeIcon fontSize="large" color="primary" />
  },
  {
    title: 'API & Cloud Solutions Architecture',
    description: 'Bridge the gap between cloud and on-premises applications and allow customers to securely access IT assets. Deliver innovative applications with multi-cloud or hybrid-cloud architectures to improve application development, widen channel access, and enable partners & vendors to use enterprise capabilities.',
    icon: <CloudQueueIcon fontSize="large" color="primary" />
  },
  {
    title: 'Blockchain Engineering',
    description: 'From research to proof of concept to MVP development, implement the best features of top modern frameworks. Overcome challenges involving complexity, speed and cost to fully leverage scalability and distributed computing.',
    icon: <DataArrayIcon fontSize="large" color="primary" />
  }
];

const fullServiceStackItems = [
  'Needs assessments',
  'Functional requirements gathering',
  'Gap analysis',
  'Cloud migration strategies',
  'Technology Lead',
  'Cloud readiness assessments',
  'SDLC',
  'Architecture recommendations',
  'Performance tuning',
  'Modernization and refactoring',
  'API-first approaches',
  'Technical POC',
  'Reference Implementation',
  'Advisory services'
];

export default function Services() {
  return (
    <>
      <Box id="services" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom color="text.primary">
            Our Services
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={3} key={service.title}>
                <Card elevation={3} sx={{ height: '100%' }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    {service.icon}
                    <Typography variant="h6" sx={{ mt: 2 }} color="text.primary">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }} color="text.primary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <Box id="fullService" sx={{ backgroundColor: '#fafafa', py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom color="text.primary">
            Full Service Stack
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
                    Our comprehensive Full Service Stack covers all phases of digital transformation, ensuring end-to-end support and expertise:
                  </Typography>
                  <List>
                    {fullServiceStackItems.map((item) => (
                      <ListItem key={item} disablePadding>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
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
                  src={relevance}
                  alt="Relevance"
                  style={{
                    width: 200,
                    height: 200,
                    objectFit: 'contain'
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

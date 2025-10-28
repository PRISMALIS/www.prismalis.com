import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import logoP from '../assets/logo-p.png';

export default function ContactForm() {
  return (
    <Box id="contact" sx={{ py: 10 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom color="text.primary" sx={{ mb: 4 }}>
          INTERESTED IN HOW PRISMALIS CAN HELP YOUR ORGANIZATION UNLEASH ITS FULL DIGITAL POTENTIAL?
        </Typography>

        <Box
          component="form"
          action="https://formsubmit.co/www-contact-form@prismalis.com"
          method="POST"
          noValidate
          autoComplete="off"
        >
          {/* Honeypot to prevent spam */}
          <input type="text" name="_honey" style={{ display: 'none' }} />

          {/* Enable Captcha */}
          <input type="hidden" name="_captcha" value="true" />

          {/* Redirect after submission */}
          <input type="hidden" name="_next" value={window.location.href} />

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                required
                name="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                required
                type="email"
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company"
                variant="outlined"
                name="company"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                required
                name="message"
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 4 }}>
              <Box
                component="a"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                sx={{ cursor: 'pointer' }}
              >
                <img
                  src={logoP}
                  alt="PRISMALIS"
                  style={{
                    width: 50,
                    height: 50,
                    objectFit: 'contain'
                  }}
                />
              </Box>
              <Typography variant="body2" color="text.primary" sx={{ mt: 2 }}>
                Or email us directly:
              </Typography>
              <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
                For general enquiries: <a href="mailto:contact@prismalis.com" style={{ color: 'inherit', textDecoration: 'none' }}>contact@prismalis.com</a>
              </Typography>
              <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
                For our EUDR/ESPR tools & technical support : <a href="mailto:compliance-dev@prismalis.com" style={{ color: 'inherit', textDecoration: 'none' }}>compliance-dev@prismalis.com</a>
              </Typography>
              <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
                For our digital assets services: <a href="mailto:blockchain@prismalis.com" style={{ color: 'inherit', textDecoration: 'none' }}>blockchain@prismalis.com</a>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

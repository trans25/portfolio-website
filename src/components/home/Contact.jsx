import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Send, WhatsApp, Email, Phone, LocationOn } from '@mui/icons-material';

const Contact = ({
  config,
  handleEmailSend,
  handleInputChange,
  formData,
  isSending,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hi Mashia! I'm ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Typography
            variant="h3"
            sx={{ textAlign: 'center', mb: 2, fontWeight: 700 }}
          >
            Let's Work Together
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
              mb: 8,
              color: 'text.secondary',
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Have a project in mind or just want to connect? Feel free to reach
            out. I'm always open to discussing new opportunities and challenges.
          </Typography>
        </motion.div>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                Get in Touch
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Email sx={{ color: 'primary.main', mr: 2 }} />
                <Typography variant="body1">{config.email}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Phone sx={{ color: 'primary.main', mr: 2 }} />
                <Typography variant="body1">{config.phone}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationOn sx={{ color: 'primary.main', mr: 2 }} />
                <Typography variant="body1">Johannesburg, SA</Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  backgroundColor: 'background.paper',
                  borderRadius: 4,
                  border: '1px solid #e0e0e0',
                }}
              >
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        multiline
                        rows={4}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                        <Button
                          onClick={handleEmailSend}
                          variant="contained"
                          size="large"
                          startIcon={
                            isSending ? (
                              <CircularProgress size={20} color="inherit" />
                            ) : (
                              <Send />
                            )
                          }
                          disabled={isSending}
                          sx={{
                            backgroundColor: 'primary.main',
                            color: 'white',
                            fontWeight: 600,
                            '&:hover': {
                              backgroundColor: 'primary.dark',
                            },
                          }}
                        >
                          {isSending ? 'Sending...' : 'Send Email'}
                        </Button>
                        <Button
                          type="submit"
                          variant="outlined"
                          size="large"
                          startIcon={<WhatsApp />}
                          sx={{
                            borderColor: '#25D366',
                            color: '#25D366',
                            fontWeight: 600,
                            '&:hover': {
                              borderColor: '#128C7E',
                              backgroundColor: 'rgba(37, 211, 102, 0.1)',
                              color: '#128C7E',
                            },
                          }}
                        >
                          WhatsApp
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Avatar,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Download, GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';
import whatsappImage from '../../assets/WhatsApp Image 2025-08-17 at 07.00.39.jpeg';
import cvFile from '../../assets/Elias_Mashia_CV.pdf';

const Hero = ({ config }) => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        background: '#fff',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        color: 'text.primary',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            radial-gradient(circle at 15% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 85% 30%, rgba(168, 85, 247, 0.05) 0%, transparent 40%)
          `,
          animation: 'float 20s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: 2,
                  px: 3,
                  py: 1,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    backgroundColor: '#22c55e',
                    mr: 2,
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.5 },
                    },
                  }}
                />
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: '#16a34a',
                  }}
                >
                  AVAILABLE FOR OPPORTUNITIES
                </Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  color: 'text.primary',
                }}
              >
                Mashia Elias
              </Typography>

              <Typography
                variant="h5"
                sx={{ fontWeight: 300, mb: 3, color: 'text.secondary' }}
              >
                Software Developer & Consultant
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  maxWidth: 600,
                  lineHeight: 1.7,
                  color: 'text.secondary',
                }}
              >
                A curious and adaptable Software Developer with over 2 years of
                hands-on experience in building robust web, mobile, and backend
                systems. Specialized in .NET Core, React, Vue.js, and cloud
                technologies, with recent consulting experience delivering
                high-impact solutions.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Download />}
                    href={cvFile}
                    download="Elias_Mashia_CV.pdf"
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 600,
                      boxShadow: '0 4px 16px rgba(37, 99, 235, 0.2)',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                        boxShadow: '0 6px 24px rgba(37, 99, 235, 0.3)',
                      },
                    }}
                  >
                    Download CV
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<WhatsApp />}
                    href={`https://wa.me/${config.whatsappNumber}?text=Hi%20Mashia!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20opportunities.`}
                    target="_blank"
                    sx={{
                      borderColor: '#25D366',
                      color: '#25D366',
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
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
                </motion.div>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Box sx={{ textAlign: 'center', position: 'relative' }}>
                <Box
                  sx={{
                    width: { xs: 250, md: 350 },
                    height: { xs: 250, md: 350 },
                    borderRadius: '50%',
                    background:
                      'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)',
                    border: '2px solid rgba(0,0,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 2,
                    position: 'relative',
                  }}
                >
                  <Avatar
                    src={whatsappImage}
                    alt="Mashia Elias"
                    sx={{
                      width: { xs: 230, md: 330 },
                      height: { xs: 230, md: 330 },
                      border: '3px solid white',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    mt: 2,
                  }}
                >
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                    <IconButton
                      component="a"
                      href={config.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      sx={{
                        color: 'text.secondary',
                        backgroundColor: 'rgba(0,0,0,0.03)',
                        border: '1px solid rgba(0,0,0,0.05)',
                        '&:hover': {
                          backgroundColor: 'rgba(0,0,0,0.05)',
                          transform: 'translateY(-2px)',
                          color: 'primary.main',
                        },
                      }}
                    >
                      <GitHub />
                    </IconButton>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1, rotate: -5 }}>
                    <IconButton
                      component="a"
                      href={config.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      sx={{
                        color: 'text.secondary',
                        backgroundColor: 'rgba(0,0,0,0.03)',
                        border: '1px solid rgba(0,0,0,0.05)',
                        '&:hover': {
                          backgroundColor: 'rgba(0,0,0,0.05)',
                          transform: 'translateY(-2px)',
                          color: 'primary.main',
                        },
                      }}
                    >
                      <LinkedIn />
                    </IconButton>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;

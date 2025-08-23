import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CardActions,
} from '@mui/material';
import { motion } from 'framer-motion';
import { School } from '@mui/icons-material';

const certifications = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'In Progress',
    credentialUrl: '#',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'In Progress',
    credentialUrl: '#',
  },
  {
    title: 'Hackathon Winner - 1st Place',
    issuer: 'University Hackathon',
    date: 'October 2022',
    credentialUrl: '/Elias_Certificate.pdf',
  },
];

const Certifications = () => {
  return (
    <Box sx={{ py: 10 }} id="certifications">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          align="center"
          sx={{ fontWeight: 700, color: 'text.primary' }}
        >
          Certifications
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 6, color: 'text.secondary' }}
        >
          My professional certifications and credentials.
        </Typography>
      </motion.div>
      <Grid container spacing={4}>
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 4,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
                  },
                  backgroundColor: 'background.paper',
                }}
              >
                <CardContent>
                  <School sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 600, color: 'text.primary' }}
                  >
                    {cert.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5, color: 'text.secondary' }}>
                    {cert.issuer}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {cert.date}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    disabled={cert.date === 'In Progress'}
                    sx={{
                      color: 'primary.main',
                      textTransform: 'none',
                      fontWeight: 600,
                    }}
                  >
                    {cert.date === 'In Progress'
                      ? 'In Progress'
                      : 'Show Credential'}
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Certifications;
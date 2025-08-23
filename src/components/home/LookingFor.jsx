import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import { BusinessCenter, Search, GroupWork } from '@mui/icons-material';

const LookingFor = ({ lookingFor }) => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontWeight: 700,
              color: 'text.primary',
            }}
          >
            What I'm Looking For
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
            Actively seeking opportunities that align with my skills and career
            goals, where I can contribute to meaningful projects and continue to
            grow as a developer.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {lookingFor.map((role, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <Card
                  sx={{
                    height: '100%',
                    minHeight: 300,
                    background: 'background.default',
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {index === 0 && (
                        <BusinessCenter
                          sx={{ fontSize: 28, color: 'primary.main', mr: 1.5 }}
                        />
                      )}
                      {index === 1 && (
                        <Search
                          sx={{ fontSize: 28, color: 'secondary.main', mr: 1.5 }}
                        />
                      )}
                      {index === 2 && (
                        <GroupWork
                          sx={{ fontSize: 28, color: 'success.main', mr: 1.5 }}
                        />
                      )}
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, color: 'text.primary' }}
                      >
                        {role.title}
                      </Typography>
                    </Box>
                    <Chip
                      label={role.type}
                      size="small"
                      sx={{
                        backgroundColor: 'primary.light',
                        color: 'primary.dark',
                        fontWeight: 500,
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        lineHeight: 1.6,
                      }}
                    >
                      {role.description}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: 'text.primary',
                        display: 'block',
                      }}
                    >
                      Key Technologies:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {role.technologies.map((tech, idx) => (
                        <Chip
                          key={idx}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'action.hover',
                            color: 'text.secondary',
                            fontWeight: 500,
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default LookingFor;

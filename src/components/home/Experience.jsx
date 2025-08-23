import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Work, CheckCircle } from '@mui/icons-material';

const Experience = ({ experience }) => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
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
            Professional Experience
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
            A timeline of my career, highlighting key roles, responsibilities,
            and achievements in the software development industry.
          </Typography>
        </motion.div>

        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              top: 0,
              bottom: 0,
              width: '4px',
              backgroundColor: 'divider',
              transform: { md: 'translateX(-50%)' },
            }}
          />
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <Grid
                container
                direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                justifyContent="center"
                alignItems="center"
                sx={{ mb: 8 }}
              >
                <Grid item xs={12} md={5}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 4,
                      background: 'background.paper',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '20px',
                        left: index % 2 === 0 ? 'auto' : '-20px',
                        right: index % 2 === 0 ? '-20px' : 'auto',
                        borderWidth: '10px',
                        borderStyle: 'solid',
                        borderColor: `transparent transparent transparent ${
                          index % 2 === 0 ? 'background.paper' : 'transparent'
                        }`,
                        borderLeftColor:
                          index % 2 !== 0 ? 'background.paper' : 'transparent',
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: 'text.primary' }}
                    >
                      {job.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: 'primary.main', mb: 1, fontWeight: 500 }}
                    >
                      {job.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', mb: 2 }}
                    >
                      {job.description}
                    </Typography>
                    <List dense>
                      {job.achievements.map((achievement, i) => (
                        <ListItem key={i} disableGutters>
                          <ListItemIcon sx={{ minWidth: '32px' }}>
                            <CheckCircle
                              sx={{ color: '#22c55e', fontSize: 18 }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={achievement}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: 'text.secondary',
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={2} sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      display: 'inline-block',
                      p: 1,
                      backgroundColor: 'background.default',
                      borderRadius: '50%',
                      border: '4px solid',
                      borderColor: 'divider',
                      zIndex: 1,
                      position: 'relative',
                    }}
                  >
                    <Work sx={{ color: 'primary.main', fontSize: 32 }} />
                  </Box>
                  <Typography
                    variant="caption"
                    sx={{ display: 'block', mt: 1, color: 'text.secondary' }}
                  >
                    {job.period}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={5} />
              </Grid>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Experience;

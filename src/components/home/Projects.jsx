import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import { Launch } from '@mui/icons-material';

const Projects = ({ projects }) => {
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
            Key Projects
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
            A selection of projects that demonstrate my skills in full-stack
            development, problem-solving, and creating user-centric
            applications.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
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
                    minHeight: 320,
                    background: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease',
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 4,
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: 'text.primary', mb: 1 }}
                    >
                      {project.title}
                    </Typography>
                    <Chip
                      label={project.status}
                      size="small"
                      sx={{
                        backgroundColor:
                          project.status === 'In Development'
                            ? 'warning.light'
                            : 'primary.light',
                        color:
                          project.status === 'In Development'
                            ? 'warning.dark'
                            : 'primary.dark',
                        fontWeight: 500,
                        mb: 2,
                        alignSelf: 'flex-start',
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        mb: 3,
                        lineHeight: 1.6,
                        flexGrow: 1,
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 600,
                          color: 'text.primary',
                          display: 'block',
                          mb: 1,
                        }}
                      >
                        Technologies:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            sx={{
                              backgroundColor: 'action.hover',
                              color: 'text.secondary',
                              fontWeight: 500,
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                    {project.github && (
                      <Link
                        href={`https://${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          color: 'primary.main',
                          fontWeight: 600,
                          textDecoration: 'none',
                          '&:hover': {
                            textDecoration: 'underline',
                          },
                        }}
                      >
                        View on GitHub <Launch sx={{ fontSize: 16, ml: 0.5 }} />
                      </Link>
                    )}
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

export default Projects;

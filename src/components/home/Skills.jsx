import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';

const Skills = ({ skillCategories }) => {
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
            Technical Skills
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
            A versatile skill set covering frontend, backend, cloud, and
            database technologies, enabling the development of robust and
            scalable applications.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
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
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 4,
                    height: '100%',
                    background: 'background.default',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    {category.icon}
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: 'text.primary', ml: 2 }}
                    >
                      {category.title}
                    </Typography>
                  </Box>
                  <Box>
                    {category.skills.map((skill, skillIndex) => (
                      <Box key={skillIndex} sx={{ mb: 2 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 0.5,
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 500, color: 'text.secondary' }}
                          >
                            {skill.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ fontWeight: 500, color: skill.color }}
                          >
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'divider',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: skill.color,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;

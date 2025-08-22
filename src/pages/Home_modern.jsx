import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip,
  Avatar,
  LinearProgress,
  Paper,
  TextField,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
  useTheme,
  useMediaQuery,
  Backdrop,
  Fab,
} from '@mui/material';
import {
  Download,
  Code,
  Email,
  Phone,
  Send,
  LocationOn,
  CalendarToday,
  GitHub,
  LinkedIn,
  KeyboardArrowDown,
  Storage,
  Web,
  Smartphone,
  Rocket,
  Speed,
  AutoFixHigh,
  Star,
} from '@mui/icons-material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { scrollYProgress } = useScroll();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const getSkillIcon = (skillName) => {
    if (skillName.includes('Database') || skillName.includes('SQL') || skillName.includes('MongoDB')) {
      return <Storage sx={{ mr: 1, color: 'primary.main', fontSize: 18 }} />;
    }
    if (skillName.includes('HTML') || skillName.includes('CSS') || skillName.includes('Bootstrap')) {
      return <Web sx={{ mr: 1, color: 'primary.main', fontSize: 18 }} />;
    }
    if (skillName.includes('React Native') || skillName.includes('Mobile')) {
      return <Smartphone sx={{ mr: 1, color: 'primary.main', fontSize: 18 }} />;
    }
    return <Code sx={{ mr: 1, color: 'primary.main', fontSize: 18 }} />;
  };

  const skills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'CSS/SCSS & Tailwind', level: 95 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'C#/.NET Core', level: 80 },
    { name: 'Vue.js & Angular', level: 75 },
    { name: 'MongoDB & SQL', level: 80 },
    { name: 'Git & DevOps', level: 85 },
  ];

  const projects = [
    {
      title: 'Modern E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and advanced animations. Features real-time updates, payment integration, and responsive design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Framer Motion'],
      githubUrl: 'https://github.com/trans25/inventory-management',
      featured: true
    },
    {
      title: 'AI-Powered Dashboard',
      description: 'Interactive dashboard with data visualization, real-time analytics, and machine learning insights for business intelligence.',
      technologies: ['Vue.js', 'Python', 'D3.js', 'TensorFlow'],
      githubUrl: 'https://github.com',
      featured: false
    }
  ];

  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Muntumi Technology',
      location: 'South Africa',
      period: 'Jan 2024 - Present',
      description: [
        '🚀 Reduced application load time by 65% through advanced optimization techniques',
        '✨ Built responsive UIs serving 50,000+ users with 99.9% uptime',
        '🎨 Implemented modern design systems using Material-UI and Tailwind CSS',
        '⚡ Optimized React applications achieving 95+ Lighthouse scores',
        '🔧 Integrated APIs and third-party services for seamless user experiences',
        '📱 Developed cross-platform mobile-responsive applications',
        '🛠️ Mentored junior developers in modern frontend best practices'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Informatics Community Engagement Project',
      location: 'South Africa',
      period: 'Jun 2023 - Dec 2023',
      description: [
        '🎯 Collaborated with design teams to create pixel-perfect interfaces',
        '🔄 Implemented Agile methodologies for faster delivery cycles',
        '🧪 Built comprehensive testing suites with Jest and Cypress',
        '📈 Improved user engagement by 40% through UX enhancements'
      ]
    }
  ];

  const clientProjects = [
    {
      title: 'Council on Higher Education',
      technologies: ['React', 'PHP', 'MySQL'],
      role: 'Full Stack',
      achievements: [
        'Modernized legacy system UI',
        'Improved performance by 60%',
        'Enhanced user experience'
      ],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'National Research Foundation',
      technologies: ['Vue.js', '.NET', 'SQL Server'],
      role: 'Frontend Lead',
      achievements: [
        'Built responsive dashboard',
        'Integrated real-time data',
        'Reduced load times by 50%'
      ],
      gradient: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)'
    },
    {
      title: 'SekPay Platform',
      technologies: ['React', '.NET MVC', 'Redux'],
      role: 'Frontend Specialist',
      achievements: [
        'Created payment interfaces',
        'Implemented security features',
        'Enhanced mobile experience'
      ],
      gradient: 'linear-gradient(135deg, #ed8936 0%, #c05621 100%)'
    },
    {
      title: 'Midvaal Municipality',
      technologies: ['WordPress', 'PHP', 'JavaScript'],
      role: 'Frontend Developer',
      achievements: [
        'Redesigned municipal website',
        'Improved accessibility',
        'Mobile-first approach'
      ],
      gradient: 'linear-gradient(135deg, #9f7aea 0%, #805ad5 100%)'
    },
    {
      title: 'BlakTax Application',
      technologies: ['React Native', '.NET 8', 'PostgreSQL'],
      role: 'Full Stack',
      achievements: [
        'Built mobile & web apps',
        'Real-time synchronization',
        'Advanced animations'
      ],
      gradient: 'linear-gradient(135deg, #4299e1 0%, #3182ce 100%)'
    }
  ];

  return (
    <>
      {/* Loading Screen */}
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: 9999,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
        open={isLoading}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <AutoFixHigh sx={{ fontSize: 80, mb: 2 }} />
            </motion.div>
            <Typography variant="h4" sx={{ fontWeight: 600 }}>
              Crafting Amazing Experiences...
            </Typography>
          </Box>
        </motion.div>
      </Backdrop>

      <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default', overflow: 'hidden' }}>
        <Navbar />
        
        {/* Floating Action Button */}
        <motion.div
          style={{ position: 'fixed', bottom: 30, right: 30, zIndex: 1000 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Fab
            color="primary"
            sx={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              '&:hover': {
                background: 'linear-gradient(135deg, #4f5bd5 0%, #5a3474 100%)',
              },
            }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            <Email />
          </Fab>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Box
            id="home"
            sx={{
              minHeight: '100vh',
              pt: { xs: 12, md: 16 },
              pb: { xs: 8, md: 12 },
              background: `
                radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(102, 126, 234, 0.05) 0%, transparent 50%)
              `,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Container maxWidth="lg">
              <Grid container spacing={6} alignItems="center">
                {/* Left Content */}
                <Grid item xs={12} md={7}>
                  <motion.div variants={itemVariants}>
                    <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                      {/* Status Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                      >
                        <Chip
                          icon={<Star />}
                          label="Available for Hire"
                          color="primary"
                          sx={{
                            mb: 3,
                            fontWeight: 600,
                            background: 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)',
                            color: 'white',
                            animation: 'pulse 2s infinite',
                            '@keyframes pulse': {
                              '0%': { boxShadow: '0 0 0 0 rgba(72, 187, 120, 0.7)' },
                              '70%': { boxShadow: '0 0 0 10px rgba(72, 187, 120, 0)' },
                              '100%': { boxShadow: '0 0 0 0 rgba(72, 187, 120, 0)' },
                            },
                          }}
                        />
                      </motion.div>

                      {/* Main Title */}
                      <Typography variant="h1" sx={{ mb: 2, position: 'relative' }}>
                        Frontend Developer
                        <motion.div
                          style={{
                            position: 'absolute',
                            bottom: -10,
                            left: 0,
                            width: '100%',
                            height: 6,
                            background: 'linear-gradient(135deg, #667eea, #764ba2)',
                            borderRadius: 3,
                          }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 1.2, delay: 0.8 }}
                        />
                      </Typography>

                      <Typography variant="h2" sx={{ mb: 3, color: 'text.primary' }}>
                        Mashia Elias
                      </Typography>

                      <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600 }}>
                        I create stunning, high-performance web applications that users love. 
                        Specialized in React, modern CSS, and delivering exceptional user experiences 
                        that drive business results.
                      </Typography>

                      {/* Action Buttons */}
                      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="contained"
                            size="large"
                            startIcon={<Download />}
                            sx={{ minWidth: 180 }}
                          >
                            Download CV
                          </Button>
                        </motion.div>
                        
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button
                            variant="outlined"
                            size="large"
                            href="#contact"
                            sx={{ minWidth: 180 }}
                          >
                            Let's Connect
                          </Button>
                        </motion.div>
                      </Box>

                      {/* Location & Social */}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
                          <LocationOn sx={{ mr: 1, fontSize: 20 }} />
                          <Typography variant="body1">Johannesburg, SA</Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <IconButton color="primary" component="a" href="https://github.com">
                            <GitHub />
                          </IconButton>
                          <IconButton color="primary" component="a" href="https://linkedin.com">
                            <LinkedIn />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>

                {/* Right Side - Avatar & Stats */}
                <Grid item xs={12} md={5}>
                  <motion.div variants={floatingVariants} animate="animate">
                    <Box sx={{ textAlign: 'center', position: 'relative' }}>
                      {/* Main Avatar */}
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Avatar
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format"
                          alt="Mashia Elias"
                          sx={{
                            width: { xs: 200, md: 280 },
                            height: { xs: 200, md: 280 },
                            mx: 'auto',
                            mb: 4,
                            border: '6px solid white',
                            boxShadow: '0 25px 80px rgba(102, 126, 234, 0.3)',
                            position: 'relative',
                            background: 'linear-gradient(135deg, #667eea, #764ba2)',
                          }}
                        />
                      </motion.div>

                      {/* Floating Tech Icons */}
                      {[
                        { icon: '⚛️', top: '10%', left: '10%', delay: 0 },
                        { icon: '💻', top: '20%', right: '10%', delay: 0.5 },
                        { icon: '🎨', bottom: '30%', left: '0%', delay: 1 },
                        { icon: '🚀', bottom: '20%', right: '0%', delay: 1.5 },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          style={{
                            position: 'absolute',
                            ...item,
                            fontSize: '2rem',
                            zIndex: 1,
                          }}
                          animate={{
                            y: [0, -10, 0],
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: item.delay,
                          }}
                        >
                          <Box
                            sx={{
                              background: 'rgba(255, 255, 255, 0.9)',
                              borderRadius: '50%',
                              width: 50,
                              height: 50,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                            }}
                          >
                            {item.icon}
                          </Box>
                        </motion.div>
                      ))}
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: 30,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <IconButton
                sx={{
                  color: 'primary.main',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    background: 'rgba(255, 255, 255, 0.95)',
                  },
                }}
              >
                <KeyboardArrowDown sx={{ fontSize: 30 }} />
              </IconButton>
            </motion.div>
          </Box>
        </motion.div>

        {/* Skills Section with Enhanced Animations */}
        <Box id="skills" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
                  Frontend Expertise
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                  Specialized in modern frontend technologies with a focus on performance, 
                  user experience, and cutting-edge design.
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {skills.map((skill, index) => (
                  <Grid item xs={12} sm={6} md={6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card
                        sx={{
                          p: 3,
                          height: '100%',
                          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
                          border: '1px solid rgba(102, 126, 234, 0.1)',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          {getSkillIcon(skill.name)}
                          <Typography variant="h6" sx={{ fontWeight: 600, flex: 1 }}>
                            {skill.name}
                          </Typography>
                          <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700 }}>
                            {skill.level}%
                          </Typography>
                        </Box>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: index * 0.1 + 0.5 }}
                        >
                          <LinearProgress
                            variant="determinate"
                            value={skill.level}
                            sx={{
                              height: 12,
                              borderRadius: 6,
                              backgroundColor: 'rgba(102, 126, 234, 0.1)',
                              '& .MuiLinearProgress-bar': {
                                borderRadius: 6,
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                              },
                            }}
                          />
                        </motion.div>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Featured Projects */}
        <Box id="projects" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
                  Featured Projects
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                  Showcase of my latest work demonstrating modern frontend development skills
                </Typography>
              </Box>

              <Grid container spacing={4}>
                {projects.map((project, index) => (
                  <Grid item xs={12} md={project.featured ? 12 : 6} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <ProjectCard {...project} />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ textAlign: 'center', mt: 6 }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    component="a"
                    href="https://github.com"
                    target="_blank"
                    variant="contained"
                    startIcon={<GitHub />}
                    size="large"
                    sx={{
                      background: 'linear-gradient(135deg, #24292e 0%, #1a1e22 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1a1e22 0%, #0d1117 100%)',
                      },
                    }}
                  >
                    View All Projects
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Client Work Highlights */}
        <Box id="achievements" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
                  Client Success Stories
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                  Real-world impact through exceptional frontend development
                </Typography>
              </Box>

              <Grid container spacing={3}>
                {clientProjects.map((project, index) => (
                  <Grid item xs={12} sm={6} lg={2.4} key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -10 }}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          background: project.gradient,
                          color: 'white',
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(255, 255, 255, 0.1)',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                          },
                          '&:hover::before': {
                            opacity: 1,
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                          <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                            {project.title}
                          </Typography>
                          
                          <Box sx={{ mb: 2, flex: 1 }}>
                            {project.technologies.map((tech, techIndex) => (
                              <Chip
                                key={techIndex}
                                label={tech}
                                size="small"
                                sx={{
                                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                  color: 'white',
                                  mr: 0.5,
                                  mb: 0.5,
                                  fontSize: '0.75rem',
                                  fontWeight: 600,
                                }}
                              />
                            ))}
                            <Chip
                              label={project.role}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                                color: 'white',
                                fontWeight: 700,
                                mr: 0.5,
                                mb: 0.5,
                                fontSize: '0.75rem',
                              }}
                            />
                          </Box>

                          <List dense sx={{ p: 0 }}>
                            {project.achievements.map((achievement, achIndex) => (
                              <ListItem key={achIndex} sx={{ px: 0, py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 20 }}>
                                  <Box
                                    sx={{
                                      width: 6,
                                      height: 6,
                                      borderRadius: '50%',
                                      backgroundColor: 'white',
                                    }}
                                  />
                                </ListItemIcon>
                                <ListItemText
                                  primary={achievement}
                                  primaryTypographyProps={{
                                    variant: 'body2',
                                    sx: { fontSize: '0.85rem', lineHeight: 1.4, fontWeight: 500 }
                                  }}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Container>
        </Box>

        {/* Contact Section */}
        <Box id="contact" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#0a0e27', color: 'white' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, color: 'white' }}>
                  Let's Create Something Amazing
                </Typography>
                <Typography variant="h6" sx={{ maxWidth: 600, mx: 'auto', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Ready to bring your vision to life? Let's discuss your next project.
                </Typography>
              </Box>

              <Grid container spacing={6}>
                <Grid item xs={12} lg={6}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4, color: 'white' }}>
                    Get In Touch
                  </Typography>
                  
                  <Box sx={{ space: 3 }}>
                    {[
                      { icon: <Email />, label: 'Email', value: 'mashiaes@gmail.com' },
                      { icon: <Phone />, label: 'Phone', value: '+27 79 478 6621' },
                      { icon: <LocationOn />, label: 'Location', value: 'Johannesburg, South Africa' },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                          <Box
                            sx={{
                              mr: 3,
                              p: 2,
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #667eea, #764ba2)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Box>
                            <Typography variant="body1" sx={{ fontWeight: 600, color: 'white' }}>
                              {item.label}
                            </Typography>
                            <Typography variant="body2" color="rgba(255, 255, 255, 0.8)">
                              {item.value}
                            </Typography>
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </Grid>

                <Grid item xs={12} lg={6}>
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <Paper
                      component="form"
                      onSubmit={handleSubmit}
                      sx={{
                        p: 4,
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: 4,
                      }}
                    >
                      <Box sx={{ space: 3 }}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          sx={{
                            mb: 3,
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                              '&.Mui-focused fieldset': { borderColor: '#667eea' },
                            },
                            '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                          }}
                        />
                        
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          sx={{
                            mb: 3,
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                              '&.Mui-focused fieldset': { borderColor: '#667eea' },
                            },
                            '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                          }}
                        />
                        
                        <TextField
                          fullWidth
                          label="Your Message"
                          name="message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          sx={{
                            mb: 3,
                            '& .MuiOutlinedInput-root': {
                              color: 'white',
                              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                              '&.Mui-focused fieldset': { borderColor: '#667eea' },
                            },
                            '& .MuiInputLabel-root': { color: 'rgba(255, 255, 255, 0.7)' },
                          }}
                        />
                        
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            startIcon={<Send />}
                            size="large"
                            sx={{
                              py: 2,
                              fontSize: '1.1rem',
                              fontWeight: 600,
                              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                              '&:hover': {
                                background: 'linear-gradient(135deg, #4f5bd5 0%, #5a3474 100%)',
                              },
                            }}
                          >
                            Send Message
                          </Button>
                        </motion.div>
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              </Grid>
            </motion.div>
          </Container>
        </Box>

        <Footer />
      </Box>
    </>
  );
};

export default Home;

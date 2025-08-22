import { useState } from 'react';
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
  Divider,
  Link,
  useTheme,
  useMediaQuery,
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
} from '@mui/icons-material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
    { name: 'C#/.NET Core', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js/Express', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'ASP.NET MVC', level: 85 },
    { name: 'Vue.js', level: 75 },
    { name: 'Angular', level: 60 },
    { name: 'SQL Server', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MySQL', level: 75 },
    { name: 'MongoDB', level: 75 },
    { name: 'Azure DevOps', level: 80 },
    { name: 'AWS (Lambda/SQS)', level: 75 },
    { name: 'HTML/CSS/Bootstrap', level: 85 },
    { name: 'Unit Testing (Moq)', level: 70 },
  ];

  const projects = [
    {
      title: 'Inventory Management System',
      description: 'Full-stack inventory management application with user authentication, JWT-based security, and RESTful APIs. Built with Node.js backend and modern frontend technologies.',
      technologies: ['Node.js', 'JavaScript', 'JWT', 'RESTful APIs'],
      githubUrl: 'https://github.com/trans25/inventory-management',
      featured: true
    }
  ];

  const experiences = [
    {
      title: 'Junior Full Stack Developer',
      company: 'Muntumi Technology',
      location: 'South Africa',
      period: 'Jan 2024 - Present',
      description: [
        'Reduced data query latency by 35% by optimizing LINQ queries and backend logic in .NET Core',
        'Improved payment system reliability by delivering secure, modular ASP.NET MVC features used across web/mobile platforms',
        'Enabled asynchronous transaction processing for utility payments via SOAP API integration, increasing system uptime under high load',
        'Boosted transaction speed by 40% by streamlining order processing between backend services and mobile clients',
        'Worked with React and Bootstrap to improve the usability of a vendor-facing platform',
        'Automated product uploads, cutting down manual work by half using automated processes',
        'Decreased deployment overhead by 30% with robust CI/CD pipelines built in Azure DevOps',
        'Implemented serverless AWS Lambda functions triggered via SQS, automating key business processes without managing infrastructure'
      ]
    },
    {
      title: 'Business Analyst Trainee',
      company: 'Informatics Community Engagement Project',
      location: 'South Africa',
      period: 'Jun 2023 - Dec 2023',
      description: [
        'Collaborated with stakeholders to gather and translate business requirements',
        'Authored and executed manual test cases during User Acceptance Testing (UAT)',
        'Supported development teams by clarifying requirements and participating in testing cycles',
        'Gained experience in Agile/Scrum methodologies and team collaboration'
      ]
    }
  ];

  const clientProjects = [
    {
      title: 'Council on Higher Education (CHE)',
      technologies: ['PHP', 'MySQL'],
      role: 'Full Stack',
      achievements: [
        'Automated invoice dispatching and payment reminders',
        'Reduced late payments by 25%',
        'Streamlined accreditation workflow'
      ],
      gradient: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)'
    },
    {
      title: 'National Research Foundation (NRF)',
      technologies: ['.NET', 'SQL Server', 'Vue.js'],
      role: 'Full Stack',
      achievements: [
        'Reduced system downtime by resolving legacy bugs',
        'Improved performance stability',
        'Enhanced CI/CD deployment reliability'
      ],
      gradient: 'linear-gradient(135deg, #388e3c 0%, #66bb6a 100%)'
    },
    {
      title: 'SekPay (sekpay.com)',
      technologies: ['.NET MVC'],
      role: 'Frontend',
      achievements: [
        'Developed payment platform frontend features',
        'Built responsive payment user interface',
        'Enhanced payment user experience'
      ],
      gradient: 'linear-gradient(135deg, #f57c00 0%, #ffb74d 100%)'
    },
    {
      title: 'Midvaal Municipality',
      technologies: ['WordPress', 'PHP'],
      role: 'Frontend',
      achievements: [
        'Improved mobile UX and SEO performance',
        'Enhanced municipal website frontend',
        'Implemented responsive design'
      ],
      gradient: 'linear-gradient(135deg, #7b1fa2 0%, #ba68c8 100%)'
    },
    {
      title: 'BlakTax (blaktax.co.za)',
      technologies: ['.NET 8', 'PostgreSQL', 'React', 'React Native'],
      role: 'Full Stack',
      achievements: [
        'Built admin dashboard with React',
        'Developed mobile app with React Native',
        'Implemented .NET 8 backend with PostgreSQL'
      ],
      gradient: 'linear-gradient(135deg, #3f51b5 0%, #7986cb 100%)'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <Navbar />
      
      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            {/* Profile Avatar */}
            <Avatar
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format"
              alt="Mashia Elias"
              sx={{
                width: { xs: 120, md: 150 },
                height: { xs: 120, md: 150 },
                mx: 'auto',
                mb: 4,
                border: '4px solid white',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              }}
            />

            {/* Hero Title */}
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                background: 'linear-gradient(135deg, #1976d2 0%, #9c27b0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 700,
              }}
            >
              Hi, I'm Mashia Elias
            </Typography>

            {/* Hero Subtitle */}
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{
                mb: 4,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
                fontWeight: 400,
              }}
            >
              Results-driven Software Developer with 2 years experience building and enhancing web applications across 
              backend, frontend, and cloud platforms. Skilled in C#, .NET Core, React, Node.js, and SQL with proven success 
              in optimizing system performance and delivering high-quality features.
            </Typography>

            {/* CTA Buttons */}
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<Download />}
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  borderRadius: 3,
                }}
              >
                Download CV
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#contact"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  borderRadius: 3,
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                  },
                }}
              >
                Get In Touch
              </Button>
            </Box>

            {/* Location */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'text.secondary' }}>
              <LocationOn sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body1">Based in Johannesburg, South Africa</Typography>
            </Box>
          </Box>
        </Container>

        {/* Scroll Indicator */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <IconButton
            sx={{
              animation: 'bounce 2s infinite',
              '@keyframes bounce': {
                '0%, 20%, 53%, 80%, 100%': {
                  transform: 'translateY(0)',
                },
                '40%, 43%': {
                  transform: 'translateY(-30px)',
                },
                '70%': {
                  transform: 'translateY(-15px)',
                },
                '90%': {
                  transform: 'translateY(-4px)',
                },
              },
            }}
          >
            <KeyboardArrowDown sx={{ fontSize: 40, color: 'text.secondary' }} />
          </IconButton>
        </Box>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 600 }}>
              About Me
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              I'm a dedicated developer who loves creating digital solutions that make a difference.
            </Typography>
          </Box>

          <Grid container spacing={6} alignItems="center">
            {/* Journey Text */}
            <Grid item xs={12} lg={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                My Journey
              </Typography>
              <Box sx={{ space: 2 }}>
                <Typography variant="body1" paragraph color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  I discovered my passion for software development during my studies at Tshwane University of Technology, 
                  where I earned my National Diploma in IT: Business Applications. Over the past 2 years, I've been 
                  building and enhancing web applications across backend, frontend, and cloud platforms in the South African tech industry.
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  I specialize in full-stack development with strong expertise in C#, .NET Core, and React. My experience includes 
                  optimizing system performance, automating processes, and delivering high-quality features. I'm skilled at problem-solving, 
                  learning new tools quickly, and collaborating in Agile teams to deliver impactful software solutions.
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  I'm experienced in cloud technologies and DevOps practices, utilizing Azure DevOps for CI/CD pipelines 
                  and AWS Lambda/SQS for serverless architectures. I have proven success in reducing data query latency by 35%, 
                  improving payment system reliability, and decreasing deployment overhead by 30%.
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  I thrive in agile environments and have successfully delivered projects for major South African organizations 
                  including the Council on Higher Education, National Research Foundation, Midvaal Municipality, SekPay, and BlakTax.
                </Typography>
              </Box>
            </Grid>

            {/* Skills */}
            <Grid item xs={12} lg={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Skills & Technologies
              </Typography>
              <Box sx={{ space: 2 }}>
                {skills.map((skill, index) => (
                  <Box key={index} sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: 'space-between' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 200 }}>
                        {getSkillIcon(skill.name)}
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'rgba(25, 118, 210, 0.1)',
                        '& .MuiLinearProgress-bar': {
                          borderRadius: 4,
                          background: 'linear-gradient(135deg, #1976d2 0%, #9c27b0 100%)',
                        },
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box id="projects" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Personal Projects
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              Here are some of my personal projects that showcase my skills and creativity in software development.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component="a"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              startIcon={<GitHub />}
              sx={{
                py: 1.5,
                px: 4,
                borderRadius: 3,
                backgroundColor: '#1a1a1a',
                '&:hover': {
                  backgroundColor: '#333',
                },
              }}
            >
              View More on GitHub
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Client Project Highlights Section */}
      <Box id="achievements" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Client Project Highlights
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              Key achievements and contributions to major South African client projects at Muntumi Technology.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {clientProjects.map((project, index) => (
              <Grid item xs={12} sm={6} lg={2.4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    background: project.gradient,
                    color: 'white',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                    },
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                      {project.title}
                    </Typography>
                    
                    {/* Technologies */}
                    <Box sx={{ mb: 2 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            mr: 0.5,
                            mb: 0.5,
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                      <Chip
                        label={project.role}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.3)',
                          color: 'white',
                          fontWeight: 600,
                          mr: 0.5,
                          mb: 0.5,
                          fontSize: '0.75rem',
                        }}
                      />
                    </Box>

                    {/* Achievements */}
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
                              sx: { fontSize: '0.85rem', lineHeight: 1.4 }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box id="experience" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Work Experience
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              My professional journey in the South African tech industry, delivering solutions for government and private sector clients.
            </Typography>
          </Box>

          <Box sx={{ space: 4 }}>
            {experiences.map((exp, index) => (
              <Card key={index} sx={{ mb: 4, p: 4 }}>
                <CardContent sx={{ p: 0 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 3, flexWrap: 'wrap' }}>
                    <Box>
                      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                        {exp.title}
                      </Typography>
                      <Typography variant="h6" color="primary.main" sx={{ fontWeight: 500 }}>
                        {exp.company}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: { xs: 'left', md: 'right' }, mt: { xs: 2, md: 0 } }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                        <LocationOn sx={{ mr: 1, fontSize: 16 }} />
                        <Typography variant="body2" color="text.secondary">
                          {exp.location}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
                        <CalendarToday sx={{ mr: 1, fontSize: 16 }} />
                        <Typography variant="body2" color="text.secondary">
                          {exp.period}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <List sx={{ p: 0 }}>
                    {exp.description.map((item, itemIndex) => (
                      <ListItem key={itemIndex} sx={{ px: 0, py: 1 }}>
                        <ListItemIcon sx={{ minWidth: 24 }}>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: 'primary.main',
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            color: 'text.secondary',
                            sx: { lineHeight: 1.6 }
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Education & Certifications Section */}
      <Box id="education" sx={{ py: { xs: 8, md: 12 }, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 600 }}>
              Education & Certifications
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              My academic background and professional certifications in software development.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Education */}
            <Grid item xs={12} lg={6}>
              <Card sx={{ height: '100%', p: 4 }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                    Education
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'start' }}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        mt: 1,
                        mr: 2,
                        flexShrink: 0,
                      }}
                    />
                    <Box>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                        National Diploma IT: Business Applications
                      </Typography>
                      <Typography variant="body1" color="primary.main" sx={{ fontWeight: 500, mb: 2 }}>
                        Tshwane University of Technology
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        Comprehensive program covering software development, business applications, 
                        database management, and IT project management.
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Certifications */}
            <Grid item xs={12} lg={6}>
              <Card sx={{ height: '100%', p: 4 }}>
                <CardContent sx={{ p: 0 }}>
                  <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                    Certifications
                  </Typography>
                  <Box sx={{ space: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'start', mb: 3 }}>
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          backgroundColor: 'success.main',
                          mt: 1,
                          mr: 2,
                          flexShrink: 0,
                        }}
                      />
                      <Box>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                          HackerRank Certificate – Problem Solving (Basic)
                        </Typography>
                        <Typography variant="body1" color="success.main" sx={{ fontWeight: 500, mb: 1 }}>
                          HackerRank • July 2025
                        </Typography>
                        <Link
                          href="https://www.hackerrank.com/certificates/iframe/e86b0661a7f2"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                        >
                          View Certificate →
                        </Link>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'start' }}>
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: '50%',
                          backgroundColor: 'success.main',
                          mt: 1,
                          mr: 2,
                          flexShrink: 0,
                        }}
                      />
                      <Box>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                          Diploma in Software Testing
                        </Typography>
                        <Typography variant="body1" color="success.main" sx={{ fontWeight: 500, mb: 1 }}>
                          Alison • July 2025
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          (Certificate Pending)
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#1a1a1a', color: 'white' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 600, color: 'white' }}>
              Let's Work Together
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: '600px', mx: 'auto', color: 'rgba(255, 255, 255, 0.7)' }}>
              I'm always interested in new opportunities and exciting projects. Let's connect!
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {/* Contact Info */}
            <Grid item xs={12} lg={6}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                Get In Touch
              </Typography>
              <Box sx={{ space: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Email sx={{ mr: 2, color: 'primary.light' }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Email
                    </Typography>
                    <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                      mashiaes@gmail.com
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Phone sx={{ mr: 2, color: 'primary.light' }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Phone
                    </Typography>
                    <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                      079 478 6621
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOn sx={{ mr: 2, color: 'primary.light' }} />
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      Location
                    </Typography>
                    <Typography variant="body2" color="rgba(255, 255, 255, 0.7)">
                      Johannesburg, South Africa
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} lg={6}>
              <Paper
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: 4,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Box sx={{ space: 3 }}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    sx={{
                      mb: 3,
                      '& .MuiOutlinedInput-root': {
                        color: 'white',
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
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
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.3)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.5)',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'primary.main',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    startIcon={<Send />}
                    sx={{
                      py: 1.5,
                      fontSize: '1rem',
                      borderRadius: 3,
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default Home;

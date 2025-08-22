import React, { useState, useEffect } from 'react';
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
  Divider,
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
  WhatsApp,
  School,
  Work,
  TrendingUp,
  CloudUpload,
  Launch,
  BusinessCenter,
  Search,
  GroupWork,
  VerifiedUser,
  Person,
  FormatQuote,
} from '@mui/icons-material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import whatsappImage from '../assets/WhatsApp Image 2025-08-17 at 07.00.39.jpeg';
import cvFile from '../assets/Elias_Mashia_CV.pdf';
import hackathonCertificate from '../assets/Elias_Certificate (1).pdf';

// Environment variables for production security
const config = {
  email: import.meta.env.VITE_CONTACT_EMAIL || 'mashiaes@gmail.com',
  phone: import.meta.env.VITE_CONTACT_PHONE || '+27794786621',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '27794786621',
  githubUrl: import.meta.env.VITE_GITHUB_URL || 'https://github.com/trans25',
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL || 'https://linkedin.com/in/mashia-elias',
};

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { scrollY } = useScroll();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Track scroll direction for modern animations
  useEffect(() => {
    const unsubscribe = scrollY.onChange((currentScrollY) => {
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    });

    return () => unsubscribe();
  }, [scrollY, lastScrollY]);

  // Simplified transform values for better performance
  const heroY = useTransform(scrollY, [0, 800], [0, -100]);
  const progressScale = useTransform(scrollY, [0, 2000], [0, 1]);

  // Looking For Data
  const lookingFor = [
    {
      title: 'Full-Stack Developer',
      type: 'Permanent',
      description: 'Seeking opportunities to build scalable web applications using modern technologies',
      technologies: ['React', 'C#', '.NET Core', 'Azure', 'TypeScript']
    },
    {
      title: 'Junior Software Engineer',
      type: 'Contract/Permanent',
      description: 'Interested in roles focusing on backend development and system optimization',
      technologies: ['Node.js', 'SQL Server', 'RESTful APIs', 'Microservices']
    },
    {
      title: 'Frontend Developer',
      type: 'Remote/Hybrid',
      description: 'Looking for positions to create exceptional user experiences',
      technologies: ['React', 'Vue.js', 'JavaScript', 'CSS3', 'Material-UI']
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: 'Richard Kagaba',
      position: 'Hiring Manager',
      company: 'Muntumi Technology',
      image: '/api/placeholder/60/60',
      testimonial: 'Elias consistently delivers high-quality code and has significantly improved our system performance. His LINQ optimizations reduced query times by 35%.',
      rating: 5
    },
    {
      name: 'Sekwayi Mokoena',
      position: 'Mentor',
      company: 'Muntumi Technology',
      image: '/api/placeholder/60/60',
      testimonial: 'As Elias\'s mentor, I\'ve watched him grow from a trainee to a confident developer. His eagerness to learn, attention to detail, and ability to apply feedback quickly made mentoring him a rewarding experience.',
      rating: 5
    },
    {
      name: 'Linda Busani',
      position: 'Cloud Intern',
      company: 'Muntumi Technology',
      image: '/api/placeholder/60/60',
      testimonial: 'Collaborating with Elias on cloud projects has been inspiring. His knowledge of Azure DevOps and deployment automation helped streamline our development workflow significantly.',
      rating: 5
    },
    {
      name: 'Elsie Setladi',
      position: 'Business Analyst',
      company: 'Muntumi Technology',
      image: '/api/placeholder/60/60',
      testimonial: 'Elias bridges the gap between technical and business requirements exceptionally well. His ability to translate complex technical concepts into business value is remarkable.',
      rating: 5
    },
    {
      name: 'Nonhlanhla Cindi',
      position: 'Team Lead',
      company: 'Informatics Community',
      image: '/api/placeholder/60/60',
      testimonial: 'During his time as a Business Analyst trainee, Elias showed exceptional analytical skills and attention to detail in requirements gathering.',
      rating: 5
    }
  ];

  // Certifications Data
  const certifications = [
    {
      title: 'Microsoft Certified: Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2025',
      credentialId: 'AZ-900',
      status: 'InProgress',
      color: '#0078D4',
      downloadLink: null
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2025',
      credentialId: 'CLF-C01',
      status: 'InProgress',
      color: '#FF9900',
      downloadLink: null
    },
    {
      title: 'HackerRank Problem Solving (Basic)',
      issuer: 'HackerRank',
      date: 'July 2025',
      credentialId: 'e86b0661a7f2',
      status: 'Active',
      color: '#00EA64',
      downloadLink: null
    },
    {
      title: 'Hackathon Participation Certificate',
      issuer: 'Hackathon Event',
      date: '14 November 2024',
      credentialId: 'Participation',
      status: 'Active',
      color: '#8B5CF6',
      downloadLink: hackathonCertificate
    },
    {
      title: 'Diploma in Software Testing',
      issuer: 'Alison',
      date: 'July 2025',
      credentialId: 'Pending',
      status: 'Completed',
      color: '#4285F4',
      downloadLink: null
    }
  ];

  // Professional Skills Data
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Web sx={{ fontSize: 32, color: '#2563EB' }} />,
      skills: [
        { name: 'React', level: 85, color: '#61DAFB' },
        { name: 'Vue.js', level: 80, color: '#4FC08D' },
        { name: 'JavaScript', level: 90, color: '#F7DF1E' },
        { name: 'HTML/CSS', level: 90, color: '#E34F26' },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Storage sx={{ fontSize: 32, color: '#7C3AED' }} />,
      skills: [
        { name: 'C# / .NET Core', level: 90, color: '#512BD4' },
        { name: 'ASP.NET MVC', level: 85, color: '#512BD4' },
        { name: 'Node.js', level: 75, color: '#339933' },
        { name: 'RESTful APIs', level: 85, color: '#FF6B35' },
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: <CloudUpload sx={{ fontSize: 32, color: '#059669' }} />,
      skills: [
        { name: 'Docker/Kubernetes', level: 80, color: '#326CE5' },
        { name: 'AWS Lambda/SQS', level: 75, color: '#FF9900' },
        { name: 'CI/CD Pipelines', level: 85, color: '#326CE5' },
        { name: 'Azure DevOps', level: 75, color: '#0078D4' },
      ]
    },
    {
      title: 'Database & Testing',
      icon: <Storage sx={{ fontSize: 32, color: '#DC2626' }} />,
      skills: [
        { name: 'SQL Server', level: 85, color: '#CC2927' },
        { name: 'PostgreSQL', level: 80, color: '#336791' },
        { name: 'MongoDB', level: 75, color: '#47A248' },
        { name: 'Selenium/Postman', level: 80, color: '#25D366' },
      ]
    }
  ];

  // Professional Experience
  const experience = [
    {
      title: 'Software Developer',
      company: 'Muntumi Technology',
      location: 'Johannesburg, SA',
      period: 'Jan 2024 - Present',
      description: 'Full-stack development taking projects from requirements to production, ensuring features add real value to end users',
      achievements: [
        'Improved backend performance with .NET Core & LINQ (cut query times by 35%)',
        'Built secure payment processing features in ASP.NET MVC for web & mobile',
        'Enhanced UI/UX with React and Bootstrap for vendor-facing platforms',
        'Automated workflows using AWS Lambda, reducing repetitive manual tasks',
        'Set up Docker/Kubernetes pipelines, making deployments smooth and reliable',
        'Worked on AI/ML modules using Python, OpenCV & TensorFlow for player movement tracking'
      ],
      technologies: ['C#', '.NET Core', 'ASP.NET MVC', 'React', 'AWS Lambda', 'Docker', 'Kubernetes', 'Python', 'TensorFlow']
    },
    {
      title: 'Consultant Developer',
      company: 'Multiple Clients',
      location: 'South Africa',
      period: 'Jan 2025 - Aug 2025',
      description: 'Consulting on various government and municipal projects',
      achievements: [
        'National Research Foundation: Upgraded research system using .NET 8 & Vue.js',
        'Council on Higher Education: Automated invoicing & workflows with SMS/email integrations',
        'Midvaal Municipality: Revamped municipal website with WordPress & PHP',
        'Implemented CI/CD pipelines, reducing deployment time and increasing reliability',
        'Streamlined finance operations improving accuracy and efficiency'
      ],
      technologies: ['.NET 8', 'Vue.js', 'WordPress', 'PHP', 'CI/CD', 'SMS/Email APIs']
    },
    {
      title: 'Business Analyst Trainee & QA Tester',
      company: 'Informatics Community Engagement',
      location: 'South Africa',
      period: 'Jun 2023 - Dec 2023',
      description: 'Requirements analysis, software testing, and bridging the gap between business needs and technical delivery',
      achievements: [
        'Gathered and documented requirements with stakeholders',
        'Designed and executed manual & automation test cases using Selenium and Postman',
        'Logged defects, supported UAT, and worked with devs to resolve issues quickly',
        'Helped bridge the gap between business needs and technical delivery'
      ],
      technologies: ['Requirements Analysis', 'Selenium', 'Postman', 'UAT', 'Agile/Scrum']
    }
  ];

  // Key Projects
  const projects = [
    {
      title: 'Hospital Management System',
      company: 'Personal Project',
      type: 'Open Source',
      description: 'coming soon',
      technologies: ['C#',  '.NET Core','React.js', 'PostgreSQL'],
      achievements: [],
      status: 'Pending'
    },
    {
      title: 'Inventory Management System',
      company: 'Personal Project',
      type: 'Open Source',
      description: 'Inprogress',
      technologies: ['Node.js', 'JavaScript', 'RESTful APIs', 'JWT', 'MongoDB'],
      achievements: ['JWT Authentication', 'RESTful Architecture', 'Real-time Updates'],
      status: 'In Development',
      github: 'github.com/trans25/inventory-management'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Hi Mashia! I'm ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailSend = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsSending(true);
    
    try {
      // Create FormData for Formspree or similar service
      const form = new FormData();
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('message', formData.message);
      form.append('subject', `Portfolio Contact from ${formData.name}`);
      
      // You can replace this URL with a form submission service like Formspree
      // For now, this will show the user that the form data is ready to be sent
      console.log('Form data ready:', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        to: config.email
      });
      
      // Simulate sending (replace with actual service)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert(`Message prepared! For now, please use the WhatsApp option or contact directly at ${config.email}`);
      setFormData({ name: '', email: '', message: '' }); // Clear form
      
    } catch (error) {
      console.error('Error preparing email:', error);
      alert(`Please use the WhatsApp option or contact directly at ${config.email}`);
    } finally {
      setIsSending(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isLoading) {
    return (
      <Backdrop open={isLoading} sx={{ color: '#fff', zIndex: 9999, backgroundColor: '#1e293b' }}>
        <Box sx={{ textAlign: 'center' }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Code sx={{ fontSize: 60, color: '#2563EB', mb: 2 }} />
          </motion.div>
          <Typography variant="h6" sx={{ color: '#2563EB', fontWeight: 600 }}>
            Loading Portfolio...
          </Typography>
          <Typography variant="body2" sx={{ color: '#94a3b8', mt: 1 }}>
            Preparing exceptional experience
          </Typography>
        </Box>
      </Backdrop>
    );
  }

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg, #2563EB, #7C3AED)',
          transformOrigin: '0%',
          scaleX: progressScale,
          zIndex: 10000
        }}
      />
      
      <Navbar />
      <Box sx={{ 
        overflow: 'hidden', 
        backgroundColor: '#f8fafc',
        position: 'relative',
        scrollBehavior: 'smooth',
        willChange: 'scroll-position'
      }}>
        
        {/* Floating Background Elements */}
        {/* Simplified floating background elements */}
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: -1,
            opacity: 0.6
          }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: 100 + i * 80,
                height: 100 + i * 80,
                borderRadius: '50%',
                background: `linear-gradient(45deg, rgba(37, 99, 235, 0.03), rgba(124, 58, 237, 0.03))`,
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </Box>
        
        {/* Hero Section */}
        {/* Hero Section */}
        <motion.div
          id="home"
          style={{ y: heroY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Box sx={{ 
            minHeight: '80vh', 
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            overflow: 'hidden'
          }}>
          {/* Animated Background Pattern */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)
              `,
              animation: 'float 20s ease-in-out infinite',
              '@keyframes float': {
                '0%, 100%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-20px)' }
              }
            }}
          />

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  {/* Status Badge */}
                  <Box sx={{ 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: 2,
                    px: 3, 
                    py: 1, 
                    mb: 3
                  }}>
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
                          '50%': { opacity: 0.5 }
                        }
                      }}
                    />
                    <Typography variant="caption" sx={{ 
                      fontWeight: 600, 
                      letterSpacing: '0.1em',
                      color: '#22c55e'
                    }}>
                      AVAILABLE FOR OPPORTUNITIES
                    </Typography>
                  </Box>
                  
                  <Typography variant="h6" sx={{ 
                    color: 'rgba(255,255,255,0.8)', 
                    mb: 1,
                    fontWeight: 500
                  }}>
                    Hello, I'm
                  </Typography>
                  
                  <Typography variant="h1" sx={{ 
                    fontWeight: 700, 
                    mb: 1,
                    fontSize: { xs: '2rem', md: '2.8rem' },
                    background: 'linear-gradient(45deg, #ffffff 30%, #e2e8f0 90%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}>
                    Mashia Elias
                  </Typography>
                  
                  <Typography variant="h5" sx={{ 
                    fontWeight: 300, 
                    mb: 3,
                    color: '#94a3b8'
                  }}>
                    Software Developer & Consultant
                  </Typography>
                  
                  <Typography variant="body1" sx={{ 
                    mb: 4, 
                    maxWidth: 500,
                    lineHeight: 1.6,
                    color: 'rgba(255,255,255,0.8)',
                    fontWeight: 400
                  }}>
                    Curious and adaptable Software Developer with 2+ years of hands-on experience building web, mobile, and backend systems. 
                    Specialized in .NET Core, React, Vue.js, and cloud technologies with recent consulting experience.
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="contained"
                        size="medium"
                        startIcon={<Download />}
                        href={cvFile}
                        download="Elias_Mashia_CV.pdf"
                        sx={{
                          background: 'linear-gradient(45deg, #2563EB 30%, #3B82F6 90%)',
                          color: 'white',
                          px: 3,
                          py: 1,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontWeight: 600,
                          boxShadow: '0 4px 16px rgba(37, 99, 235, 0.3)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #1d4ed8 30%, #2563EB 90%)',
                            boxShadow: '0 6px 24px rgba(37, 99, 235, 0.4)'
                          }
                        }}
                      >
                        Download CV
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outlined"
                        size="medium"
                        startIcon={<WhatsApp />}
                        href="https://wa.me/27794786621?text=Hi%20Mashia!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20opportunities."
                        target="_blank"
                        sx={{
                          borderColor: '#25D366',
                          color: '#25D366',
                          px: 3,
                          py: 1,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontWeight: 600,
                          '&:hover': {
                            borderColor: '#128C7E',
                            backgroundColor: 'rgba(37, 211, 102, 0.1)',
                            color: '#128C7E'
                          }
                        }}
                      >
                        WhatsApp
                      </Button>
                    </motion.div>
                  </Box>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <Box sx={{ 
                    textAlign: 'center',
                    position: 'relative'
                  }}>
                    <Box
                      sx={{
                        width: { xs: 200, md: 250 },
                        height: { xs: 200, md: 250 },
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)',
                        backdropFilter: 'blur(20px)',
                        border: '2px solid rgba(255,255,255,0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: -30,
                          left: -30,
                          right: -30,
                          bottom: -30,
                          background: 'conic-gradient(from 0deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                          animation: 'spin 10s linear infinite',
                        },
                        '@keyframes spin': {
                          '0%': { transform: 'rotate(0deg)' },
                          '100%': { transform: 'rotate(360deg)' }
                        }
                      }}
                    >
                      <Avatar
                        src={whatsappImage}
                        alt="Mashia Elias"
                        sx={{
                          width: { xs: 180, md: 230 },
                          height: { xs: 180, md: 230 },
                          border: '3px solid rgba(255,255,255,0.3)',
                          position: 'relative',
                          zIndex: 1
                        }}
                      />
                    </Box>
                    
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      gap: 2, 
                      mt: 2 
                    }}>
                      <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                        <IconButton
                          component="a"
                          href={config.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Profile"
                          sx={{ 
                            color: 'white',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            '&:hover': { 
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              transform: 'translateY(-2px)'
                            }
                          }}
                        >
                          <GitHub fontSize="small" />
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
                            color: 'white',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            '&:hover': { 
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              transform: 'translateY(-2px)'
                            }
                          }}
                        >
                          <LinkedIn fontSize="small" />
                        </IconButton>
                      </motion.div>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            style={{
              position: 'absolute',
              bottom: 30,
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <KeyboardArrowDown sx={{ fontSize: 40, color: 'rgba(255,255,255,0.7)' }} />
            </motion.div>
          </motion.div>
        </Box>
        </motion.div>

        {/* About Section */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#ffffff' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography variant="h3" sx={{ 
                textAlign: 'center', 
                mb: 2,
                fontWeight: 700,
                color: '#1e293b'
              }}>
                About Me
              </Typography>
              
              <Typography variant="body1" sx={{ 
                textAlign: 'center', 
                mb: 6,
                color: '#64748b',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6
              }}>
                I'm a dedicated Software Developer with a passion for creating efficient, 
                scalable applications. With hands-on experience in modern technologies and recent consulting work across government and municipal projects.
              </Typography>
            </motion.div>

            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -100, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ 
                    duration: 1,
                    delay: 0.2,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <Card sx={{ 
                    height: '100%',
                    minHeight: 500,
                    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                    border: 'none',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                  }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <BusinessCenter sx={{ fontSize: 24, color: '#2563EB', mr: 1.5 }} />
                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b' }}>
                          Professional Journey
                        </Typography>
                      </Box>
                      
                      <List>
                        {experience.map((exp, index) => (
                          <ListItem key={index} sx={{ px: 0, alignItems: 'flex-start' }}>
                            <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                              <Work sx={{ color: '#64748b' }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={
                                <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5, color: '#1e293b' }}>
                                  {exp.title}
                                </Typography>
                              }
                              secondary={
                                <Box>
                                  <Typography variant="body2" sx={{ fontWeight: 500, color: '#2563EB', mb: 0.5 }}>
                                    {exp.company} • {exp.location}
                                  </Typography>
                                  <Typography variant="caption" sx={{ color: '#64748b', mb: 1, display: 'block' }}>
                                    {exp.period}
                                  </Typography>
                                  <Typography variant="body2" sx={{ color: '#64748b', mb: 1.5, fontSize: '0.875rem' }}>
                                    {exp.description}
                                  </Typography>
                                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {exp.technologies.map((tech, idx) => (
                                      <Chip 
                                        key={idx} 
                                        label={tech} 
                                        size="small" 
                                        sx={{ 
                                          backgroundColor: '#e0f2fe',
                                          color: '#0277bd',
                                          fontWeight: 500,
                                          fontSize: '0.75rem',
                                          height: 24
                                        }} 
                                      />
                                    ))}
                                  </Box>
                                </Box>
                              }
                            />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 100, rotateY: 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ 
                    duration: 1,
                    delay: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <Card sx={{ 
                    height: '100%',
                    minHeight: 500,
                    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                    border: 'none',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                  }}>
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <TrendingUp sx={{ fontSize: 24, color: '#2563EB', mr: 1.5 }} />
                        <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b' }}>
                          Key Achievements
                        </Typography>
                      </Box>
                      
                      <List>
                        <ListItem sx={{ px: 0, mb: 1, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <Speed sx={{ color: '#22c55e', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={<Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b' }}>35% Query Performance Boost</Typography>}
                            secondary={<Typography variant="caption" sx={{ color: '#64748b' }}>Optimized LINQ queries and database operations</Typography>}
                          />
                        </ListItem>
                        
                        <ListItem sx={{ px: 0, mb: 1, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <Rocket sx={{ color: '#22c55e', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={<Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b' }}>40% Transaction Speed Improvement</Typography>}
                            secondary={<Typography variant="caption" sx={{ color: '#64748b' }}>Enhanced payment system reliability and speed</Typography>}
                          />
                        </ListItem>
                        
                        <ListItem sx={{ px: 0, mb: 1, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <AutoFixHigh sx={{ color: '#22c55e', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={<Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b' }}>.NET Background Service with SOAP API</Typography>}
                            secondary={<Typography variant="caption" sx={{ color: '#64748b' }}>Integrated background services with SOAP API</Typography>}
                          />
                        </ListItem>
                        
                        <ListItem sx={{ px: 0, mb: 1, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <CloudUpload sx={{ color: '#22c55e', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={<Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b' }}>Azure DevOps to Linux Migration</Typography>}
                            secondary={<Typography variant="caption" sx={{ color: '#64748b' }}>Migrated .NET backend and React frontend</Typography>}
                          />
                        </ListItem>
                        
                        <ListItem sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 30 }}>
                            <Launch sx={{ color: '#22c55e', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={<Typography variant="body2" sx={{ fontWeight: 600, color: '#1e293b' }}>Linux Service Automation</Typography>}
                            secondary={<Typography variant="caption" sx={{ color: '#64748b' }}>Created automated deployment services</Typography>}
                          />
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
          </Box>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f8fafc' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography variant="h3" sx={{ 
                textAlign: 'center', 
                mb: 2,
                fontWeight: 700,
                color: '#1e293b'
              }}>
                Technical Skills
              </Typography>
              
              <Typography variant="body1" sx={{ 
                textAlign: 'center', 
                mb: 6,
                color: '#64748b',
                maxWidth: 600,
                mx: 'auto'
              }}>
                Proficient in modern technologies across the full development stack
              </Typography>
            </motion.div>

            <Grid container spacing={3}>
              {skillCategories.map((category, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Card sx={{ 
                      height: '100%',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                        transition: 'all 0.3s ease'
                      }
                    }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ textAlign: 'center', mb: 2 }}>
                          {category.icon}
                          <Typography variant="h6" sx={{ 
                            mt: 1, 
                            fontWeight: 600,
                            color: '#1e293b'
                          }}>
                            {category.title}
                          </Typography>
                        </Box>
                        
                        {category.skills.map((skill, skillIndex) => (
                          <Box key={skillIndex} sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                              <Typography variant="body2" sx={{ fontWeight: 500, color: '#1e293b' }}>
                                {skill.name}
                              </Typography>
                              <Typography variant="caption" sx={{ color: '#64748b' }}>
                                {skill.level}%
                              </Typography>
                            </Box>
                            <LinearProgress
                              variant="determinate"
                              value={skill.level}
                              sx={{
                                height: 4,
                                borderRadius: 2,
                                backgroundColor: '#e2e8f0',
                                '& .MuiLinearProgress-bar': {
                                  backgroundColor: skill.color,
                                  borderRadius: 2
                                }
                              }}
                            />
                          </Box>
                        ))}
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
          </Box>
        </motion.div>

        {/* Projects Section */}
        {/* Projects Section */}
        <motion.div
          id="projects"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#ffffff' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Typography variant="h3" sx={{ 
                textAlign: 'center', 
                mb: 2,
                fontWeight: 700,
                color: '#1e293b'
              }}>
                Featured Projects
              </Typography>
              
              <Typography variant="body1" sx={{ 
                textAlign: 'center', 
                mb: 6,
                color: '#64748b',
                maxWidth: 600,
                mx: 'auto'
              }}>
                Real-world applications demonstrating technical expertise
              </Typography>
            </motion.div>

            <Grid container spacing={3}>
              {projects.map((project, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 100, rotateX: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      scale: 1.03,
                      y: -10,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Card sx={{ 
                      height: '100%',
                      minHeight: 420,
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 48px rgba(0,0,0,0.15)',
                        transition: 'all 0.3s ease'
                      }
                    }}>
                      <Box sx={{ 
                        height: 120, 
                        background: `linear-gradient(135deg, ${['#2563EB', '#7C3AED', '#059669'][index % 3]} 0%, ${['#3B82F6', '#8B5CF6', '#10B981'][index % 3]} 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        <Typography variant="h6" sx={{ 
                          color: 'white', 
                          fontWeight: 700,
                          textAlign: 'center',
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                        }}>
                          {project.title.split(' ')[0]}
                        </Typography>
                      </Box>
                      
                      <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                          <Typography variant="body1" sx={{ 
                            fontWeight: 600,
                            color: '#1e293b',
                            flexGrow: 1
                          }}>
                            {project.title}
                          </Typography>
                          <Chip 
                            label={project.status} 
                            size="small" 
                            sx={{ 
                              backgroundColor: project.status === 'Production' ? '#dcfce7' : 
                                             project.status === 'Completed' ? '#dbeafe' : '#fef3c7',
                              color: project.status === 'Production' ? '#166534' : 
                                     project.status === 'Completed' ? '#1d4ed8' : '#92400e',
                              fontWeight: 500,
                              fontSize: '0.75rem'
                            }} 
                          />
                        </Box>
                        
                        <Typography variant="caption" sx={{ 
                          color: '#2563EB', 
                          fontWeight: 500, 
                          mb: 1,
                          display: 'block'
                        }}>
                          {project.company} • {project.type}
                        </Typography>
                        
                        <Typography variant="body2" sx={{ 
                          color: '#64748b', 
                          mb: 2,
                          lineHeight: 1.5,
                          fontSize: '0.875rem'
                        }}>
                          {project.description}
                        </Typography>
                        
                        {project.achievements.length > 0 && (
                          <Box sx={{ mb: 2 }}>
                            <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, color: '#1e293b', display: 'block' }}>
                              Key Achievements:
                            </Typography>
                            {project.achievements.map((achievement, idx) => (
                              <Typography key={idx} variant="caption" sx={{ color: '#64748b', mb: 0.25, display: 'block' }}>
                                • {achievement}
                              </Typography>
                            ))}
                          </Box>
                        )}
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1.5 }}>
                          {project.technologies.map((tech, idx) => (
                            <Chip 
                              key={idx} 
                              label={tech} 
                              size="small" 
                              sx={{ 
                                backgroundColor: '#f1f5f9',
                                color: '#475569',
                                fontWeight: 500,
                                fontSize: '0.7rem',
                                height: 20
                              }} 
                            />
                          ))}
                        </Box>
                        
                        {project.github && (
                          <Button
                            startIcon={<GitHub fontSize="small" />}
                            href={`https://${project.github}`}
                            target="_blank"
                            size="small"
                            sx={{ 
                              color: '#1e293b',
                              textTransform: 'none',
                              fontWeight: 500,
                              fontSize: '0.8rem'
                            }}
                          >
                            View on GitHub
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
          </Box>
        </motion.div>

        {/* Certifications Section */}
        {/* Certifications Section */}
        <motion.div
          id="certifications"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#ffffff' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Typography variant="h3" sx={{ 
                textAlign: 'center', 
                mb: 2,
                fontWeight: 700,
                color: '#1e293b'
              }}>
                Certifications & Credentials
              </Typography>
              
              <Typography variant="body1" sx={{ 
                textAlign: 'center', 
                mb: 6,
                color: '#64748b',
                maxWidth: 600,
                mx: 'auto'
              }}>
                Professional certifications that validate my technical expertise
              </Typography>
            </motion.div>

            <Grid container spacing={3}>
              {certifications.map((cert, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 100, rotateY: -15 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Card sx={{ 
                      height: '100%',
                      minHeight: 320,
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                      textAlign: 'center',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                        transition: 'all 0.3s ease'
                      }
                    }}>
                      <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box>
                          <Box sx={{ 
                            width: 60, 
                            height: 60, 
                            borderRadius: '50%',
                            backgroundColor: cert.color + '20',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mx: 'auto',
                            mb: 2
                          }}>
                            <VerifiedUser sx={{ color: cert.color, fontSize: 28 }} />
                          </Box>
                          
                          <Typography variant="body1" sx={{ 
                            fontWeight: 600, 
                            mb: 1,
                            color: '#1e293b',
                            fontSize: '0.85rem',
                            lineHeight: 1.3,
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical'
                          }}>
                            {cert.title}
                          </Typography>
                          
                          <Typography variant="body2" sx={{ 
                            color: '#2563EB', 
                            mb: 1,
                            fontWeight: 500,
                            fontSize: '0.8rem'
                          }}>
                            {cert.issuer}
                          </Typography>
                          
                          <Typography variant="caption" sx={{ 
                            color: '#64748b', 
                            mb: 1,
                            display: 'block',
                            fontSize: '0.75rem'
                          }}>
                            Issued: {cert.date}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ mt: 'auto' }}>
                          <Chip 
                            label={cert.status} 
                            size="small" 
                            sx={{ 
                              backgroundColor: cert.status === 'Active' || cert.status === 'Completed' ? '#dcfce7' : '#fef3c7',
                              color: cert.status === 'Active' || cert.status === 'Completed' ? '#166534' : '#92400e',
                              fontWeight: 500,
                              fontSize: '0.7rem',
                              mb: 1
                            }} 
                          />
                          
                          <Typography variant="caption" sx={{ 
                            color: '#94a3b8', 
                            mb: cert.downloadLink ? 1.5 : 1,
                            display: 'block',
                            fontSize: '0.65rem'
                          }}>
                            ID: {cert.credentialId}
                          </Typography>
                          
                          {cert.downloadLink && (
                            <Button
                              variant="outlined"
                              size="small"
                              startIcon={<Download />}
                              href={cert.downloadLink}
                              download
                              sx={{
                                borderColor: cert.color,
                                color: cert.color,
                                fontSize: '0.75rem',
                                py: 0.5,
                                px: 1.5,
                                textTransform: 'none',
                                '&:hover': {
                                  borderColor: cert.color,
                                  backgroundColor: cert.color + '10',
                                }
                              }}
                            >
                              Download
                            </Button>
                          )}
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
          </Box>
        </motion.div>

        {/* Looking For Section */}
        {/* Looking For Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f8fafc' }}>
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Typography variant="h3" sx={{ 
                textAlign: 'center', 
                mb: 2,
                fontWeight: 700,
                color: '#1e293b'
              }}>
                What I'm Looking For
              </Typography>
              
              <Typography variant="body1" sx={{ 
                textAlign: 'center', 
                mb: 6,
                color: '#64748b',
                maxWidth: 600,
                mx: 'auto'
              }}>
                Actively seeking opportunities that align with my skills and career goals
              </Typography>
            </motion.div>

            <Grid container spacing={3}>
              {lookingFor.map((role, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 100, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    whileHover={{ 
                      scale: 1.03,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Card sx={{ 
                      height: '100%',
                      minHeight: 280,
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      border: '1px solid #e2e8f0',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                        transition: 'all 0.3s ease'
                      }
                    }}>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                          <Search sx={{ fontSize: 24, color: '#2563EB', mr: 1.5 }} />
                          <Typography variant="h6" sx={{ fontWeight: 600, color: '#1e293b' }}>
                            {role.title}
                          </Typography>
                        </Box>
                        
                        <Chip 
                          label={role.type} 
                          size="small" 
                          sx={{ 
                            backgroundColor: '#e0f2fe',
                            color: '#0277bd',
                            fontWeight: 500,
                            mb: 2
                          }} 
                        />
                        
                        <Typography variant="body2" sx={{ 
                          color: '#64748b', 
                          mb: 2,
                          lineHeight: 1.6
                        }}>
                          {role.description}
                        </Typography>
                        
                        <Typography variant="caption" sx={{ 
                          fontWeight: 600, 
                          mb: 1, 
                          color: '#1e293b',
                          display: 'block'
                        }}>
                          Key Technologies:
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {role.technologies.map((tech, idx) => (
                            <Chip 
                              key={idx} 
                              label={tech} 
                              size="small" 
                              sx={{ 
                                backgroundColor: '#f1f5f9',
                                color: '#475569',
                                fontWeight: 500,
                                fontSize: '0.7rem',
                                height: 20
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
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="body1" sx={{ 
                  color: '#1e293b', 
                  mb: 3,
                  fontWeight: 600
                }}>
                  Interested in discussing opportunities?
                </Typography>
                
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="medium"
                    startIcon={<WhatsApp />}
                    href="https://wa.me/27794786621?text=Hi%20Mashia!%20I%20have%20a%20job%20opportunity%20that%20might%20interest%20you."
                    target="_blank"
                    sx={{
                      background: 'linear-gradient(45deg, #25D366 30%, #128C7E 90%)',
                      color: 'white',
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 600,
                      '&:hover': {
                        background: 'linear-gradient(45deg, #128C7E 30%, #075E54 90%)',
                      }
                    }}
                  >
                    Discuss Opportunities
                  </Button>
                  
                  <Button
                    variant="outlined"
                    size="medium"
                    startIcon={<Download />}
                    href={cvFile}
                    download="Elias_Mashia_CV.pdf"
                    sx={{
                      borderColor: '#2563EB',
                      color: '#2563EB',
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontWeight: 600,
                      '&:hover': {
                        borderColor: '#1d4ed8',
                        backgroundColor: 'rgba(37, 99, 235, 0.1)',
                        color: '#1d4ed8'
                      }
                    }}
                  >
                    Download CV
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Container>
          </Box>
        </motion.div>

        {/* Contact Section */}
        {/* Contact Section */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          <Box sx={{ 
            py: { xs: 6, md: 8 }, 
            background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
            color: 'white'
          }}>
          <Container maxWidth="md">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Typography variant="h3" sx={{ 
                textAlign: 'center', 
                mb: 2,
                fontWeight: 700
              }}>
                Let's Work Together
              </Typography>
              
              <Typography variant="body1" sx={{ 
                textAlign: 'center', 
                mb: 5,
                color: '#94a3b8',
                maxWidth: 500,
                mx: 'auto'
              }}>
                Ready to bring your ideas to life? Let's discuss how we can collaborate.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Paper sx={{ 
                p: 3, 
                backgroundColor: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        size="small"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            '& fieldset': {
                              borderColor: 'rgba(255,255,255,0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255,255,255,0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#2563EB',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255,255,255,0.7)',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        size="small"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            '& fieldset': {
                              borderColor: 'rgba(255,255,255,0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255,255,255,0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#2563EB',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255,255,255,0.7)',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        size="small"
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            color: 'white',
                            '& fieldset': {
                              borderColor: 'rgba(255,255,255,0.3)',
                            },
                            '&:hover fieldset': {
                              borderColor: 'rgba(255,255,255,0.5)',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#2563EB',
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: 'rgba(255,255,255,0.7)',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                      <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button
                          onClick={handleEmailSend}
                          variant="contained"
                          size="medium"
                          startIcon={isSending ? null : <Send />}
                          disabled={isSending}
                          sx={{
                            background: 'linear-gradient(45deg, #2563EB 30%, #3B82F6 90%)',
                            color: 'white',
                            px: 3,
                            py: 1,
                            borderRadius: 2,
                            textTransform: 'none',
                            fontWeight: 600,
                            boxShadow: '0 4px 16px rgba(37, 99, 235, 0.3)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #1d4ed8 30%, #2563EB 90%)',
                              boxShadow: '0 6px 24px rgba(37, 99, 235, 0.4)'
                            },
                            '&:disabled': {
                              background: 'rgba(37, 99, 235, 0.5)',
                              color: 'rgba(255, 255, 255, 0.7)'
                            }
                          }}
                        >
                          {isSending ? 'Sending...' : 'Send Email'}
                        </Button>
                        
                        <Button
                          type="submit"
                          variant="outlined"
                          size="medium"
                          startIcon={<WhatsApp />}
                          sx={{
                            borderColor: '#25D366',
                            color: '#25D366',
                            px: 3,
                            py: 1,
                            borderRadius: 2,
                            textTransform: 'none',
                            fontWeight: 600,
                            '&:hover': {
                              borderColor: '#128C7E',
                              backgroundColor: 'rgba(37, 211, 102, 0.1)',
                              color: '#128C7E'
                            }
                          }}
                        >
                          WhatsApp
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </form>

                <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.1)' }} />

                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="body2" sx={{ mb: 2, color: '#94a3b8' }}>
                    Or connect with me directly:
                  </Typography>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Email sx={{ color: '#2563EB', fontSize: 16 }} />
                      <Typography variant="caption">mashiaes@gmail.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Phone sx={{ color: '#2563EB', fontSize: 16 }} />
                      <Typography variant="caption">+27 79 478 6621</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOn sx={{ color: '#2563EB', fontSize: 16 }} />
                      <Typography variant="caption">Johannesburg, SA</Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Container>
          </Box>
        </motion.div>
      </Box>
      <Footer />
    </>
  );
};

export default Home;

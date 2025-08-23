import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Box, Backdrop } from '@mui/material';
import { Code } from '@mui/icons-material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/home/Hero';
import LookingFor from '../components/home/LookingFor';
import Projects from '../components/home/Projects';
import Skills from '../components/home/Skills';
import Testimonials from '../components/home/Testimonials';
import Certifications from '../components/home/Certifications';
import Experience from '../components/home/Experience';
import Contact from '../components/home/Contact';
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
  const { scrollYProgress } = useScroll();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleEmailSend = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    const mailtoLink = `mailto:${config.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  // Data
  const lookingFor = [
    {
      title: 'Full-Stack Developer',
      type: 'Permanent',
      description: 'Seeking opportunities to build scalable web applications using modern technologies.',
      technologies: ['React', 'C#', '.NET Core', 'Azure', 'TypeScript']
    },
    {
      title: 'Junior Software Engineer',
      type: 'Contract/Permanent',
      description: 'Interested in roles focusing on backend development and system optimization.',
      technologies: ['Node.js', 'SQL Server', 'RESTful APIs', 'Microservices']
    },
    {
      title: 'Frontend Developer',
      type: 'Remote/Hybrid',
      description: 'Looking for positions to create exceptional user experiences.',
      technologies: ['React', 'Vue.js', 'JavaScript', 'CSS3', 'Material-UI']
    }
  ];

  const testimonials = [
    {
      name: 'Richard Kagaba',
      position: 'Hiring Manager',
      company: 'Muntumi Technology',
      testimonial: 'Elias consistently delivers high-quality code and has significantly improved our system performance. His LINQ optimizations reduced query times by 35%.',
      rating: 5
    },
    {
      name: 'Sekwayi Mokoena',
      position: 'Mentor',
      company: 'Muntumi Technology',
      testimonial: 'As Elias\'s mentor, I\'ve watched him grow from a trainee to a confident developer. His eagerness to learn and apply feedback quickly is remarkable.',
      rating: 5
    },
    {
      name: 'Linda Busani',
      position: 'Cloud Intern',
      company: 'Muntumi Technology',
      testimonial: 'Collaborating with Elias on cloud projects has been inspiring. His knowledge of Azure DevOps and deployment automation streamlined our workflow.',
      rating: 5
    }
  ];

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
      title: 'Hackathon Participation Certificate',
      issuer: 'Hackathon Event',
      date: '14 November 2024',
      credentialId: 'Participation',
      status: 'Active',
      color: '#8B5CF6',
      downloadLink: hackathonCertificate
    },
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code sx={{ fontSize: 32, color: '#2563EB' }} />,
      skills: [
        { name: 'React', level: 85, color: '#61DAFB' },
        { name: 'Vue.js', level: 80, color: '#4FC08D' },
        { name: 'JavaScript', level: 90, color: '#F7DF1E' },
        { name: 'HTML/CSS', level: 90, color: '#E34F26' },
      ]
    },
    {
      title: 'Backend Development',
      icon: <Code sx={{ fontSize: 32, color: '#7C3AED' }} />,
      skills: [
        { name: 'C# / .NET Core', level: 90, color: '#512BD4' },
        { name: 'ASP.NET MVC', level: 85, color: '#512BD4' },
        { name: 'Node.js', level: 75, color: '#339933' },
        { name: 'RESTful APIs', level: 85, color: '#FF6B35' },
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: <Code sx={{ fontSize: 32, color: '#059669' }} />,
      skills: [
        { name: 'Docker/Kubernetes', level: 80, color: '#326CE5' },
        { name: 'AWS Lambda/SQS', level: 75, color: '#FF9900' },
        { name: 'CI/CD Pipelines', level: 85, color: '#326CE5' },
        { name: 'Azure DevOps', level: 75, color: '#0078D4' },
      ]
    },
    {
      title: 'Database & Testing',
      icon: <Code sx={{ fontSize: 32, color: '#DC2626' }} />,
      skills: [
        { name: 'SQL Server', level: 85, color: '#CC2927' },
        { name: 'PostgreSQL', level: 80, color: '#336791' },
        { name: 'MongoDB', level: 75, color: '#47A248' },
        { name: 'Selenium/Postman', level: 80, color: '#25D366' },
      ]
    }
  ];

  const experience = [
    {
      title: 'Software Developer',
      company: 'Muntumi Technology',
      location: 'Johannesburg, SA',
      period: 'Jan 2024 - Present',
      description: 'Full-stack development taking projects from requirements to production, ensuring features add real value to end users.',
      achievements: [
        'Improved backend performance with .NET Core & LINQ (cut query times by 35%)',
        'Built secure payment processing features in ASP.NET MVC for web & mobile',
        'Enhanced UI/UX with React and Bootstrap for vendor-facing platforms',
        'Automated workflows using AWS Lambda, reducing repetitive manual tasks',
      ],
      technologies: ['C#', '.NET Core', 'ASP.NET MVC', 'React', 'AWS Lambda', 'Docker', 'Kubernetes', 'Python', 'TensorFlow']
    },
    {
      title: 'Consultant Developer',
      company: 'Multiple Clients',
      location: 'South Africa',
      period: 'Jan 2025 - Aug 2025',
      description: 'Consulting on various government and municipal projects.',
      achievements: [
        'National Research Foundation: Upgraded research system using .NET 8 & Vue.js',
        'Council on Higher Education: Automated invoicing & workflows with SMS/email integrations',
        'Midvaal Municipality: Revamped municipal website with WordPress & PHP',
        'Implemented CI/CD pipelines, reducing deployment time and increasing reliability',
      ],
      technologies: ['.NET 8', 'Vue.js', 'WordPress', 'PHP', 'CI/CD', 'SMS/Email APIs']
    },
    {
      title: 'Business Analyst Trainee & QA Tester',
      company: 'Informatics Community Engagement',
      location: 'South Africa',
      period: 'Jun 2023 - Dec 2023',
      description: 'Requirements analysis, software testing, and bridging the gap between business needs and technical delivery.',
      achievements: [
        'Gathered and documented requirements with stakeholders',
        'Designed and executed manual & automation test cases using Selenium and Postman',
        'Logged defects, supported UAT, and worked with devs to resolve issues quickly',
      ],
      technologies: ['Requirements Analysis', 'Selenium', 'Postman', 'UAT', 'Agile/Scrum']
    }
  ];

  const projects = [
    {
      title: 'Hospital Management System',
      company: 'Personal Project',
      type: 'Open Source',
      description: 'A comprehensive system for managing patient records, appointments, and billing. Currently in the planning and architecture phase.',
      technologies: ['C#', '.NET Core', 'React.js', 'PostgreSQL'],
      achievements: [],
      status: 'Pending'
    },
    {
      title: 'Inventory Management System',
      company: 'Personal Project',
      type: 'Open Source',
      description: 'A real-time inventory tracking system with JWT authentication, RESTful architecture, and a user-friendly interface.',
      technologies: ['Node.js', 'JavaScript', 'RESTful APIs', 'JWT', 'MongoDB'],
      achievements: ['JWT Authentication', 'RESTful Architecture', 'Real-time Updates'],
      status: 'In Development',
      github: 'github.com/trans25/inventory-management'
    }
  ];

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
        </Box>
      </Backdrop>
    );
  }

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg, #2563EB, #7C3AED)',
          transformOrigin: '0%',
          scaleX: scrollYProgress,
          zIndex: 10000
        }}
      />
      
      <Navbar />
      <Box sx={{ overflow: 'hidden', backgroundColor: '#ffffff', position: 'relative' }}>
        <Hero config={config} />
        <Experience experience={experience} />
        <Skills skillCategories={skillCategories} />
        <Projects projects={projects} />
        <Certifications certifications={certifications} />
        <Testimonials testimonials={testimonials} />
        <LookingFor lookingFor={lookingFor} />
        <Contact 
          config={config}
          handleEmailSend={handleEmailSend}
          handleInputChange={handleInputChange}
          formData={formData}
          isSending={isSending}
        />
      </Box>
      <Footer />
    </>
  );
};

export default Home;

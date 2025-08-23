import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Link,
  Divider,
} from '@mui/material';
import { GitHub, LinkedIn, Email, Phone, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const config = {
    githubUrl: 'https://github.com/trans25',
    linkedinUrl: 'https://linkedin.com/in/mashia-elias',
    email: 'mashiaes@gmail.com',
    phone: '+27794786621',
    whatsappNumber: '27794786621',
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Adjust this value to match your navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const quickLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.secondary',
        py: { xs: 4, md: 6 },
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 700, color: 'text.primary' }}
            >
              Mashia Elias
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              A passionate Software Developer building modern, scalable web
              applications.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                component="a"
                href={config.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href={config.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href={`mailto:${config.email}`}
                aria-label="Email"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <Email />
              </IconButton>
              <IconButton
                component="a"
                href={`https://wa.me/${config.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                sx={{
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <WhatsApp />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 600, color: 'text.primary' }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  component="button"
                  variant="body2"
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    textAlign: 'left',
                    '&:hover': {
                      color: 'primary.main',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ fontWeight: 600, color: 'text.primary' }}
            >
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">{config.email}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Phone sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">{config.phone}</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Typography variant="body2" align="center">
          © {currentYear} Mashia Elias. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

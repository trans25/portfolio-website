import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  IconButton,
  CardActions,
} from '@mui/material';
import { GitHub, Launch } from '@mui/icons-material';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  githubUrl, 
  liveUrl, 
  featured = false 
}) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
        },
        ...(featured && {
          gridColumn: { md: 'span 2' },
        }),
      }}
    >
      {/* Project Image/Banner */}
      <CardMedia
        sx={{
          height: 200,
          background: image 
            ? `url(${image})` 
            : 'linear-gradient(135deg, #1976d2 0%, #9c27b0 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!image && (
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'white', 
              fontWeight: 600,
              textAlign: 'center',
              px: 2,
            }}
          >
            {title}
          </Typography>
        )}
      </CardMedia>

      {/* Project Content */}
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
          {title}
        </Typography>
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          paragraph
          sx={{ lineHeight: 1.6 }}
        >
          {description}
        </Typography>

        {/* Technologies */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
          {technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              size="small"
              sx={{
                backgroundColor: 'rgba(25, 118, 210, 0.1)',
                color: 'primary.main',
                fontWeight: 500,
              }}
            />
          ))}
        </Box>
      </CardContent>

      {/* Action Buttons */}
      <CardActions sx={{ px: 3, pb: 3, pt: 0, justifyContent: 'flex-start' }}>
        {githubUrl && (
          <IconButton
            component="a"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            <GitHub />
          </IconButton>
        )}
        {liveUrl && (
          <IconButton
            component="a"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{
              color: 'text.secondary',
              '&:hover': {
                color: 'primary.main',
              },
            }}
          >
            <Launch />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;

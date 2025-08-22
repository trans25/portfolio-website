import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      light: '#f8f9fa',
      dark: '#e9ecef',
      contrastText: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#666666',
    },
    success: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
    },
    warning: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
    },
    error: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
    },
    info: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
  },
  typography: {
    fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontSize: 'clamp(3.5rem, 10vw, 7rem)',
      fontWeight: 900,
      lineHeight: 0.85,
      letterSpacing: '-0.06em',
      color: '#000000',
      fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
      textTransform: 'uppercase',
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-8px',
        left: 0,
        width: '60px',
        height: '4px',
        background: '#000000',
        animation: 'expandWidth 2s ease-out',
      },
      '@keyframes expandWidth': {
        '0%': { width: 0 },
        '100%': { width: '60px' },
      },
    },
    h2: {
      fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
      fontWeight: 800,
      lineHeight: 1.0,
      letterSpacing: '-0.04em',
      color: '#000000',
      fontFamily: '"Inter", "SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
      textTransform: 'uppercase',
      position: 'relative',
    },
    h3: {
      fontSize: 'clamp(2rem, 5vw, 3.5rem)',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.03em',
      color: '#000000',
      textTransform: 'uppercase',
    },
    h4: {
      fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      color: '#000000',
      textTransform: 'uppercase',
    },
    h5: {
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      fontWeight: 600,
      lineHeight: 1.3,
      color: '#000000',
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
    },
    h6: {
      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
      fontWeight: 500,
      lineHeight: 1.4,
      color: '#666666',
      letterSpacing: '0.01em',
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.8,
      color: '#333333',
      fontWeight: 400,
      letterSpacing: '0.005em',
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#666666',
      fontWeight: 400,
      letterSpacing: '0.005em',
    },
    subtitle1: {
      fontSize: '1.375rem',
      lineHeight: 1.5,
      color: '#000000',
      fontWeight: 600,
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
    },
    subtitle2: {
      fontSize: '1.25rem',
      lineHeight: 1.4,
      color: '#333333',
      fontWeight: 500,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 0,
  },
  shadows: [
    'none',
    '0px 1px 3px rgba(0, 0, 0, 0.12)',
    '0px 2px 6px rgba(0, 0, 0, 0.16)',
    '0px 4px 12px rgba(0, 0, 0, 0.16)',
    '0px 6px 18px rgba(0, 0, 0, 0.16)',
    '0px 8px 24px rgba(0, 0, 0, 0.16)',
    '0px 12px 32px rgba(0, 0, 0, 0.16)',
    '0px 16px 40px rgba(0, 0, 0, 0.16)',
    '0px 24px 48px rgba(0, 0, 0, 0.2)',
    ...Array(16).fill('0px 24px 48px rgba(0, 0, 0, 0.2)'),
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
          backgroundColor: '#ffffff',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#f5f5f5',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#000000',
            borderRadius: '0px',
            '&:hover': {
              background: '#333333',
            },
          },
        },
        '*': {
          scrollBehavior: 'smooth',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          borderRadius: 0,
          padding: '18px 48px',
          fontSize: '0.875rem',
          fontWeight: 800,
          letterSpacing: '0.15em',
          transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
          position: 'relative',
          overflow: 'hidden',
          border: '3px solid transparent',
          minHeight: '60px',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            transition: 'left 0.8s ease',
            zIndex: 1,
          },
          '&:hover::before': {
            left: '100%',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 0,
            height: 0,
            background: 'rgba(255, 255, 255, 0.1)',
            transition: 'all 0.4s ease',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
          },
          '&:hover::after': {
            width: '200%',
            height: '200%',
          },
        },
        containedPrimary: {
          background: '#000000',
          color: '#ffffff',
          border: '3px solid #000000',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          '&:hover': {
            background: '#ffffff',
            color: '#000000',
            border: '3px solid #000000',
            transform: 'translateY(-4px) scale(1.02)',
            boxShadow: '0 16px 48px rgba(0, 0, 0, 0.4)',
          },
          '&:active': {
            transform: 'translateY(-2px) scale(1.01)',
          },
        },
        outlined: {
          borderWidth: '3px',
          borderColor: '#000000',
          color: '#000000',
          background: 'transparent',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            background: '#000000',
            color: '#ffffff',
            borderColor: '#000000',
            transform: 'translateY(-4px) scale(1.02)',
            boxShadow: '0 16px 48px rgba(0, 0, 0, 0.4)',
          },
        },
        text: {
          color: '#000000',
          '&:hover': {
            background: 'rgba(0, 0, 0, 0.06)',
            transform: 'scale(1.05)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '2px solid #e0e0e0',
          background: '#ffffff',
          transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: 'linear-gradient(90deg, #000000 0%, #666666 50%, #000000 100%)',
            transform: 'scaleX(0)',
            transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
            transformOrigin: 'left',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.06) 100%)',
            opacity: 0,
            transition: 'opacity 0.5s ease',
          },
          '&:hover': {
            transform: 'translateY(-12px) scale(1.03)',
            boxShadow: '0 32px 64px rgba(0, 0, 0, 0.25)',
            borderColor: '#000000',
            '&::before': {
              transform: 'scaleX(1)',
            },
            '&::after': {
              opacity: 1,
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontWeight: 600,
          letterSpacing: '0.02em',
          transition: 'all 0.3s ease',
          border: '1px solid #e0e0e0',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            borderColor: '#000000',
          },
        },
        filled: {
          backgroundColor: '#000000',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#333333',
          },
        },
        outlined: {
          borderColor: '#000000',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#000000',
            color: '#ffffff',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            transition: 'all 0.3s ease',
            '& fieldset': {
              borderColor: '#e0e0e0',
              borderWidth: '2px',
            },
            '&:hover fieldset': {
              borderColor: '#000000',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#000000',
              borderWidth: '2px',
            },
            '&:hover': {
              transform: 'translateY(-1px)',
            },
            '&.Mui-focused': {
              transform: 'translateY(-1px)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#666666',
            '&.Mui-focused': {
              color: '#000000',
            },
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          height: 4,
          borderRadius: 0,
          backgroundColor: '#f5f5f5',
          overflow: 'hidden',
        },
        bar: {
          borderRadius: 0,
          background: '#000000',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            animation: 'shimmer 2s infinite',
          },
        },
        '@keyframes shimmer': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: '#000000',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#333333',
            transform: 'scale(1.1)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            transform: 'scale(1.1)',
          },
        },
      },
    },
  },
});

export default theme;

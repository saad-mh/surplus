import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ 
        justifyContent: 'space-between',
      }}>
        {/* Logo on the left */}
        <Typography
          variant="h6"
          component="div"
          sx={{ 
            flexShrink: 0,
            cursor: 'pointer',
            ml: 6  // Margin left: 48px
          }}
        >
          SURPLUS
        </Typography>

        {/* Navigation Buttons in center */}
        <Box sx={{ 
          display: 'flex', 
          gap: 2,
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          <Button color="inherit" href="#our-vision">
            Our Vision
          </Button>
          <Button color="inherit" href="#get-involved">
            Get Involved
          </Button>
          <Button color="inherit" href="#contact-us">
            Contact Us
          </Button>
        </Box>

        {/* Login button on the right */}
        <Button 
          color="inherit"
          variant="outlined"
          sx={{ 
            flexShrink: 0,
            borderColor: 'white',
            mr: 6,  // Margin right: 48px
            '&:hover': {
              borderColor: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            }
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
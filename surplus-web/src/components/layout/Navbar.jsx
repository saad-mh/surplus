import { AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
          onClick={() => navigate('/')}
        >
          Surplus
        </Typography>
        <Box>
          <Button 
            color="inherit" 
            variant="outlined"
            sx={{ 
              borderColor: 'white',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar; 
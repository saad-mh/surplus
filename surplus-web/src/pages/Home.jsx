import { Box, Typography, Button, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography 
        variant="h1" 
        component="h1" 
        sx={{ 
          color: 'primary.main',
          mb: 3
        }}
      >
        Welcome to Surplus
      </Typography>
      <Typography 
        variant="h5" 
        sx={{ 
          color: 'secondary.main',
          mb: 6
        }}
      >
        A Sustainable Marketplace & Food Donation Platform
      </Typography>
      
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Box 
            sx={{ 
              p: 4, 
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 1
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Marketplace
            </Typography>
            <Button 
              variant="contained" 
              color="primary"
              sx={{ mt: 2 }}
              component={RouterLink}
              to="/marketplace"
            >
              Browse Items
            </Button>
          </Box>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box 
            sx={{ 
              p: 4, 
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 1
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Food Donations
            </Typography>
            <Button 
              variant="contained" 
              color="primary"
              sx={{ mt: 2 }}
            >
              View Donations
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home; 
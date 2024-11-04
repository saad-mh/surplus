import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      textAlign: 'center', 
      mt: 8 
    }}>
      <Typography variant="h1" sx={{ mb: 2 }}>
        ligma?
      </Typography>
      <Typography variant="h4" sx={{ mb: 4 }}>
        ligma balls
      </Typography>
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => navigate('/')}
      >
        Return Home
      </Button>
    </Box>
  );
}

export default NotFound; 
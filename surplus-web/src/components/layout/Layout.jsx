import { Box, Container } from '@mui/material';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <Box sx={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      bgcolor: 'background.default'
    }}>
      <Navbar />
      <Container component="main" sx={{ flex: 1, py: 4 }}>
        {children}
      </Container>
    </Box>
  );
}

export default Layout; 
import Navbar from './Navbar';
import { Box } from '@mui/material';

function Layout({ children }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          marginTop: '64px', // Height of the AppBar
          width: '100%'
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Layout; 
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Typography, Avatar, Paper } from '@mui/material';

function Profile() {
  const { user } = useAuth0();

  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 4, maxWidth: 600, mx: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar
            src={user?.picture}
            sx={{ width: 100, height: 100, mr: 3 }}
          />
          <Box>
            <Typography variant="h4">{user?.name}</Typography>
            <Typography color="textSecondary">{user?.email}</Typography>
          </Box>
        </Box>
        
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          {JSON.stringify(user, null, 2)}
        </Typography>
      </Paper>
    </Box>
  );
}

export default Profile; 
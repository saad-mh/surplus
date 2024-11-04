import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import Loader from '../components/common/Loader';

export function ProtectedRoute({ children }) {
  const { error, isLoading, loginWithRedirect } = useAuth0();
  const [shouldShowError, setShouldShowError] = useState(false);

  useEffect(() => {
    if (error?.error === 'invalid_grant' || error?.status === 400) {
      setShouldShowError(true);
    }
  }, [error]);

  if (shouldShowError) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          p: 3
        }}
      >
        <Typography variant="h5" color="error">
          Authentication Error
        </Typography>
        <Typography>
          Unable to verify your credentials. Please try logging in again.
        </Typography>
        <Button 
          variant="contained" 
          onClick={() => loginWithRedirect()}
        >
          Log In Again
        </Button>
      </Box>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  return children;
}

export default withAuthenticationRequired(ProtectedRoute, {
  onRedirecting: () => <Loader />
}); 
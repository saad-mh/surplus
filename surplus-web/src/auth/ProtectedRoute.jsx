import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';
import Loader from '../components/common/Loader';

export function ProtectedRoute({ children, requiresBusiness }) {
  const { error, isLoading, user, isAuthenticated } = useAuth0();
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
      </Box>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  // Check if the route requires business access
  if (requiresBusiness) {
    const userType = user?.appState?.userType || user?.user_metadata?.user_type;
    if (userType !== 'business') {
      return <Navigate to="/marketplace" replace />;
    }
  }

  return children;
}

export default withAuthenticationRequired(ProtectedRoute, {
  onRedirecting: () => <Loader />
}); 
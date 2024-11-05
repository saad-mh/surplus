import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useUserType } from '../../auth/Auth0Provider';

function BusinessRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();
  const userType = useUserType();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated || userType !== 'business') {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default BusinessRoute; 
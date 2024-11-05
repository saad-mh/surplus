import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useUserType } from '../../auth/Auth0Provider';
import Loader from '../common/Loader';

function BusinessRoute({ children }) {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const userType = useUserType();

  console.log('Is Authenticated:', isAuthenticated);
  console.log('Is Loading:', isLoading);
  console.log('User:', user);
  console.log('User Type:', userType);
  console.log('App Metadata:', user?.['https://vague.us.auth0.com/app_metadata']);

  if (isLoading) {
    return <div><Loader /></div>;
  }

  if (!isAuthenticated || userType !== 'business') {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default BusinessRoute; 
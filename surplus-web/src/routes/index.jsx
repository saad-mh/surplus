import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import MobileHome from '../pages/MobileHome';
import Marketplace from '../pages/Marketplace';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';
import AboutUs from '../pages/AboutUs';
import GetInvolved from '../pages/GetInvolved';
import ContactUs from '../pages/ContactUs';
import { ProtectedRoute } from '../auth/ProtectedRoute';
import LoaderTest from '../pages/LoaderTest';
import RestaurantDashboard from '../pages/RestaurantDashboard';
import { useTheme, useMediaQuery } from '@mui/material';

function AppRoutes() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          isMobile ? 
            <Navigate to="/homepagem" replace /> : 
            <Navigate to="/homepage" replace />
        } 
      />
      <Route path="/homepage" element={<Home />} />
      <Route path="/homepagem" element={<MobileHome />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } 
      />
      <Route path="/test/loader" element={<LoaderTest />} />
      <Route 
        path="/dashboard" 
        element={
            <RestaurantDashboard />

        } 
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes; 
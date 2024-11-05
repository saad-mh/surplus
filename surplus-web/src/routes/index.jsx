import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Marketplace from '../pages/Marketplace';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';
import AboutUs from '../pages/AboutUs';
import GetInvolved from '../pages/GetInvolved';
import ContactUs from '../pages/ContactUs';
import { ProtectedRoute } from '../auth/ProtectedRoute';
import LoaderTest from '../pages/LoaderTest';
import RestaurantDashboard from '../pages/RestaurantDashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
          <ProtectedRoute requiresBusiness>
            <RestaurantDashboard />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes; 
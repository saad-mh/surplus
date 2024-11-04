import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './src/pages/Home';
import NotFound from './src/pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default AppRoutes; 
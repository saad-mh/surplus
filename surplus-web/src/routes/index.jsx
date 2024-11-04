import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Marketplace from '../pages/Marketplace';
import NotFound from '../pages/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes; 
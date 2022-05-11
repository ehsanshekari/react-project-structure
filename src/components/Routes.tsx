import { Route, Routes } from 'react-router-dom';

import AboutPage from './pages/website/AboutPage';
import HomePage from './pages/website/HomePage';
import NotFoundPage from './pages/website/NotFoundPage';
import Dashboard from './pages/dashboard/Dashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path={'/dashboard/*'} element={<Dashboard />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;

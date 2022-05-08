import { Route, Routes } from 'react-router-dom';

import AboutPage from './pages/website/AboutPage';
import HomePage from './pages/website/HomePage';
import NotFoundPage from './pages/website/NotFoundPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

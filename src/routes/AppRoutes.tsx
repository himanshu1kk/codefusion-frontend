import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const LandingPage = lazy(() =>
  import('../pages/LandingPage').then((module) => ({ default: module.LandingPage })),
);

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

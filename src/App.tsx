import { Suspense } from 'react';
import { AppRoutes } from './routes/AppRoutes';
import { PageLoader } from './components/ui/PageLoader';

export function App() {
  return (
    <Suspense fallback={<PageLoader label="Loading CFF Explorer" />}>
      <AppRoutes />
    </Suspense>
  );
}

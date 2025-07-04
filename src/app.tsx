import { cn } from '@vanta-design/desktop/src/utils/common';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages';
import AppIndexPage from './pages/app';
import AppLayout from './pages/app/layout';
import { app } from './styles/app.css';

export default function App() {
  return (
    <div className={cn(app)}>
      <Suspense>
        <Routes>
          <Route index element={<IndexPage />} />

          <Route path='app' element={<AppLayout />}>
            <Route index element={<AppIndexPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

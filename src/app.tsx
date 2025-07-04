import { VantaProvider } from '@vanta-design/desktop/src/providers/vanta-root';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages';
import AppIndexPage from './pages/app';
import AppLayout from './pages/app/layout';

export default function App() {
  return (
    <VantaProvider>
      <Suspense>
        <Routes>
          <Route index element={<IndexPage />} />

          <Route path='app' element={<AppLayout />}>
            <Route index element={<AppIndexPage />} />
          </Route>
        </Routes>
      </Suspense>
    </VantaProvider>
  );
}

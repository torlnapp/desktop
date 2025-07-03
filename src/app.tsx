import { VantaProvider } from '@vanta-design/desktop/src/providers/vanta-root';
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from '~react-pages';

export default function App() {
  return (
    <VantaProvider>
      <Suspense>{useRoutes(routes)}</Suspense>
    </VantaProvider>
  );
}

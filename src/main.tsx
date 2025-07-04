import { AccentProvider } from '@vanta-design/desktop/src/providers/accent';
import { ThemeProvider } from '@vanta-design/desktop/src/providers/theme';
import { VantaProvider } from '@vanta-design/desktop/src/providers/vanta-root';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(root).render(
  <StrictMode>
    <VantaProvider>
      <ThemeProvider>
        <AccentProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AccentProvider>
      </ThemeProvider>
    </VantaProvider>
  </StrictMode>,
);

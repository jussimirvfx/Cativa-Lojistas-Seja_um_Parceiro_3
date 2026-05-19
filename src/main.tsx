import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { configureMetaPixel, MetaPixel, MetaPixelProvider } from './lib/metaPixel';
import App from './App.tsx';
import './index.css';

configureMetaPixel({
  PIXEL_ID: import.meta.env.VITE_META_PIXEL_ID,
  ACCESS_TOKEN: import.meta.env.VITE_META_API_ACCESS_TOKEN,
  TEST_EVENT_CODE: import.meta.env.VITE_META_TEST_EVENT_CODE,
});

if (typeof window !== 'undefined') {
  localStorage.setItem('meta-pixel-debug', 'true');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MetaPixelProvider>
      <App />
      <MetaPixel pixelId={import.meta.env.VITE_META_PIXEL_ID} />
    </MetaPixelProvider>
  </StrictMode>,
);

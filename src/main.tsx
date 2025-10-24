import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import { ImageProvider } from './context/ImageContext.tsx';
import { IosInstallPromptProvider } from './context/IosInstallPromptContext.tsx';
import { UserConceptModalProvider } from './context/UserConceptModalContext.tsx';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <IosInstallPromptProvider>
        <ImageProvider>
          <BrowserRouter>
            <UserConceptModalProvider>
              <App />
            </UserConceptModalProvider>
          </BrowserRouter>
        </ImageProvider>
      </IosInstallPromptProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

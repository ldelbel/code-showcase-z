import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    optimizeDeps: {
      exclude: ['@zodic/shared/app'],
    },
    build: {
      rollupOptions: {
        external: ['@zodic/shared/app'],
      },
    },
    plugins: [
      react(),
      VitePWA({
        registerType: 'prompt', 
        injectRegister: 'auto', 
        pwaAssets: {
          disabled: true, 
          config: false,
        },
        includeAssets: [
          'favicon.ico',
          'apple-touch-icon-180x180.png',
          'icons/icon-maskable-192x192.png',
          'icons/maskable-icon-512x512.png',
        ],
        manifest: {
          name: 'Zodic',
          short_name: 'Zodic',
          description:
            'Zodic usa IA para revelar os tesouros que existem dentro de você. Descubra qual arquétipo descreve sua essência e aprofunde seu autoconhecimento.',
          theme_color: '#242424',
          background_color: '#242424',
          start_url: '/',
          scope: '/',
          display: 'standalone',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/icons/icon-maskable-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'maskable',
            },
            {
              src: '/icons/maskable-icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true, 
          runtimeCaching: [
            {
              urlPattern: ({ request }) => request.destination === 'image',
              handler: 'NetworkFirst',
              options: {
                cacheName: 'images-cache',
                expiration: { maxEntries: 50, maxAgeSeconds: 30 * 24 * 60 * 60 },
              },
            },
            {
              urlPattern: ({ request }) => request.destination === 'font',
              handler: 'CacheFirst',
              options: {
                cacheName: 'fonts-cache',
                expiration: { maxEntries: 20, maxAgeSeconds: 365 * 24 * 60 * 60 },
              },
            },
            {
              urlPattern: ({ url }) =>
                url.pathname.startsWith('/api/') && !url.pathname.startsWith('/api/auth'),
              handler: 'NetworkFirst',
              options: {
                cacheName: 'api-cache',
                networkTimeoutSeconds: 5,
                cacheableResponse: {
                  statuses: [0, 200], 
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: true,
          suppressWarnings: true,
          type: 'module',
        },
      }),
    ],
    resolve: {
      alias: {
        '@zodic/shared/types': '@zodic/shared/types/frontend',
        '@zodic/shared/utils': '@zodic/shared/utils',
        '@zodic/shared/app': '/empty-module.js',
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      hmr: {
        overlay: true,
      },
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
  };
});

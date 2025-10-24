# Zodic Frontend

A modern React and TypeScript application built with Vite, featuring a responsive UI for the Zodic platform with Tailwind CSS, Radix UI components, and advanced state management.

[Video Explanation](https://vimeo.com/1130369258/f482aca6eb)

### Features

- **React & TypeScript**: Built with React 18 and TypeScript for a robust, type-safe frontend.
- **Vite**: Fast development with Hot Module Replacement (HMR).
- **Tailwind CSS**: Utility-first styling with animation and text-shadow plugins.
- **PWA Support**: Progressive Web App capabilities with offline support.
- **State Management**: Uses @tanstack/react-query and zustand.
- **Forms**: Powered by react-hook-form and yup for validation.
- **Radix UI**: Accessible components like Checkbox, Dialog, Popover, Select, Tabs, and Tooltip.
- **Animations**: Enhanced with framer-motion, react-tsparticles, and swiper.
- **Routing**: Seamless navigation with react-router-dom.
- **Notifications**: User-friendly alerts via react-toastify.
- **Data Visualization**: Dynamic charts with d3.
- **Cloudflare Pages**: Optimized for deployment with wrangler.

### Prerequisites

- **Node.js**: >=20.0.0
- **Bun**: Required for upshare script (won't need it, though)
- **Git**: For version control and Husky hooks

### Setup

1. Clone the repository:
```
git clone https://github.com/ldelbel/code-showcase-z.git
cd code-showcase-z
```

2. Install dependencies:
```
npm install (or bun install)
```

### Scripts

- bun dev: Start the development server with Vite.
- bun build: Build the app for production with TypeScript and Vite.
- npm run preview: Preview the production build locally.
- npm run prepare: Set up Husky for Git hooks.
- npm run func: Run with Cloudflare Pages dev environment.
- npm run generate-pwa-assets: Generate PWA assets from public/wheel.svg.


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import viteSitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(), 
    tailwindcss(),
    viteSitemap({
      hostname: 'https://faboaccounting.com',
      dynamicRoutes: [
        '/about',
        '/services',
        '/technologies',
        '/contact',
        '/imprint',
        '/privacy-policy',
      ],
      outDir: 'dist',
    }),
  ],
})

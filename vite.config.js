import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from '@cloudflare/vite-plugin'
import { sites } from './build/sites-vite-plugin.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sites(),
    cloudflare({
      viteEnvironment: { name: 'server' },
      config: {
        main: './worker/index.js',
        compatibility_date: '2026-07-14',
        assets: {
          binding: 'ASSETS',
          not_found_handling: 'single-page-application',
        },
      },
    }),
  ],
})

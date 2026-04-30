import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  main: { build: { outDir: 'dist/main' } },
  preload: { build: { outDir: 'dist/preload' } },
  renderer: {
    root: 'src/renderer',
    plugins: [react()],
    resolve: { alias: { '@': path.resolve(__dirname, 'src/renderer/src') } }
  }
})

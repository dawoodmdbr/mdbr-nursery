// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/mdbr-nursery/', // replace with your actual repo name
  plugins: [react()],
})

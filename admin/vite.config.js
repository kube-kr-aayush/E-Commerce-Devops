import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5174 },
  
  // Add these configurations for Vercel
  build: {
    // Target modern browsers for better optimization
    target: 'es2020',
    
    // CommonJS options to properly include node_modules
    commonjsOptions: {
      include: [/react-router-dom/, /node_modules/],
      transformMixedEsModules: true,
    },
    
    // Rollup options
    rollupOptions: {
      // Ensure react-router-dom is NOT externalized
      external: [],
      
      // Optional: Bundle dependencies together
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        }
      }
    },
    
    // Empty output directory on each build
    emptyOutDir: true,
  },
  
  // SSR configuration (important for Vercel)
  ssr: {
    noExternal: ['react-router-dom'],
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: [],
  }
})

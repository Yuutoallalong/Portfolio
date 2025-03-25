import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',      // Ensures build files go to "dist"
        emptyOutDir: true,   // Clears old build files before building
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name].[hash].js',
                chunkFileNames: 'assets/[name].[hash].js',
                assetFileNames: 'assets/[name].[hash][extname]'
            }
        }
    },
    server: {
        proxy: {
            '/contact': 'http://localhost:1025'  // Proxy API requests to Node.js server
        },
        host: '0.0.0.0',  // Ensures Vite server is accessible externally
        port: 3000         // Vite development server port
    }
});

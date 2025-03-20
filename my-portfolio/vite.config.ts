import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',  // Ensures build files go to "dist"
        emptyOutDir: true  // Clears old build files before building
    },
    server: {
        proxy: {
            '/contact': 'http://localhost:1025' // Proxy API requests to your Node.js server
        }
    }
});

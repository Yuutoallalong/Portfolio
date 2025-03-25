import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        emptyOutDir: true,   // Ensures old files are removed
        cssCodeSplit: true,  // Reduces CSS bloat
        minify: 'esbuild',   // Faster and more efficient minification
        sourcemap: false,    // Disables sourcemaps for faster builds
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        return 'vendor';  // Chunk vendor files to improve performance
                    }
                },
            },
        },
    },
    server: {
        proxy: {
            '/dashboard': 'http://localhost:1025',
        },
    },
});

import { defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: process.env.VITE_BASE_PATH || '/ar-rahmoh/',
    server: {
        proxy: {
        // Intercepts any frontend requests starting with /api
        base: './',
        '/api': {
            target: 'http://localhost:5000', // Your Express backend URL
            changeOrigin: true,
            secure: false,
        }
        }
    }
}) 
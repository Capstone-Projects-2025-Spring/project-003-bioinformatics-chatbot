import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';


// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  test: {
    environment: 'jsdom', // needed for React component testing
    coverage: {
      reporter: ['text', 'json', 'html'], // terminal, JSON file, and browser report
    },
  },
});


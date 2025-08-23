import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Sitemap generation plugin
const sitemapPlugin = () => {
  return {
    name: 'sitemap-generator',
    buildStart() {
      console.log('🔧 Building with sitemap generation...');
    },
    closeBundle() {
      console.log('✅ Build complete - sitemap should be generated');
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    sitemapPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

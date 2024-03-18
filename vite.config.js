import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Pages from "vite-plugin-pages";
import Sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname: 'http://www.test.com',
      readable: true,
      dynamicRoutes,
      allowRobots: true,
    }),
    Pages({
      onRoutesGenerated: (routes) => generateSitemap({ routes }),
    }),
  ],
});

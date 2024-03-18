import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import Sitemap from 'vite-plugin-sitemap'
import Pages from 'vite-plugin-pages'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname: 'http://chemicfest.com',
      readable: true,
    }),
    Pages(),
    VitePWA()
  ],
});

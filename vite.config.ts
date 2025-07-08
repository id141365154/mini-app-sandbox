import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const pwa = () =>
  VitePWA({
    registerType: "autoUpdate",
    manifest: {
      name: "My App",
      short_name: "F7PWA",
      theme_color: "#2196f3",
      background_color: "#ffffff",
      display: "standalone",
      start_url: "/",
      icons: [
        {
          src: "/icons/icon-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icons/icon-512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  });

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), pwa()],
});

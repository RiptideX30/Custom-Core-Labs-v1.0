import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/Custom-Core-Labs-v1.0/",
  plugins: [
    tailwindcss(), 
    TanStackRouterVite({
      target: 'react' // Fixed: changed 'spa' to 'react'
    }), 
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    middlewareMode: false,
  },
});

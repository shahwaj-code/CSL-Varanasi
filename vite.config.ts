import tailwindcss from "@tailwindcss/vite";
import viteReact from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tanstackStart({ server: { entry: "server" } }),
    viteReact(),
    tailwindcss(),
    nitro({ entry: "./src/server.ts", preset: "vercel" }),
  ],
  resolve: { tsconfigPaths: true },
});

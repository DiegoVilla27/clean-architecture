import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from "path";

type ViteConfig = {
  mode: string;
  command: string;
};

// https://vite.dev/config/
export default (args: ViteConfig) => {
  const generateScopedName: string = (args.mode === 'production') ? '[hash:base64:8]' : '[local]_[hash:base64:8]'

  return defineConfig({
    plugins: [
      react(),
      tailwindcss()
    ],
    server: {
      port: 3000
    },
    css: {
      modules: {
        scopeBehaviour: 'local',
        generateScopedName,
        localsConvention: 'camelCase'
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@core": path.resolve(__dirname, "./src/core"),
        "@data": path.resolve(__dirname, "./src/data"),
        "@domain": path.resolve(__dirname, "./src/domain"),
        "@presentation": path.resolve(__dirname, "./src/presentation")
      }
    }
  })
}

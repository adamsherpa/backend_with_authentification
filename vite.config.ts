import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import * as path from 'path';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'fastify',
      appPath: './src/client/App.vue',
      exportName: 'viteNodeApp',
      tsCompiler: 'esbuild',
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  root: './src/client',
});
